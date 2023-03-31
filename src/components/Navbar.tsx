import { sideBarData } from "../data/dummy";
type Props = {};

export default function Navbar({}: Props) {
   return (
      <nav>
         <div className="fixed bottom-0 left-0 z-50 h-20 w-full bg-white/70 backdrop-blur-sm dark:border-gray-600 dark:bg-gray-700 sm:hidden">
            <div className="mx-auto grid h-full max-w-lg grid-cols-4 font-medium">
               {sideBarData.map((item) => {
                  return (
                     <button
                        type="button"
                        className="group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
                        key={item.id}
                     >
                        <item.icon className="mb-1 h-6 w-6 text-slate-600 group-hover:text-emerald-400 dark:text-gray-400 dark:group-hover:text-emerald-400" />
                     </button>
                  );
               })}
            </div>
         </div>
      </nav>
   );
}
