import { useEffect } from "react";
import Card from "../components/surah/Card";
import useLocalStorage from "../hooks/useLocalStorage";

type Props = {};

export default function BookMark({}: Props) {
  const [value] = useLocalStorage("bookmark", {});
  const [darkMode = value] = useLocalStorage("darkmode", "light");
  useEffect(() => {
    if (darkMode == "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="h-screen bg-slate-100 p-8 dark:bg-slate-700">
      <h1 className="text-xl font-medium text-slate-600 dark:text-slate-100">
        Ayat Yang Ditandai :
      </h1>
      {value?.id !== undefined ? (
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          <Card
            id={value.id}
            title={value.surahName}
            ayatNumber={`Ayat Ke ${value.nomerAyat}`}
            ayatID={value.nomerAyat}
            translate={value.surahTranslate}
          />
        </div>
      ) : (
        <p className="mt-5 text-sm text-slate-500">
          Anda Belum Mempunyai Ayat yang ditandai
        </p>
      )}
    </div>
  );
}
