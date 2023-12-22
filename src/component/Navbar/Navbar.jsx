import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [toggle,setToggle]=useState(false)

     const navLinks=<>
          <li>Home</li>
          <li>Login</li>
     </>
    return (
        <nav className={`w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='flex justify-between items-center w-full mx-auto'>
           <Link
           to='/'
           className='flex items-center gap-2'
           onClick={()=>{
              window.scrollTo(0,0)
           }}
           >
            {/* <img src={logo} alt='logo' className='h-9 w-9 object-contain'></img> */}
            <p className='text-white text-lg font-bold cursor-pointer flex gap-2'>Task<span className='sm:block hidden'>Flow</span></p>
           </Link>
           <ul className='list-none hidden md:flex flex-row gap-10'>
              {navLinks}
           </ul>
           <div className='md:hidden flex flex-1 justify-end items-center'>
             <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={()=>setToggle(!toggle)}
             ></img>
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