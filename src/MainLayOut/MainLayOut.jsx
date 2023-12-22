import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";


const MainLayOut = () => {
    return (
        <div>
            <h1><Navbar></Navbar></h1>
            <Outlet/>
            <h2>Footer</h2>
        </div>
    );
};

export default MainLayOut;