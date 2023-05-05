type Props = {};

export default function SekeletonCard({}: Props) {
    return (
        <div className="flex animate-pulse flex-col gap-5 rounded-xl bg-white px-5 py-5 dark:bg-slate-600">
            <div className="flex justify-between">
                <div className=" flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 p-4 font-medium text-emerald-600 dark:bg-emerald-400"></div>
                <div className="h-3 w-5 rounded-full bg-gray-100 dark:bg-gray-700"></div>
            </div>
            <div className=" h-3 max-w-[230px] rounded-full bg-gray-100 dark:bg-gray-700"></div>
            <div className=" h-3 max-w-[200px] rounded-full bg-gray-100 dark:bg-gray-700"></div>
        </div>
    );
}
