import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
    const [toggle,setToggle]=useState(false)

     const navLinks=<>
          <li>Home</li>
          <li>Login</li>
     </>
     
    return (
        <nav className={`${window.scrollTo(0,0) && 'bg-[#101644]'} w-full flex items-center py-5 fixed top-0 z-20 px-4`}>
      <div className='flex justify-between items-center w-full mx-auto'>
           <Link
           to='/'
           className='flex items-center gap-2'
           onClick={()=>{
              window.scrollTo(0,0)
           }}
           >
            {/* <img src={logo} alt='logo' className='h-9 w-9 object-contain'></img> */}
            <p className='text-white text-lg font-bold cursor-pointer flex gap-2'>Task<span className=''>Flow</span></p>
           </Link>
           <ul className='list-none hidden md:flex flex-row gap-10'>
              {navLinks}
           </ul>
           <div className='md:hidden flex flex-1 justify-end items-center'>
              <button 
              onClick={()=>setToggle(!toggle)}
              className="text-2xl"
              >
                {toggle ? <IoCloseSharp /> : <IoMenuSharp />}
                </button>
             <div className={`${!toggle ? 'hidden':'flex'} p-6 black-gradient absolute top-20 ring-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
             <ul className='list-none flex flex-col gap-4 justify-end items-start'>
              {navLinks}
           </ul>
             </div>
           </div>
      </div>

    </nav>
    );
};

export default Navbar;