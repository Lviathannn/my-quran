import { Link } from "react-router-dom";

type surah = {
    nomor: number;
    nama: string;
    namaLatin: string;
    jumlahAyat: number;
};

type Props = {
    nextsurah: surah | false;
    beforesurah: surah | false;
    surahName: string;
    isLoading: boolean;
};

export default function AyatHeader({
    nextsurah,
    beforesurah,
    surahName,
    isLoading,
}: Props) {
    return (
        <header className="fixed top-0 left-0 z-40 flex h-20 w-full items-center justify-center bg-white drop-shadow-sm dark:bg-slate-800">
            <div className="grid w-full grid-cols-3 items-center justify-items-center">
                {beforesurah != false ? (
                    <Link to={`/surah/${beforesurah?.nomor}`}>
                        {!isLoading ? (
                            <div className="flex items-center gap-1 font-bold dark:text-slate-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-caret-left"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                                </svg>
                                <p className="text-xs font-normal text-slate-700 dark:text-slate-100">
                                    {beforesurah?.namaLatin}
                                </p>
                            </div>
                        ) : (
                            ""
                        )}
                    </Link>
                ) : (
                    <div className="w-14"></div>
                )}
                <p className="text-xs font-normal text-slate-700 dark:text-slate-100">
                    {surahName}
                </p>
                {nextsurah != false ? (
                    <Link to={`/surah/${nextsurah?.nomor}`}>
                        {!isLoading ? (
                            <div className="flex items-center gap-1 dark:text-slate-100">
                                <p className="text-xs font-normal text-slate-700 dark:text-slate-100">
                                    {nextsurah?.namaLatin}
                                </p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-caret-right"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                                </svg>
                            </div>
                        ) : (
                            ""
                        )}
                    </Link>
                ) : (
                    <div className="w-10"></div>
                )}
            </div>
        </header>
    );
}
