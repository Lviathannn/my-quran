import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type Props = {};

export default function MobileHeader({}: Props) {
   return (
      <div className="fixed top-0 flex h-20 w-full items-center justify-between gap-5 bg-white px-5 shadow-sm sm:hidden">
         <img src="img/quran.png" alt="" className="w-8" />
         <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
               <MagnifyingGlassIcon className="h-5 w-5 text-slate-600" />
            </div>
            <input
               type="text"
               className="block w-full rounded-lg border-2 border-gray-200 bg-white p-2.5 pl-10 text-sm text-gray-900 placeholder:text-sm focus:border-emerald-500  focus:ring-emerald-500 dark:text-white dark:placeholder-gray-400 dark:focus:border-emerald-500 dark:focus:ring-emerald-500"
               placeholder="Al Fatihah"
            ></input>
         </div>
      </div>
   );
}
