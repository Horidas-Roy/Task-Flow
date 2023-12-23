import todoBanner from '../../../assets/images/Task_Management_Board2x.webp'

const TodoListBanner = () => {
    return (
        <div className='w-[80%] mx-auto text-center'>
            <h1 className='text-4xl font-medium mt-20 mb-10'>TaskFlow is better than your best to-do list</h1>
            <img src={todoBanner} alt="" />
        </div>
    );
};

export default TodoListBanner;