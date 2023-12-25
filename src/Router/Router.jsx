import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Resister from "../Pages/Resister/Resister";
import Dashboard from "../MainLayOut/Dashboard";
import CreateNewTask from "../Pages/Dashboard/CreateNewTask/CreateNewTask";
import OnGoingList from "../Pages/Dashboard/OnGoingList/OnGoingList";
import CompleteTask from "../Pages/Dashboard/CompleteTask/CompleteTask";
import PreviousTask from "../Pages/Dashboard/preViousTask/PreviousTask";
import Profile from "../Pages/Dashboard/Profile/Profile";
import DragAndDrop from "../Pages/Dashboard/TaskManagement/DragAndDrop";

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
        element:<Dashboard/>,
        children:[
            {
                path:'createNewTask',
                element:<CreateNewTask/>
            },
            {
                path:'onGoingList',
                element:<OnGoingList/>
            },
            {
                path:'completeTask',
                element:<CompleteTask/>
            },
            {
                path:'dragAndDrop',
                element:<DragAndDrop/>
            },
            {
                path:'previousTask',
                element:<PreviousTask/>
            },
            {
                path:'profile',
                element:<Profile/>
            },
        ]
    }
])

export default router;