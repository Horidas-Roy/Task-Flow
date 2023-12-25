import { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Dashboard = () => {
    const {logOut}=useContext(AuthContext)
    const navigate=useNavigate()



    const handleLogOut=()=>{
         logOut()
         navigate('/')
    }
    return (
        <div className="flex min-h-screen">
            {/* dashboard sidebar content */}
            <div className="w-[30%] px-10 bg-[#E9FCFF] pt-10 text-xl">
               <ul className="space-y-2">
                <li className="bg-[#99bcc1] px-3 rounded-lg py-2"><NavLink to='profile'>Your Profile</NavLink></li>
                <li className="bg-[#99bcc1] px-3 rounded-lg py-2"><NavLink to='dragAndDrop'>Task Management</NavLink></li>
                <li className="bg-[#99bcc1] px-3 rounded-lg py-2"><NavLink to='createNewTask'>Create new Task</NavLink></li>
                <li className="bg-[#99bcc1] px-3 rounded-lg py-2"><NavLink to='previousTask'>Previous Task</NavLink></li>
                <li className="bg-[#99bcc1] px-3 rounded-lg py-2"><NavLink to='onGoingList'>Ongoing List</NavLink></li>
                <li className="bg-[#99bcc1] px-3 rounded-lg py-2"><NavLink to='completeTask'>Complete List</NavLink></li>
                <hr  className="border border-black"/>
                <li className="bg-[#99bcc1] px-3 rounded-lg py-2"><NavLink to='/'>Home</NavLink></li>
                <li className="bg-[#99bcc1] px-3 rounded-lg py-2"><button onClick={()=>handleLogOut()}>LogOut</button></li>
               </ul>
            </div>
            {/* dashboard content */}
            <div className="pt-5 px-5 w-[70%] bg-[#8ca9d8]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;