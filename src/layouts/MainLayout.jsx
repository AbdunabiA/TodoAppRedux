import { Outlet } from "react-router-dom";
import Background from "../components/Background"
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="w-full">
      <Background />
      <div className="absolute top-0 left-0 w-full">
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  );
}

export default MainLayout