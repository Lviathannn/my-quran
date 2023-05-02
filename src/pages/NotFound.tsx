type Props = {};
import { Link } from "react-router-dom";
import Alquran from "../assets/img/Alquran.png";

export default function NotFound({}: Props) {
    return (
        <div className="flex h-screen items-center justify-center bg-slate-100">
            <div className="flex flex-col items-center justify-center gap-6">
                <img src={Alquran} alt="" className="w-40" />
                <h1 className="text-lg font-semibold text-slate-600">
                    surah Yang Anda Cari Tidak Ditemukan
                </h1>
                <Link
                    to={"/"}
                    className="rounded-md bg-emerald-500 px-5 py-2 text-white"
                >
                    Home
                </Link>
            </div>
        </div>
    );
}
