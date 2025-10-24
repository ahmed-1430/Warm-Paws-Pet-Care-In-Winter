import React from 'react';
import { Link, useLocation } from 'react-router';

const Navbar = () => {
    const location = useLocation();
    return (
        <div>
            <div className="navbar bg-base-100 shadow-md sticky top-0">
                <div className='w-11/12 mx-auto'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/" className={`${location.pathname === '' ? 'active' : ''}, active:bg-red-500`}>Home</Link></li>
                                <li><Link to="/services" className={location.pathname == '/services' ? 'active' : ''}>Services</Link></li>
                                <li><Link to="/user/login" className={location.pathname == '/user/login' ? 'active' : ''}>Login</Link></li>
                                <li><Link to="/user/register" className={location.pathname == '/user/register' ? 'active' : ''}>Register</Link></li>
                                <li><Link to="/user/profile" className={location.pathname == '/user/profile' ? 'active' : ''}>My Profile</Link></li>
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost text-xl">
                            <img src="https://i.ibb.co.com/0psSBmRW/petcare.png" alt="Winter Pet Care" className="h-12 mr-2" />
                            WarmPaws
                        </Link>
                    </div>

                    <div className="navbar-end">
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                                <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
                                <li><Link to="/user/login" className={location.pathname === '/user/login' ? 'active' : ''}>Login</Link></li>
                                <li><Link to="/user/register" className={location.pathname === '/user/register' ? 'active' : ''}>Register</Link></li>
                                <li><Link to="/user/profile" className={location.pathname === '/profile' ? 'active' : ''}>My Profile</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-end z-10">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="User Avatar"
                                        src="https://img.icons8.com/?size=160&id=IBgUXg3MQlTW&format=png"
                                    />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <span className="text-sm font-semibold"></span>
                                </li>
                                <li><Link to="/profile">My Profile</Link></li>
                                <li><button>Logout</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;