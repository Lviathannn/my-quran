import { Tooltip } from "flowbite-react";
import { sideBarData } from "../data/dummy";
import { NavLink } from "react-router-dom";
import github from "../assets/img/github.png";
import quran from "../assets/img/quran.png";
import DarkToogle from "./DarkToogle";

type Props = {};

export default function SideBar({}: Props) {
    return (
        <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 h-screen w-20 -translate-x-full transition-transform sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="flex h-full flex-col items-center overflow-y-auto bg-white px-3 py-4 dark:bg-gray-800">
                <a
                    href="/"
                    className="mb-5 flex items-center justify-center pl-2.5"
                >
                    <img src={quran} className="mr-3 h-10" alt="Quran Logo" />
                </a>
                <ul className="mt-10 space-y-5 font-medium">
                    {sideBarData.map((item) => {
                        return (
                            <li key={item.id}>
                                <Tooltip content={item.name} placement="right">
                                    <NavLink
                                        to={`/${item.link}`}
                                        className={({ isActive }) =>
                                            `flex items-center justify-center rounded-lg py-2 px-3 dark:hover:bg-gray-700 dark:hover:text-emerald-500 ${
                                                isActive
                                                    ? "bg-gray-100 text-emerald-500 dark:bg-gray-700 dark:text-emerald-500"
                                                    : "text-slate-700 hover:bg-gray-100 hover:text-emerald-500 dark:text-slate-100"
                                            }`
                                        }
                                    >
                                        <item.icon className="mb-1 h-7 w-7" />
                                    </NavLink>
                                </Tooltip>
                            </li>
                        );
                    })}
                    <li className="flex justify-center">
                        <DarkToogle direction="right" />
                    </li>
                </ul>
                <a
                    href=""
                    className="absolute bottom-10 flex flex-col items-center justify-center gap-3"
                >
                    <Tooltip content="Github" placement="right">
                        <img
                            src={github}
                            alt="github"
                            className="mx-auto h-8 w-8"
                        />
                    </Tooltip>
                </a>
            </div>
        </aside>
    );
}
