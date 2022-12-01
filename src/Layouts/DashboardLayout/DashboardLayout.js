import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div className='w-11/12 m-auto'>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-gray-50">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60  text-base-content">

                        <li><Link to="/dashboard" className='font-medium'>My Appointment</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to="/dashboard/alluser" className='font-medium'>All Users</Link></li>
                                <li><Link to="/dashboard/adddoctor" className='font-medium'>Add a Doctor</Link></li>
                                <li><Link to="/dashboard/managedoctors" className='font-medium'>Manage Doctors</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;