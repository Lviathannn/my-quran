import { NavLink } from "react-router-dom";
import { sideBarData } from "../data/dummy";
type Props = {};

export default function Navbar({}: Props) {
   return (
      <nav>
         <div className="fixed bottom-0 left-0 z-50 h-16 w-full bg-white drop-shadow-sm dark:border-gray-600 dark:bg-gray-700 sm:hidden">
            <div className="mx-auto grid h-full max-w-lg grid-cols-4 font-medium">
               {sideBarData.map((item) => {
                  return (
                     <NavLink
                        to={item.link}
                        type="button"
                        className={({ isActive }) =>
                           `dark:hover:bg-gray-800" group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 ${
                              isActive ? "text-emerald-400" : " text-slate-700"
                           }`
                        }
                        key={item.id}
                     >
                        <item.icon className="mb-1 h-6 w-6 group-hover:text-emerald-400 dark:text-gray-400" />
                     </NavLink>
                  );
               })}
            </div>
         </div>
      </nav>
   );
}
