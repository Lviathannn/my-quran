import { sekeleteonDetails } from "../../data/dummy";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import Card from "./Card";
import SekeletonCard from "./SekeletonCard";

type Props = { activesurah: string; isLoading?: boolean };

export default function surahList({ activesurah }: Props) {
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
                                  surah.nama == activesurah
                                      ? "border-[3px] border-emerald-400"
                                      : ""
                              }
                          />
                      );
                  })}
        </div>
    );
}
