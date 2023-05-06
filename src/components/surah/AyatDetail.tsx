import { BookmarkIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as Bookmarksolid } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

type Props = {
    id: number;
    surahName: string;
    nomerAyat: number;
    ayat: string;
    translate: string;
    latinText: string;
    value: {
        id: number;
        nomerAyat: any;
        surahName: any;
    };
    setValue: (value: any) => void;
};

export default function AyatDetail({
    id,
    surahName,
    nomerAyat,
    ayat,
    translate,
    latinText,
    value,
    setValue,
}: Props) {
    const [bookMarked, setbookMarked] = useState(false);

    const bookmarkedHandler = (
        id: number,
        nomerAyat: number,
        surahName: string
    ) => {
        const bookmark = {
            id,
            nomerAyat,
            surahName,
        };

        setValue(bookmark);
    };

    const unbookmarkedHandler = () => {
        setValue({});
    };

    useEffect(() => {
        if (value.surahName == surahName) {
            if (value.nomerAyat == nomerAyat) {
                setbookMarked(true);
            } else if (value.nomerAyat !== nomerAyat) {
                setbookMarked(false);
            }
        }
    }, [value]);

    return (
        <div className="arab flex flex-col gap-10 bg-white px-5 py-5 dark:bg-slate-600  lg:rounded-lg lg:px-7">
            <div className="flex justify-between">
                <div className=" flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 p-4 font-medium text-emerald-600 dark:bg-emerald-400 dark:text-white">
                    {nomerAyat}
                </div>
                <button className="mb-5 self-end">
                    {!bookMarked ? (
                        <BookmarkIcon
                            onClick={() => {
                                setbookMarked(true);
                                bookmarkedHandler(id, nomerAyat, surahName);
                            }}
                            className="w-7 text-gray-400 dark:text-slate-100"
                        />
                    ) : (
                        <Bookmarksolid
                            onClick={() => {
                                setbookMarked(false);
                                unbookmarkedHandler();
                            }}
                            className="w-7 text-emerald-400"
                        />
                    )}
                </button>
            </div>
            <div className="flex items-center justify-end gap-5">
                <p
                    className=" font-arab text-2xl leading-[2.3] tracking-normal text-slate-600 dark:text-slate-200"
                    dir="rtl"
                >
                    {ayat}
                </p>
            </div>
            <div className="flex flex-col gap-5 text-base text-slate-600 dark:text-slate-100">
                <p className="text-emerald-500">{latinText}</p>
                <p>{translate}</p>
            </div>
        </div>
    );
}
