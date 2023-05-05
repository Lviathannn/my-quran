import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import DarkToogle from "./DarkToogle";
import { Dispatch } from "react";

type Props = {
    setKeyWord: Dispatch<string>;
    searchHandler: () => void;
};

export default function MobileHeader({ setKeyWord, searchHandler }: Props) {
    return (
        <div className="fixed top-0 z-50 flex h-20 w-full items-center justify-between gap-5 bg-white px-5 shadow-sm dark:bg-slate-700">
            <DarkToogle direction="bottom" />
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-slate-600 dark:text-slate-100" />
                </div>
                <input
                    onChange={(e) => {
                        setKeyWord(e.target.value);
                        searchHandler();
                    }}
                    type="text"
                    className="ark:border-gray-500 block w-full rounded-lg border-2 border-gray-200 bg-white p-2.5 pl-10 text-sm text-gray-900 placeholder:text-sm focus:border-emerald-500  focus:ring-emerald-500 dark:border-gray-500  dark:bg-slate-500 dark:text-white dark:placeholder-gray-200 dark:focus:border-emerald-500 dark:focus:ring-emerald-500"
                    placeholder="Al Fatihah"
                ></input>
            </div>
        </div>
    );
}
