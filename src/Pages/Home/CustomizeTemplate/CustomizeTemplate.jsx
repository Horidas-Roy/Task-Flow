import img1 from '../../../assets/images/customize_Template_Board_2x.webp'
import img2 from '../../../assets/images/customize_Task_Template_2x.webp'

const CustomizeTemplate = () => {
    return (
        <div className='px-20 pt-28'>
            <h1 className='text-4xl font-semibold w-[60%]'>No need to start from scratch. Use one of our customizable templates.</h1>
            <p className='text-xl py-5 w-[60%]'>Jumpstart your board with a well-proven template designed by our team. Customize it for yours.</p>
            <div className='flex gap-10 mt-10'>
                <div className='flex-1'>
                    <img src={img1} alt="board" />
                    <h1 className='text-3xl font-semibold my-5'>Eisenhower Matrix Task Board</h1>
                    <p className='text-xl'>The Eisenhower Matrix Template is a powerful method to organize your daily/weekly tasks.</p>
                    <button className='underline text-blue-700 text-xl mt-5'>Get Organized</button>
                </div>
                <div className='flex-1'>
                    <img src={img2} alt="board" />
                    <h1 className='text-3xl font-semibold my-5'>Team Tasks - 5 Things Workflow</h1>
                    <p className='text-xl'>Keep team status updates transparent and succinct with this template. It’s simple: add two things that are being worked on, two tasks that will be worked on next, one thing that is not being worked on.</p>
                    <button className='underline text-blue-700 text-xl mt-5'>Improve your workflow</button>
                </div>
            </div>
        </div>
    );
};

export default CustomizeTemplate;