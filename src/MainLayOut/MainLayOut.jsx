import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";


const MainLayOut = () => {
    return (
        <div className="bg-[#FFFFFF] text-[#061938]">
            <h1><Navbar></Navbar></h1>
            <Outlet/>
            <h2><Footer/></h2>
        </div>
    );
};

export default MainLayOut;