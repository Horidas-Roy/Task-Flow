import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutubeSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="mt-20 bg-[#091E42] text-white pt-10">
            <div className="px-20 grid grid-cols-5 gap-5 mb-10">
               <div className="text-[18px]">Task Flow</div>
               <div>
                 <h3 className="text-lg">About TaskFlow</h3>
                 <p className="text-sm">what&apos;s behind the board</p>
               </div>
               <div>
                 <h3 className="text-lg">Jobs</h3>
                 <p className="text-sm">learn about open roels on the TaskFlow team</p>
               </div>
               <div>
                 <h3 className="text-lg">Apps</h3>
                 <p className="text-sm">Download the TaskFlow app for your desktop or moblie device</p>
               </div>
               <div>
                 <h3 className="text-lg">Contact US</h3>
                 <p className="text-sm">Need anything? Get in touch and we can help</p>
               </div>
            </div>
            <hr  className="mx-5"/>
            <div className="flex justify-between items-center px-20 py-5">
               <div className="flex gap-10 text-sm">
                   <h3>privacy policy</h3>
                   <h3>Terms</h3>
                   <h3>Coppyright &#169; 2023 TaskFlow</h3>
               </div>
               <div className="flex gap-5">
               <FaInstagram />
               <FaFacebookF />
               <FaLinkedinIn />
               <FaTwitter />
               <FaYoutubeSquare />
               </div>
            </div>
        </footer>
    );
};

export default Footer;