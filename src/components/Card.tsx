import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
   id: number;
   title: string;
   translate: string;
};

export default function Card({ id, title, translate }: Props) {
   const [love, setlove] = useState(false);
   return (
      <div className="relative">
         <button className="absolute top-5 right-5">
            {!love ? (
               <HeartIcon
                  onClick={() => {
                     setlove(!love);
                  }}
                  className="w-6 text-gray-400"
               />
            ) : (
               <HeartSolid
                  onClick={() => {
                     setlove(!love);
                  }}
                  className="w-6 text-emerald-400"
               />
            )}
         </button>
         <Link
            to={`/surah/${id}`}
            className="flex flex-col gap-5 rounded-xl bg-white px-5 py-5"
         >
            <div className="flex justify-between">
               <div className=" flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 p-4 font-medium text-emerald-600">
                  {id}
               </div>
            </div>
            <div className="flex items-end justify-between">
               <div className="flex flex-col">
                  <h2 className="font-bold text-slate-700">{title}</h2>
                  <p className="font-medium text-slate-400">{translate}</p>
               </div>
            </div>
         </Link>
      </div>
   );
}
