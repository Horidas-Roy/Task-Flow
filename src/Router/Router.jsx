import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Resister from "../Pages/Resister/Resister";
import Dashboard from "../MainLayOut/Dashboard";

const router =createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/resister',
                element:<Resister></Resister>
            }
        ]
        
    },
    {
        path:'dashboard',
        element:<Dashboard/>
    }
])

export default router;