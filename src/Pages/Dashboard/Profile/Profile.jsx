import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const Profile = () => {
    const {user}=useContext(AuthContext)
  console.log(user)


    return (
        <div className="flex justify-center mt-10">
             <div>
             <img src={user.photoURL} alt="user"
              className="block mx-auto h-36 w-36 rounded-full"
             />
            <h2 className="text-center text-4xl font-bold">Welcome To Your Profile</h2>
            <div className="text-center">
                <h2 className="mt-5 ">If You First Here.Please create task.Then see task management Dashboard</h2>
                <Link to='/dashboard/createNewTask'><button className="bg-[#061938] rounded-lg px-3 py-1 my-5 text-white font-bold">Create Task</button></Link>
            </div>
             </div>
        </div>
    );
};

export default Profile;