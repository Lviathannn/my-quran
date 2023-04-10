import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

type Props = {};

export default function surahDetail({}: Props) {
   const { surahId } = useParams();
   const navigate = useNavigate();
   const { data, isLoading } = useFetch<any>(
      `https://equran.id/api/v2/surat/${surahId}`
   );

   console.log(isLoading, data);
   if (data?.code > 200) {
      navigate("/404");
   }

   return <div>surahDetail</div>;
}
