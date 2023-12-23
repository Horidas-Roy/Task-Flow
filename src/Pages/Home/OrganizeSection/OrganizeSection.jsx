import organizeBanner from '../../../assets/images/assign.webp'
import organizeBanner2 from '../../../assets/images/organize_-_Labels2x.webp'
import calendar from '../../../assets/images/Task_Management_-_Calendar.webp'

const OrganizeSection = () => {
    return (
        <div>
            <h1 className="text-4xl font-medium w-[60%] p-20">Trello makes it easy to organize and track individual or team tasks in one place</h1>
            <div className='flex px-20'>
                <div className='pr-10 flex-1'>
                   <h2 className='text-4xl font-medium mb-5'>Assign tasks and manage deadlines</h2>
                   <p className='border-t-2 py-5 text-xl'>Trello’s advanced checklists give you the power to add more context to your tasks by assigning team members and due dates to checklist items, increasing visibility and keeping your team accountable.</p>
                   <button className='border rounded-lg px-4 py-3 border-[#061938]'>CheckOut advanced CheckList</button>
                </div>
                <div className='flex-1'>
                    <img src={organizeBanner} alt="organizeBanner" />
                </div>
            </div>
            <div className='flex px-20 gap-10 pt-20'>
                <div className='flex-1'>
                   <img src={organizeBanner2} alt="organizeBanner2" />
                </div>
                <div className='flex-1'>
                <h2 className='text-4xl font-medium mb-5'>Prioritize tasks and keep your team aligned</h2>
                   <p className='border-t-2 py-5 text-xl'>Prioritize with labels to identify what is high, medium, or low priority and bring an extra layer of shared understanding to your tasks. You can even filter by a certain label to only view cards associated with the label you want to view.</p>
                   <button className='border rounded-lg px-4 py-3 border-[#061938]'>Learn How To Label</button>
                </div>
            </div>
            <div className='flex px-20 mt-20'>
                <div className='pr-10 flex-1'>
                   <h2 className='text-4xl font-medium mb-5'>Bring a fresh perspective to the task at hand (pun intended) with Calendar View</h2>
                   <p className='border-t-2 py-5 text-xl'>Visualize checklist items and cards with due dates in Calendar View, showing what tasks are due in the days and weeks ahead. Cards will be arranged according to their due date and will display any labels, members, or checklists added to them.</p>
                   <button className='border rounded-lg px-4 py-3 border-[#061938]'>Learn About Views</button>
                </div>
                <div className='flex-1'>
                    <img src={calendar} alt="calendar" />
                </div>
            </div>
        </div>
    );
};

export default OrganizeSection;