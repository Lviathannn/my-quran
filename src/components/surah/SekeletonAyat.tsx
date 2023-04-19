type Props = {};

export default function SekeletonAyat({}: Props) {
   return (
      <div className=" arab flex w-full flex-col gap-10 rounded-lg bg-white py-12 px-10">
         <div className="flex items-center justify-between gap-5">
            <p className=" flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 p-4 font-medium text-emerald-600"></p>
            <p className=" h-3 min-w-[100px] max-w-[230px] rounded-full bg-gray-100 dark:bg-gray-700"></p>
         </div>
         <div className="flex flex-col gap-5 text-base text-slate-600">
            <p className=" h-3 max-w-[300px] rounded-full bg-gray-100 dark:bg-gray-700"></p>
            <p className=" h-3 max-w-[530px] rounded-full bg-gray-100 dark:bg-gray-700"></p>
         </div>
      </div>
   );
}
