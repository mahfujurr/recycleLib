import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'

const DashboardLayout = () => {
    const [userInfo, setUserInfo] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://recyclelib-server.vercel.app/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data);
            })
    }, [user?.email])
    return (
        <div className='bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200'>
            <Navbar></Navbar>
            <label htmlFor="dashboard-drawer" tabIndex={1} className="  fixed left-0 top-5 lg:hidden">
                    <ArrowLeftOnRectangleIcon className="h-6 w-6 text-blue-500"/>
            </label>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content backdrop-blur-sm bg-white/30 font-semibold">
                        {(userInfo.role === 'admin') ?
                            <>
                                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/reporteditems">Reported Items</Link></li>
                            </>
                            :
                            <></>
                        }

                        {(userInfo.role === 'buyer') ?
                            <li><Link to="/dashboard/myorders">My Orders</Link></li>
                            :
                            <></>
                        }
                        {(userInfo.role === 'seller') ?
                            <>
                                <li><Link to="/dashboard/addbooks">Add Books</Link></li>
                                <li><Link to="/dashboard/addedbooks">My Books</Link></li>
                            </>
                            :
                            <></>
                        }


                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;