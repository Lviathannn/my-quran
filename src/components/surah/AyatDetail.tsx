import { BookmarkIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as Bookmarksolid } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

type Props = {
    id: number;
    suratName: string;
    nomerAyat: number;
    ayat: string;
    translate: string;
    latinText: string;
    value: {
        id: number;
        nomerAyat: any;
        suratName: any;
    };
    setValue: (value: any) => void;
};

export default function AyatDetail({
    id,
    suratName,
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
        suratName: string
    ) => {
        const bookmark = {
            id,
            nomerAyat,
            suratName,
        };

        setValue(bookmark);
    };

    const unbookmarkedHandler = () => {
        setValue({});
    };

    useEffect(() => {
        if (value.suratName == suratName) {
            if (value.nomerAyat == nomerAyat) {
                setbookMarked(true);
            } else if (value.nomerAyat !== nomerAyat) {
                setbookMarked(false);
            }
        }
    }, [value]);

    return (
        <div className="arab flex w-full flex-col gap-10 rounded-lg bg-white px-10 py-8">
            <div className="flex justify-between">
                <div className=" flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 p-4 font-medium text-emerald-600">
                    {nomerAyat}
                </div>
                <button className="mb-5 self-end">
                    {!bookMarked ? (
                        <BookmarkIcon
                            onClick={() => {
                                setbookMarked(true);
                                bookmarkedHandler(id, nomerAyat, suratName);
                            }}
                            className="w-7 text-gray-400"
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
                <p className="text-right font-arab text-xl font-semibold leading-loose tracking-wide text-slate-600">
                    {ayat}
                </p>
            </div>
            <div className="flex flex-col gap-5 text-base text-slate-600">
                <p className="text-emerald-500">{latinText}</p>
                <p>{translate}</p>
            </div>
        </div>
    );
}
