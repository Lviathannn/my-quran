import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import SurahList from "../components/surah/SurahList";
import AyatDetail from "../components/surah/AyatDetail";
import { sekeleteonDetails } from "../data/dummy";
import SekeletonAyat from "../components/surah/SekeletonAyat";

type Props = {};

export default function surahDetail({}: Props) {
   const { surahId } = useParams();
   const navigate = useNavigate();
   const { data, isLoading } = useFetch<any>(
      `https://equran.id/api/v2/surat/${surahId}`
   );

   if (data?.code > 200) {
      navigate("/404");
   }
   return (
      <div className="grid grid-cols-5 gap-5 px-8 py-8">
         <div className="col-start-1">
            <SurahList activeSurah={data?.data?.nama} />
         </div>
         <div className="relative col-start-2 col-end-6 flex flex-col gap-5 px-5">
            {isLoading
               ? sekeleteonDetails.map((sekeleton) => {
                    return <SekeletonAyat key={sekeleton} />;
                 })
               : data?.data?.ayat.map((surah: any) => (
                    <AyatDetail
                       key={surah.nomorAyat}
                       id={surah.nomorAyat}
                       ayat={surah.teksArab}
                       translate={surah.teksIndonesia}
                       latinText={surah.teksLatin}
                    />
                 ))}
         </div>
      </div>
   );
}
