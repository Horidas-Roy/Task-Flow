import { Link } from "react-router-dom";
import banner from "../../../assets/images/TaskManagement-hero.webp"

const Banner = () => {
    return (
        <div className="bg-[#E9FCFF] pt-20 shadow-sm">
            <img src={banner} alt="banner"
            className="bg-[#E9FCFF] w-[60%] mx-auto"
            />
            <div className="w-[50%] text-center mx-auto">
            <h1 className="text-4xl font-bold my-7 text-[#061938]">Manage tasks in one shared space</h1>
            <p className="text-[18px] font-medium text-[#061938]">Say goodbye to sticky notes and to-do lists: Trello allows teams of any size to easily manage tasks and hit deadlines - all without ever leaving the app.</p>
            <Link to='/login'><button className="bg-primary px-5 py-2 rounded-lg my-10 text-white text-xl font-medium">Let’s Explore</button></Link>
            </div>
        </div>
    );
};

export default Banner;