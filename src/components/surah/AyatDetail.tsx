import { BookmarkIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as Bookmarksolid } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
   id: number;
   ayat: string;
   translate: string;
   latinText: string;
};

export default function AyatDetail({ id, ayat, translate, latinText }: Props) {
   const [bookMarked, setbookMarked] = useState(false);
   return (
      <div className=" arab flex w-full flex-col gap-10 rounded-lg bg-white px-10 py-8">
         <button className="mb-5 self-end">
            {!bookMarked ? (
               <BookmarkIcon
                  onClick={() => {
                     setbookMarked(!bookMarked);
                  }}
                  className="w-7 text-gray-400"
               />
            ) : (
               <Bookmarksolid
                  onClick={() => {
                     setbookMarked(!bookMarked);
                  }}
                  className="w-7 text-emerald-400"
               />
            )}
         </button>
         <div className="flex items-center justify-between gap-5">
            <div className=" flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 p-4 font-medium text-emerald-600">
               {id}
            </div>
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
