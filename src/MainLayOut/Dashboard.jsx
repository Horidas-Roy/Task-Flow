import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex min-h-screen">
            {/* dashboard sidebar content */}
            <div className="w-[30%] px-10 bg-[#E9FCFF] pt-10 text-xl">
               <ul className="space-y-2">
                <li className="bg-[#99bcc1] px-3 rounded-lg py-2"><NavLink to='profile'>Your Profile</NavLink></li>
                <li className="bg-[#99bcc1] px-3 rounded-lg py-2"><NavLink to='createNewTask'>Create new Task</NavLink></li>
                <li className="bg-[#99bcc1] px-3 rounded-lg py-2"><NavLink to='previousTask'>Previous Task</NavLink></li>
                <li className="bg-[#99bcc1] px-3 rounded-lg py-2"><NavLink to='onGoingList'>Ongoing List</NavLink></li>
                <li className="bg-[#99bcc1] px-3 rounded-lg py-2"><NavLink to='completeTask'>Complete List</NavLink></li>
                <li className="bg-[#99bcc1] px-3 rounded-lg py-2"><NavLink to='dragAndDrop'>Drag and Drop</NavLink></li>
                <hr  className="border border-black"/>
                <li className="bg-[#99bcc1] px-3 rounded-lg py-2"><NavLink to='/'>Home</NavLink></li>
               </ul>
            </div>
            {/* dashboard content */}
            <div className="pt-10 px-5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;