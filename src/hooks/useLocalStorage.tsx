import { useState, useEffect } from "react";

function useLocalStorage(key: string, initialValue: any) {
   const [value, setValue] = useState(() => {
      const storedValue = window.localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
   });

   useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
   }, [key, value]);

   return [value, setValue];
}

export default useLocalStorage;
