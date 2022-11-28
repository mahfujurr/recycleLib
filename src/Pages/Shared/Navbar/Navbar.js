import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import img from '../../../Assets/Screenshot_2022-11-27_104711-removebg-preview.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // const location = useLocation()
    const nav = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => { nav('/login')})
            .catch(err => console.log(err));
            
    }
    
    return (
        <div>
            <div className="navbar   justify-between lg:flex-row bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Homepage</Link></li>
                            {
                                user?.uid
                                    ?
                                    <li><Link to='/dashboard'>DashBoard</Link></li>
                                    :
                                    <></>
                            }
                            <li><Link to='blog'>Blog</Link></li>
                            <li><Link>About</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center flex">
                    <img src={img} className='w-12 mr-2 items-center' alt="" />
                    <Link to='/' className="normal-case text-3xl font-bold">RecycleLiB</Link>
                </div>
                <div className="navbar-end">
                    {user?.email ?
                        <Link to='/signup'><button onClick={handleLogOut} className="inline-flex items-center bg-black border-0 py-2 px-4 font-medium  hover:bg-black/80 rounded-2xl text-white">SignOut</button></Link>

                        :
                        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">

                            <Link to='/login'><button className="inline-flex items-center bg-black border-0 py-2 px-4 font-medium  hover:bg-black/80 rounded-2xl text-white lg:mr-3">Login</button></Link>
                            <Link to='/signup'><button className="inline-flex items-center bg-black border-0 py-2 px-4 font-medium  hover:bg-black/80 rounded-2xl text-white">SignUp</button></Link>
                        </div>
                    }
                </div>

            </div>

        </div>
    );
};

export default Navbar;