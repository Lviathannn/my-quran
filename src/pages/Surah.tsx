import { useRef, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import useFetch from "../hooks/useFetch";
import { SurahData } from "../type";
import SekeletonCard from "../components/SekeletonCard";
import { sekeleteon } from "../data/dummy";
type Props = {};

export default function Surah({}: Props) {
   const [grid, setGrid] = useState(true);
   const [search, setSearch] = useState("");
   const { data, isLoading } = useFetch<any>("https://equran.id/api/v2/surat");
   const surahList = useRef<HTMLDivElement>(null);

   const filterSurah = () => {
      if (surahList.current?.children) {
         for (const surah of surahList?.current?.children) {
            surah.classList.remove("hidden");
            if (search == "") {
               surah.classList.remove("hidden");
            } else if (
               !surah.textContent
                  ?.toLocaleLowerCase()
                  .includes(
                     search
                        .toLocaleLowerCase()
                        .replace("al", "")
                        .replace(" ", "-")
                  )
            ) {
               surah.classList.add("hidden");
            }
         }
      }
   };

   return (
      <div className="relative">
         <Header
            setGrid={setGrid}
            grid={grid}
            setKeyWord={setSearch}
            searchHandler={filterSurah}
         />
         <MobileHeader />
         <div
            ref={surahList}
            className={`grid grid-cols-1 gap-5 p-8 px-5 pt-24 sm:pt-0 ${
               grid
                  ? "sm:grid-cols-2 lg:grid-cols-4"
                  : "sm:grid-cols-1 lg:grid-cols-2"
            }`}
         >
            {isLoading
               ? sekeleteon.map((data) => {
                    return <SekeletonCard key={data} />;
                 })
               : data?.data?.map((surah: any) => {
                    return (
                       <Card
                          key={surah.nomor}
                          title={surah.namaLatin}
                          translate={surah.arti}
                          id={surah.nomor}
                       />
                    );
                 })}
         </div>
      </div>
   );
}
