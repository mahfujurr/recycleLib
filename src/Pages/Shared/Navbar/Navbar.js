import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Homepage</a></li>
                            <li><a>Blog</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link className="btn btn-ghost normal-case text-xl">RecycleLiB</Link>
                </div>
                <div className="navbar-end">
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        <Link to='/login'><button className="inline-flex items-center bg-black border-0 py-2 px-4 font-medium  hover:bg-black/80 rounded-2xl text-white lg:mr-3">Login</button></Link>
                        <Link to='/signup'><button className="inline-flex items-center bg-black border-0 py-2 px-4 font-medium  hover:bg-black/80 rounded-2xl text-white">SignUp</button></Link>
                    </div>
                </div>
            </div>
            {/* <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                        <Link to='/' className="mr-5 hover:text-gray-900">Home</Link>
                        <Link to='/blog' className="mr-5 hover:text-gray-900">Blog</Link>
                        <Link to='/' className="mr-5 hover:text-gray-900">All Buyers</Link>
                        <Link to='/' className="hover:text-gray-900">All Seller</Link>
                    </nav>
                    <Link className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">RecycleLiB</span>
                    </Link>
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        <Link to='/login'><button className="inline-flex items-center bg-black border-0 py-2 px-4 font-medium  hover:bg-black/80 rounded-2xl text-white lg:mr-3">Login</button></Link>
                        <Link to='/signup'><button className="inline-flex items-center bg-black border-0 py-2 px-4 font-medium  hover:bg-black/80 rounded-2xl text-white">SignUp</button></Link>
                    </div>
                </div>
            </header> */}
        </div>
    );
};

export default Navbar;