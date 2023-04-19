import { sekeleteonDetails } from "../../data/dummy";
import useFetch from "../../hooks/useFetch";
import Card from "./Card";
import SekeletonCard from "./SekeletonCard";

type Props = { activeSurah: string; isLoading?: boolean };

export default function SurahList({ activeSurah }: Props) {
   const { data, isLoading } = useFetch<any>("https://equran.id/api/v2/surat");
   return (
      <div className="sticky top-0 flex h-screen flex-col gap-3 overflow-auto px-0 scrollbar-hide">
         {isLoading
            ? sekeleteonDetails.map((sekeleton) => {
                 return <SekeletonCard key={sekeleton} />;
              })
            : data?.data?.map((surah: any) => {
                 return (
                    <Card
                       key={surah.nomor}
                       id={surah.nomor}
                       title={surah.namaLatin}
                       translate={surah.arti}
                       customClass={
                          surah.nama == activeSurah
                             ? "border-[3px] border-emerald-400"
                             : ""
                       }
                    />
                 );
              })}
      </div>
   );
}
