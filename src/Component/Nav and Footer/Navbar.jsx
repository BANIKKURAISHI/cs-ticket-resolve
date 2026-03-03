import React from 'react';
import { IoAdd } from "react-icons/io5";
const Navbar = () => {
    return (
        <div>
            <div className="navbar  bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">CS — Ticket System</a>
  </div>
  <div className="flex-none gap-2">
    <button className=' btn mr-2'>Home</button>
    <button className='btn mr-2'>FAQ</button>
    <button className='btn mr-2'>Changelog</button>
    <button className='btn mr-2'>Blog</button>
    <button className='btn mr-2'>Download</button>
    <button className='btn mr-2'>Contact</button>
    <button className='btn mr-2 bg-gradient-to-r  from-[#6c36e5] via-[#7a42e9] to-[#9e61f2]'><span><IoAdd /></span> New Ticket</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;