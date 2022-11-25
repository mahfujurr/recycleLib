import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const [userInfo, setUserInfo] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data);
            })
    }, [user?.email])
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {(userInfo.userType === 'admin') ?
                            <>
                                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/reporteditems">Reported Items</Link></li>
                            </>
                            :
                            <></>
                        }

                        {(userInfo.userType === 'Buyer') ?
                            <li><Link to="/dashboard/myorders">My Orders</Link></li>
                            :
                            <></>
                        }
                        {(userInfo.userType === 'Seller') ?
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