import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard sidebar content */}
            <div className="w-[30%] px-10 bg-[#061938]">
               <ul>
                <li><NavLink>Create new Task</NavLink></li>
                <li><NavLink>Previous Task</NavLink></li>
                <li><NavLink>Ongoing List</NavLink></li>
                <li><NavLink>Complete List</NavLink></li>
                <li><NavLink>Drag and Drop</NavLink></li>
                <hr />
                <li><NavLink to='/'>Home</NavLink></li>
               </ul>
            </div>
            {/* dashboard content */}
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;