import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";


const MainLayOut = () => {
    const location = useLocation()
    const noHeaderFooter=location.pathname.includes('login') || location.pathname.includes('resister')


    return (
        <div className="bg-[#FFFFFF] text-[#061938]">
            <h1>{noHeaderFooter || <Navbar></Navbar>}</h1>
            <Outlet/>
            <h2>{noHeaderFooter || <Footer/>}</h2>
        </div>
    );
};

export default MainLayOut;