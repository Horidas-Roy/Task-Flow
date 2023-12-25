import Swal from "sweetalert2";

import TaskCard from "../../../component/TaskCard/TaskCard";
import axios from "axios";
import useTask from "../../../Hooks/useTask";


const PreviousTask = () => {
    const [todos,onGoing,completed,isLoading,refetch,tasks]=useTask()

    console.log(tasks)
    
    const handleDeleteTask=(id)=>{
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://task-flow-server-delta.vercel.app/task/delete/${id}`)
                .then(result=>{
                     if(result.data.deletedCount>0){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your task has been deleted",
                            showConfirmButton: false,
                            timer: 1500
                          });
                     }
                     refetch();
                })
                .catch(error=>{
                      console.log(error)
                })
            }
          });
    }

    return (
        <div className="">
            <h2 className="text-3xl font-semibold mb-5 text-center">Previous Task</h2>
            <div className="grid gap-5">
                {
                   tasks?.map(task=><TaskCard
                     key={task._id}
                     task={task}
                     handleDeleteTask={handleDeleteTask}
                     ></TaskCard>)
                }
            </div>
        </div>
    );
};

export default PreviousTask;