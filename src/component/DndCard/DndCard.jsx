/* eslint-disable react/prop-types */

const DndCard = ({item}) => {
    console.log('dnd card:',item)
    return (
        <div className="bg-[#99bcc1] border border-[#061938] p-2 rounded-lg">
            <h2 className="font-bold">{item?.task}</h2>
            <p className="text-sm">{item?.description.slice(0,50)}</p>
                <h3 className="text-sm font-bold">deadline:{item?.deadline}</h3>
            <div className="flex justify-between text-sm font-bold">
                <h3>priority:{item?.priority}</h3>
                {/* <button onClick={()=>handleDeleteTask(item._id)} className="px-1 rounded-sm bg-red-600 text-white">Delete</button> */}
            </div>
        </div>
    );
};

export default DndCard;