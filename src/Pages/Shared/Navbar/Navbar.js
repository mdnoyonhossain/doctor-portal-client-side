import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext);

    const userLogOut = () => {
        userSignOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItem = <>
        <li className='mr-2'><Link to='/' className='rounded-lg'>Home</Link></li>
        <li className='mr-2'><Link to='/appointment' className='rounded-lg'>Appointment</Link></li>
        {
            user?.uid ?
                <>
                    <li className='mr-2'><Link to='/dashboard' className='rounded-lg'>Dashboard</Link></li>
                    <li className='mr-2'><button onClick={userLogOut} className='rounded-lg'>Signout</button></li>
                </>
                :
                <li className='mr-2'><Link to='/login' className='rounded-lg'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar w-11/12 m-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Doctors</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;