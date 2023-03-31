import { Tooltip } from "flowbite-react";
import { sideBarData } from "../data/dummy";

type Props = {};

export default function SideBar({}: Props) {
   return (
      <aside
         id="logo-sidebar"
         className="fixed top-0 left-0 z-40 h-screen w-24 -translate-x-full transition-transform sm:translate-x-0"
         aria-label="Sidebar"
      >
         <div className="flex h-full flex-col items-center overflow-y-auto bg-white px-3 py-4 dark:bg-gray-800">
            <a
               href="/"
               className="mb-5 flex items-center justify-center pl-2.5"
            >
               <img
                  src="img/quran.png"
                  className="mr-3 h-10"
                  alt="Quran Logo"
               />
            </a>
            <ul className="mt-10 space-y-5 font-medium">
               {sideBarData.map((item) => {
                  return (
                     <li key={item.id}>
                        <Tooltip content={item.name} placement="right">
                           <a
                              href="#"
                              className="flex items-center justify-center rounded-lg py-2 px-3 text-slate-600 hover:bg-gray-100 hover:text-emerald-500 dark:text-white dark:hover:bg-gray-700"
                           >
                              <item.icon className="mb-1 h-7 w-7" />
                           </a>
                        </Tooltip>
                     </li>
                  );
               })}
            </ul>
            <a href="" className="absolute bottom-10 text-center">
               <Tooltip content="Github" placement="right">
                  <img
                     src="img/github.png"
                     alt="github"
                     className="mx-auto h-8 w-8"
                  />
               </Tooltip>
            </a>
         </div>
      </aside>
   );
}
