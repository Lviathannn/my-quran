import Card from "../components/surah/Card";
import useLocalStorage from "../hooks/useLocalStorage";

type Props = {};

export default function BookMark({}: Props) {
    const [value] = useLocalStorage("bookmark", {});
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
                        translate={`Ayat Ke ${value.nomerAyat}`}
                        ayatID={value.nomerAyat}
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
