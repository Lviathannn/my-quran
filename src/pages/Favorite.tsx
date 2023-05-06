import { useEffect } from "react";
import Card from "../components/surah/Card";
import useLocalStorage from "../hooks/useLocalStorage";
import { Loved } from "../type";

type Props = {};

export default function Favorite({}: Props) {
    const [value] = useLocalStorage("loved", []);
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

    const sortedValue = value.sort((a: Loved, b: Loved) => {
        return a.id - b.id;
    });

    return (
        <div className="h-screen bg-slate-100 p-8 dark:bg-slate-700">
            <h1 className="text-xl font-medium text-slate-600 dark:text-slate-100">
                surah Yang Anda Sukai :
            </h1>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {sortedValue.length >= 1 ? (
                    sortedValue.map((item: Loved) => (
                        <Card
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            translate={item.translate}
                        />
                    ))
                ) : (
                    <p className="mt-5 text-sm text-slate-500">
                        Anda Belum Mempunyai surah Yang Disukai
                    </p>
                )}
            </div>
        </div>
    );
}
