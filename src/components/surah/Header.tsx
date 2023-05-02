import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Dispatch } from "react";
import { surahData } from "../../type";

type Props = {
    setGrid: Dispatch<boolean>;
    setKeyWord: Dispatch<string>;
    grid: boolean;
    searchHandler: () => void;
};

export default function Header({
    setGrid,
    grid,
    setKeyWord,
    searchHandler,
}: Props) {
    return (
        <div className="sticky top-0 z-50 flex w-full items-center justify-between bg-slate-100 py-5 px-8">
            <div className="">
                <button
                    onClick={() => {
                        setGrid(!grid);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="h-6 w-6 text-slate-600"
                        viewBox="0 0 16 16"
                    >
                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                    </svg>
                </button>
            </div>
            <form className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-slate-600" />
                </div>
                <input
                    onChange={(e) => {
                        setKeyWord(e.target.value);
                        searchHandler();
                    }}
                    type="text"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 placeholder:text-sm focus:border-emerald-500  focus:ring-emerald-500 dark:text-white dark:placeholder-gray-400 dark:focus:border-emerald-500 dark:focus:ring-emerald-500"
                    placeholder="Al Fatihah"
                ></input>
            </form>
        </div>
    );
}
