import Swal from "sweetalert2";
import useTask from "../../../Hooks/useTask";
import TaskCard from "../../../component/TaskCard/TaskCard";
import axios from "axios";


const OnGoingList = () => {
    const [todos,onGoing,completed,isLoading,refetch]=useTask()
  

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
        <div className="w-[60vw] ">
        <h2 className="text-3xl font-semibold mb-5 text-center">Ongoing Task</h2>
        <div className="grid gap-5">
            {
              completed.map((task,idx)=><TaskCard 
              key={idx}
               task={task}
               handleDeleteTask={handleDeleteTask}
               ></TaskCard>)
            }
        </div>
    </div>
    );
};

export default OnGoingList;






