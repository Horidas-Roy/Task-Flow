/* eslint-disable react/prop-types */
const TaskCard = ({task,handleDeleteTask}) => {
    // console.log(task)
    return (
        <div className="bg-[#99bcc1] border border-[#061938] p-5 rounded-lg">
            <h2>{task?.task}</h2>
            <p>{task.description}</p>
            <div className="flex justify-between my-3">
            <h3>deadline:{task?.deadline}</h3>
            <h3 className="bg-green-700 px-3 rounded-lg">Status:{task?.status}</h3>
            </div>
            <div className="flex justify-between">
                <h3>priority:{task?.priority}</h3>
                <button onClick={()=>handleDeleteTask(task._id)} className="px-1 rounded-sm bg-gray-800 text-white">Delete</button>
            </div>
        </div>
    );
};

export default TaskCard;