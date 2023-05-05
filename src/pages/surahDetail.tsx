import { useParams, Navigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import SurahList from "../components/surah/SurahList";
import AyatDetail from "../components/surah/AyatDetail";
import { sekeleteonDetails } from "../data/dummy";
import SekeletonAyat from "../components/surah/SekeletonAyat";
import useWindowWidth from "../hooks/useWindowWidth";
import AyatHeader from "../components/surah/AyatHeader";
import useLocalStorage from "../hooks/useLocalStorage";

type Props = {};

export default function surahDetail({}: Props) {
    const { surahId, ayatId = 0 } = useParams();
    const windowWidth = useWindowWidth();
    const [value, setValue] = useLocalStorage("bookmark", {});
    const { data, isLoading } = useFetch<any>(
        `https://equran.id/api/v2/surat/${surahId}`
    );
    if (data?.code > 200) {
        return <Navigate to={"/404"} />;
    } else {
        return (
            <>
                {windowWidth < 1024 ? (
                    <AyatHeader
                        nextsurah={data?.data?.suratSelanjutnya}
                        beforesurah={data?.data?.suratSebelumnya}
                        surahName={data?.data?.namaLatin}
                        isLoading={isLoading}
                    />
                ) : (
                    ""
                )}
                <div className="grid grid-cols-5 gap-5 py-8 px-1 lg:px-8">
                    {windowWidth > 1024 ? (
                        <div className="col-start-1">
                            <SurahList activesurah={data?.data?.nama} />
                        </div>
                    ) : (
                        ""
                    )}
                    <div
                        className={`relative col-start-1 col-end-6 flex flex-col gap-1 pt-12 lg:col-start-2 lg:gap-5 lg:px-5 lg:pt-0`}
                    >
                        {isLoading
                            ? sekeleteonDetails.map((sekeleton) => {
                                  return <SekeletonAyat key={sekeleton} />;
                              })
                            : data?.data?.ayat.map((surah: any) => {
                                  if (ayatId < data.data.ayat.length) {
                                      if (surah.nomorAyat >= ayatId) {
                                          return (
                                              <AyatDetail
                                                  id={data.data.nomor}
                                                  value={value}
                                                  setValue={setValue}
                                                  key={surah.nomorAyat}
                                                  nomerAyat={surah.nomorAyat}
                                                  ayat={surah.teksArab}
                                                  translate={
                                                      surah.teksIndonesia
                                                  }
                                                  latinText={surah.teksLatin}
                                                  surahName={
                                                      data.data.namaLatin
                                                  }
                                              />
                                          );
                                      }
                                  } else {
                                      <Navigate to={"/404"} />;
                                  }
                              })}
                    </div>
                </div>
            </>
        );
    }
}
