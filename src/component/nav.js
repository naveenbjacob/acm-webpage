import React, { useState } from 'react';
import logo from './images/logo.png';
import {Link} from 'react-router-dom';


const Navbar = () =>{
    const [isOpen, setIsOpen] = useState(window.innerWidth <= 640 ? false : true);
    return(
        <nav className="flex items-center justify-between flex-wrap bg-gray-100 text-blue-600 p-2 lg:fixed lg:w-full lg:top-0">
            <Link to="/">
                <div className="flex items-center flex-shrink-0 mr-6">
                    <img className="h-16 w-16 mx-4 mt-4" src={logo} alt="logo"/>
                </div>
            </Link>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-blue-600 hover:border-grey-100">
                <svg onClick={()=>setIsOpen(!isOpen)} className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            {isOpen?
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                    <Link to="event" className="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-blue-800">
                        Events
                    </Link>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScNwhsLm_jtOpGKV4UxWSUsE2v1Q7fL_MK3cAzJTYBa71jLAQ/viewform?usp=sf_link" className="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-blue-800">
                        Membership
                    </a>
                    <Link to="/People" className="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-blue-800">
                        People
                    </Link>


                   
                    </div>
                 </div>
                : ''
            }
        </nav>
    );
};

export default Navbar;