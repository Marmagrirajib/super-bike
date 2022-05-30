import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../Hooks/useAdmin';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user]=useAuthState(auth);
    const [admin]=useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content mt-12 ml-24">
                <h2 className='text-3xl font-bold text-emerald-600'>Welcome to your Dashboard</h2>
             <Outlet></Outlet>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class=" mt-10 menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                   
                    <li  className='bg-emerald-600 mb-3 text-white'><Link to="/dashboard" className={!admin?'':'hidden'}>My Orders</Link></li>
                    <li className='bg-emerald-600 mb-3 text-white'><Link to="/dashboard/review" className={!admin?'':'hidden'}>My Review</Link></li>
                    <li className='bg-emerald-600 mb-3 text-white'><Link to="/dashboard/profile">My Profile</Link></li>
                    <li className='bg-emerald-600 mb-3 text-white'><Link to="/dashboard/user" className={admin?'':'hidden'}>User Collection</Link></li>
                    <li className='bg-emerald-600 mb-3 text-white'><Link to="/dashboard/allorder" className={admin?'':'hidden'}>All Order</Link></li>
                    <li className='bg-emerald-600 mb-3 text-white'><Link to="/dashboard/additem" className={admin?'':'hidden'}>Add Item</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;