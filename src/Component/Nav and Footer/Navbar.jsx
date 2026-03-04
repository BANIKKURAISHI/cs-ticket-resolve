import React from 'react';
import { IoAdd } from "react-icons/io5";
const Navbar = () => {
    return (
        <div >
            <div className="navbar w-[400px]  bg-base-100 shadow-sm md:w-full lg:w-full">
  <div className="flex-1">
    <a className="text-2xl mr-4">CS — Ticket System</a>
  </div>
  <div className="grid grid-cols-4   md:flex flex-row gap-2">
    <button className=' btn btn-xm sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl'>Home</button>
    <button className='btn btn-xm sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl'>FAQ</button>
    <button className="btn btn-xm sm:btn-sm   md:btn-md lg:btn-lg xl:btn-xl">Changelog</button>
    <button className='btn btn-xm sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl'>Blog</button>
    <button className='btn btn-xm sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl'>Download</button>
    <button className='btn btn-xm sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl'>Contact</button>
    <button className='btn btn-xm sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-gradient-to-r  from-[#6c36e5] via-[#7a42e9] to-[#9e61f2]'><span><IoAdd /></span> New Ticket</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;