import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import FlowTable from "../components/prayerSchedule/FlowTable";
import FlowDropdown from "../components/prayerSchedule/FlowDropdown";
import useLocalStorage from "../hooks/useLocalStorage";

type Props = {};

export default function PrayerSchedule({}: Props) {
    const [city, setCity] = useState({ id: "683", city: "Ciamis" });
    const [value] = useLocalStorage("darkmode", "light");
    useEffect(() => {
        if (value == "dark") {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    }, [value]);
    const getDate = () => {
        let day: string | number = new Date().getDate();
        let month: string | number = new Date().getMonth();
        const year: string | number = new Date().getFullYear();
        if (day < 10) {
            day = `0${day}`;
        }
        if (month < 10) {
            month = `0${month}`;
        }
        return `${year}-${month}-${day}`;
    };
    const date = getDate();
    const { data, isLoading } = useFetch<any>(
        `https://api.banghasan.com/sholat/format/json/jadwal/kota/${city.id}/tanggal/${date}`
    );
    return (
        <div className="h-screen bg-slate-100 p-8 dark:bg-slate-700">
            <div className="flex flex-col gap-5">
                <FlowDropdown setCity={setCity} />
                <Table>
                    <Table.Head className="dark:bg-slate-800">
                        <Table.HeadCell className="dark:text-slate-100">
                            Waktu Sholat
                        </Table.HeadCell>
                        <Table.HeadCell className="dark:text-slate-100">
                            Jam
                        </Table.HeadCell>
                        <Table.HeadCell className="dark:text-slate-100">
                            Kota
                        </Table.HeadCell>
                        <Table.HeadCell className="dark:text-slate-100">
                            Tanggal
                        </Table.HeadCell>
                    </Table.Head>
                    {!isLoading ? (
                        <FlowTable data={data?.jadwal?.data} city={city.city} />
                    ) : (
                        ""
                    )}
                </Table>
            </div>
        </div>
    );
}
