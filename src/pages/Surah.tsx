import { useRef, useState } from "react";
import Card from "../components/surah/Card";
import Header from "../components/surah/Header";
import MobileHeader from "../components/MobileHeader";
import useFetch from "../hooks/useFetch";
import SekeletonCard from "../components/surah/SekeletonCard";
import { sekeleteon } from "../data/dummy";
import useWindowWidth from "../hooks/useWindowWidth";
type Props = {};

export default function surah({}: Props) {
    const [grid, setGrid] = useState(true);
    const [search, setSearch] = useState("");
    const { data, isLoading } = useFetch<any>("https://equran.id/api/v2/surat");
    const surahList = useRef<HTMLDivElement>(null);
    const filtersurah = () => {
        if (surahList.current?.children) {
            for (const surah of surahList?.current?.children) {
                surah.classList.remove("hidden");
                if (search == "") {
                    surah.classList.remove("hidden");
                } else if (
                    !surah.textContent
                        ?.toLocaleLowerCase()
                        .replace("al-", "")
                        .replace("-", "")
                        .replace("'", "")
                        .includes(
                            search
                                .toLocaleLowerCase()
                                .replace("ali", "")
                                .replace("al", "")
                                .replace(" ", "-")
                                .replace("'", "")
                        )
                ) {
                    surah.classList.add("hidden");
                }
            }
        }
    };
    const windowWidth = useWindowWidth();

    return (
        <div className="relative min-h-screen">
            {windowWidth > 1024 ? (
                <Header
                    setGrid={setGrid}
                    grid={grid}
                    setKeyWord={setSearch}
                    searchHandler={filtersurah}
                />
            ) : (
                <MobileHeader
                    setKeyWord={setSearch}
                    searchHandler={filtersurah}
                />
            )}
            <div
                ref={surahList}
                className={`grid grid-cols-1 gap-5 p-8 pt-24 lg:pt-0 ${
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
