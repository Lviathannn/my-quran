import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
   return (
      <>
         <Navbar />
         <SideBar />
         <div className="h-screen w-screen bg-slate-100"></div>
      </>
   );
}

export default App;
