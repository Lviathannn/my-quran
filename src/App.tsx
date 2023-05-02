import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Surah from "./pages/Surah";
import BookMark from "./pages/BookMark";
import Favorite from "./pages/Favorite";
import PrayerSchedule from "./pages/PrayerSchedule";
import FlowFooter from "./components/FlowFooter";
import SurahDetail from "./pages/surahDetail";
import NotFound from "./pages/NotFound";
import useWindowWidth from "./hooks/useWindowWidth";

function App() {
    const windowWidth = useWindowWidth();
    return (
        <>
            <Router>
                {windowWidth > 1024 ? <SideBar /> : <Navbar />}
                <div className="bg-slate-100 font-poppins lg:pl-20">
                    <Routes>
                        <Route path="/" Component={Surah} />
                        <Route path="/surah/:surahId" Component={SurahDetail} />
                        <Route
                            path="/surah/:surahId/:ayatId"
                            Component={SurahDetail}
                        />
                        <Route path="/bookmark" Component={BookMark} />
                        <Route path="/favorite" Component={Favorite} />
                        <Route
                            path="/jadwalsholat"
                            Component={PrayerSchedule}
                        />
                        <Route path="/404" Component={NotFound} />
                        <Route path="*" Component={NotFound} />
                    </Routes>
                </div>
                <FlowFooter />
            </Router>
        </>
    );
}

export default App;
