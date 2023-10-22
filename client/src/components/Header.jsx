import React from 'react';
import {Link} from "react-router-dom";

import {FaSearch} from "react-icons/fa";

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to="/">
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap cursor-pointer'>
                    <span className='text-slate-500'>Sahand</span>
                    <span className='text-slate-700'>Estate</span>
                </h1>
            </Link>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center gap-3'>
                <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
                <FaSearch className='text-slate-600 cursor-pointer'/>
            </form>
            {/* make a ham menu for the mobile later */}
            <ul className='flex gap-4'>
                <Link to="/"><li className='font-semibold text-slate-700 hover:underline cursor-pointer'>Home</li></Link>
                <Link to="/about"><li className='font-semibold text-slate-700 hover:underline cursor-pointer'>About</li></Link>
                <Link to="/sign-in"><li className='font-semibold text-slate-700 hover:underline cursor-pointer'>Sign In</li></Link>
            </ul>
        </div>
    </header>
  );
};