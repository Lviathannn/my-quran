import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/solid";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";
import { Tooltip } from "flowbite-react";
import { Placement } from "../type";
type Props = {
    direction: Placement;
};

export default function DarkToogle({ direction }: Props) {
    const [value, setValue] = useLocalStorage("darkmode", "light");
    useEffect(() => {
        if (value == "dark") {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    }, [value]);

    return (
        <Tooltip
            content={value == "dark" ? "Light Mode" : "Dark Mode"}
            placement={direction}
        >
            <button
                className="flex h-8 w-8 items-center justify-center"
                onClick={() => {
                    setValue(value === "dark" ? "light" : "dark");
                }}
            >
                {value == "dark" ? (
                    <SunIcon className="h-8 w-8 text-emerald-400" />
                ) : (
                    <MoonIcon className="h-7 w-7 text-emerald-400" />
                )}
            </button>
        </Tooltip>
    );
}
