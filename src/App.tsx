import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import Surah from "./pages/Surah";
import BookMark from "./pages/BookMark";
import Favorite from "./pages/Favorite";
import PrayerSchedule from "./pages/PrayerSchedule";
import FlowFooter from "./components/FlowFooter";
import NotFound from "./pages/NotFound";
import useWindowWidth from "./hooks/useWindowWidth";
import SurahDetails from "./pages/SurahDetails";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    const windowWidth = useWindowWidth();
    ScrollToTop();
    return (
        <>
            {windowWidth > 1024 ? <SideBar /> : <Navbar />}
            <div className="bg-slate-100 font-poppins dark:bg-slate-700 lg:pl-20">
                <Routes>
                    <Route path="/" Component={Surah} />
                    <Route path="/surah/:surahId" Component={SurahDetails} />
                    <Route
                        path="/surah/:surahId/:ayatId"
                        Component={SurahDetails}
                    />
                    <Route path="/bookmark" Component={BookMark} />
                    <Route path="/favorite" Component={Favorite} />
                    <Route path="/jadwalsholat" Component={PrayerSchedule} />
                    <Route path="/404" Component={NotFound} />
                    <Route path="*" Component={NotFound} />
                </Routes>
            </div>
            <FlowFooter />
        </>
    );
}

export default App;
