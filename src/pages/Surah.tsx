import { useState } from "react";
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
    const windowWidth = useWindowWidth();

    return (
        <div className="relative min-h-screen">
            {windowWidth > 1024 ? (
                <Header setGrid={setGrid} grid={grid} setKeyWord={setSearch} />
            ) : (
                <MobileHeader setKeyWord={setSearch} />
            )}
            <div
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
                    : search == ""
                    ? data?.data?.map((surah: any) => {
                          return (
                              <Card
                                  key={surah.nomor}
                                  title={surah.namaLatin}
                                  translate={surah.arti}
                                  id={surah.nomor}
                              />
                          );
                      })
                    : data?.data?.map((surah: any) => {
                          if (
                              surah.namaLatin
                                  .toLowerCase()
                                  .replace("-", "")
                                  .replace("'", "")
                                  .replace(" ", "")
                                  .includes(
                                      search.toLowerCase().replace(" ", "")
                                  )
                          ) {
                              return (
                                  <Card
                                      key={surah.nomor}
                                      title={surah.namaLatin}
                                      translate={surah.arti}
                                      id={surah.nomor}
                                  />
                              );
                          }
                      })}
                {}
            </div>
        </div>
    );
}
