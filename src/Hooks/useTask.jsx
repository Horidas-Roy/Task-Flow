/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useTask = () => {
    const [todos,setTodos]=useState([])
    const [onGoing,setonGoing]=useState([])
    const [completed,setcompleted]=useState([])
    const {user}=useContext(AuthContext)

   const {data:tasks=[],isLoading,refetch}=useQuery({
       queryKey:['task'],
       queryFn:async()=>{
         try{
            const res=await axios.get(`https://task-flow-server-delta.vercel.app/task?email=${user.email}`)
            return res.data;
         }catch(error){
            console.log(error)
         }
       }
   })

   useEffect(()=>{

    const todo=tasks.filter(task=>task.status === 'Incomplete')
    const onGoings=tasks.filter(task=>task.status === 'Ongoing')
    const completeds=tasks.filter(task=>task.status === 'Completed')

    setTodos(todo)
    setonGoing(onGoings)
    setcompleted(completeds)
   },[tasks])

    return [todos,onGoing,completed,isLoading,refetch,tasks]
};

export default useTask;