import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loved } from "../../type";

type Props = {
    id: number;
    title: string;
    translate: string;
    customClass?: string;
    ayatID?: number;
    ayatNumber?: string;
};

export default function Card({
    id,
    title,
    translate,
    customClass,
    ayatID,
    ayatNumber
}: Props) {
    const [love, setlove] = useState(false);

    useEffect(() => {
        const localStorage = window.localStorage.getItem("loved");
        if (localStorage !== null) {
            const lovedStorage = JSON.parse(localStorage);
            lovedStorage.forEach((love: Loved) => {
                if (love.id === id) {
                    setlove(true);
                }
            });
        }
    }, []);

    const lovedHandler = (id: number, title: string, translate: string) => {
        const newLovedsurah = { id, title, translate };
        const localStorage = window.localStorage.getItem("loved");
        if (localStorage == null) {
            window.localStorage.setItem(
                "loved",
                JSON.stringify([newLovedsurah])
            );
        } else {
            const oldStorage = JSON.parse(localStorage);
            const newStorage = [newLovedsurah, ...oldStorage];
            window.localStorage.setItem("loved", JSON.stringify(newStorage));
        }
        setlove(true);
    };

    const unLovedHandler = () => {
        const localStorage = window.localStorage.getItem("loved");
        if (localStorage !== null) {
            const oldStorage = JSON.parse(localStorage);
            const newStorage = oldStorage.filter((item: any) => {
                if (item.id !== id) {
                    return item;
                }
            });
            window.localStorage.setItem("loved", JSON.stringify(newStorage));
            setlove(false);
        }
    };

    return (
        <div className={`relative `}>
            <button className="absolute top-7 right-5">
                {!love ? (
                    <HeartIcon
                        onClick={() => {
                            lovedHandler(id, title, translate);
                        }}
                        className="w-6 text-gray-400 dark:text-white"
                    />
                ) : (
                    <HeartSolid
                        onClick={() => {
                            unLovedHandler();
                        }}
                        className="w-6 text-emerald-400"
                    />
                )}
            </button>
            <Link
                to={`/surah/${id}${ayatID ? `/${ayatID}` : ""}`}
                className={`flex flex-col gap-5 rounded-xl bg-white px-5 py-5 dark:bg-slate-600 ${customClass}`}
            >
                <div className="flex justify-between">
                    <div className=" flex h-4 w-4 items-center justify-center rounded-full bg-emerald-50 p-4 font-medium text-emerald-600 dark:bg-emerald-400 dark:text-white">
                        {id}
                    </div>
                </div>
                <div className="flex items-end justify-between">
                    <div className="flex flex-col">
                        <h2 className="text-base font-semibold text-slate-600 dark:text-white">
                            {title.replace("-", " ")}
                        </h2>
                        <p className="text-sm font-medium text-slate-400 dark:text-white">
                            {ayatNumber ? ayatNumber :translate}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
