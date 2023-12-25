import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DndCard from "../../../component/DndCard/DndCard";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const DragAndDrop = () => {
  const [columns, setColumns] = useState([
    { id: 1, title: "To-Do", items: [] },
    { id: 2, title: "On Going", items: [] },
    { id: 3, title: "Completed", items: [] },
  ]);
  
  const {user,loading}=useContext(AuthContext)

  const moveItem = (
    sourceColumnIndex,
    destinationColumnIndex,
    sourceIndex,
    destinationIndex
  ) => {
    // Create a new array by spreading the existing columns array
    const newColumns = [...columns];
    // Remove the dragged item from the source column
    const [movedItem] = newColumns[sourceColumnIndex].items.splice(
      sourceIndex,
      1
    );
    // console.log(movedItem?._id,destinationColumnIndex)
    // Insert the dragged item into the destination column at the specified index
    newColumns[destinationColumnIndex].items.splice(
      destinationIndex,
      0,
      movedItem
    );
    // Update the state with the new columns array
    if(destinationColumnIndex === 0){
        axios.patch(`https://task-flow-server-delta.vercel.app/status/${movedItem._id}`,{status:'Incompelete'})
        .then(res=>{
           if(res.data.modifiedCount>0){
              setColumns(newColumns);
           }
        })
    }
    else if(destinationColumnIndex === 1){
      axios.patch(`https://task-flow-server-delta.vercel.app/status/${movedItem._id}`,{status:'Ongoing'})
      .then(res=>{
          if(res.data.modifiedCount>0){
            setColumns(newColumns);
          }
         
      })
    }
    else{
      axios.patch(`https://task-flow-server-delta.vercel.app/status/${movedItem._id}`,{status:'Completed'})
      .then(res=>{
         if(res.data.modifiedCount>0){
           setColumns(newColumns);
         }
         
      })
    }

  };


  useEffect(() => {

     axios.get(`https://task-flow-server-delta.vercel.app/task?email=${user.email}`)
     .then(res=>{
      const todos = res.data.filter((task) => task.status === "Incompelete");
      const onGoing = res.data.filter((task) => task.status === "Ongoing");
      const completed = res.data.filter((task) => task.status === "Completed");

      console.log(res.data,"todos:",todos)
      
      setColumns((prevColumns) => [
        { ...prevColumns[0], items: todos },
        { ...prevColumns[1], items: onGoing },
        { ...prevColumns[2], items: completed },
      ]);
      console.log("todos",todos,"ongo",onGoing,"completed",completed)
     })
     .catch((error)=>{
         console.log(error)
     })
    
      
    
  }, [user]);

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
            })
            .catch(error=>{
                  console.log(error)
            })
        }
      });
}

// if(loading){
//   return <span className="loading loading-spinner loading-lg text-center"></span>
// }



  return (
    <DndProvider backend={HTML5Backend}>
      <h2 className="text-4xl font-bold text-center">Task Management</h2>
      <div className="flex justify-between p-5" >
        {columns.map((column, columnIndex) => (
          <div
            key={column.id}
            className="flex-1 mr-3 bg-[#f0f0f0] p-3"
            draggable
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              const [sourceColumnIndex, sourceIndex] = e.dataTransfer
                .getData("text/plain")
                .split("-");
              moveItem(
                Number(sourceColumnIndex),
                columnIndex,
                Number(sourceIndex),
                columnIndex
              );
            }}
          >
            <h2 className="text-center font-medium">{column.title}</h2>
            <hr className="border my-2 border-[black] mx-5"/>
              { 
               column.items.map((item, index) => (
                    <div
                      key={index}
                      draggable
                      onDrop={(e) => {
                        const [sourceColumnIndex, sourceIndex] = e.dataTransfer
                          .getData("text/plain")
                          .split("-");
                        moveItem(
                          Number(sourceColumnIndex),
                          columnIndex,
                          Number(sourceIndex),
                          index
                        );
                      }}
                      onDragStart={(e) =>
                        e.dataTransfer.setData(
                          "text/plain",
                          `${columnIndex}-${index}`
                        )
                      }
                      className="m-2 p-2 bg-[#FFF] cursor-move"
                    >
                      {/* {item.task} */}
                      <DndCard item={item} handleDeleteTask={handleDeleteTask}/>
                    </div>
                  ))
                
              }
            </div>
        ))}
      </div>
    </DndProvider>
  );
};

export default DragAndDrop;
