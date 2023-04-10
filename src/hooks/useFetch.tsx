import { useState, useEffect } from "react";

interface FetchState<T> {
   data: T | null;
   isLoading: boolean;
   error: Error | null;
}

function useFetch<T>(url: string): FetchState<T> {
   const [state, setState] = useState<FetchState<T>>({
      data: null,
      isLoading: true,
      error: null,
   });

   useEffect(() => {
      async function fetchData() {
         setState({ data: null, isLoading: true, error: null });

         try {
            const response = await fetch(url);
            const data = await response.json();
            setState({ data, isLoading: false, error: null });
         } catch (error: Error | null | any) {
            setState({ data: null, isLoading: false, error });
         }
      }

      fetchData();
   }, [url]);

   return state;
}

export default useFetch;
