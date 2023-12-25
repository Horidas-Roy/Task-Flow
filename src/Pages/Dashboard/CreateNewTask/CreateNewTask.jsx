/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const CreateNewTask = () => {
    const {user}=useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit=(data)=>{
        const newTask={
          task:data.task,
          deadline:data.deadline,
          priority:data.priority,
          status:'Incompelete',
          description:data.description,
          email:user.email
        }
        console.log(newTask)

         axios.post('https://task-flow-server-delta.vercel.app/createTask',newTask)
         .then(result=>{
            if(result.data.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your task added Successfully",
                showConfirmButton: false,
                timer: 1500
              });
            }

         })
         .catch(error=>{
            console.log(error)
         })

      }

     


    return (
        <div className="p-10 pt-0">
             <h2 className="text-center text-3xl font-medium">Create Task</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Task*</span>
            </label>
            <input
              type="text"
              defaultValue={'added task name'}
              placeholder="Task Name"
              {...register("task", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* priority */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Priority*</span>
              </label>
              <select
                defaultValue={'priority'}
                {...register("priority", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value={"default"}>
                  Select priority
                </option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
            </div>

            {/* deadline */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Deadline*</span>
              </label>
              <input
                type="date"
                defaultValue={'deadline'}
                placeholder="deadline"
                {...register("deadline", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Task Description</span>
            </label>
            <textarea
            defaultValue={'task description'}
              {...register("description", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="recipe details"
            ></textarea>
          </div>
          <h2 className="text-center mt-4 w-full mx-auto"><button className="btn w-full">
            Create Task
          </button></h2>
        </form>
        </div>
    );
};

export default CreateNewTask;