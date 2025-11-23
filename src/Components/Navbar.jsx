import React, { useContext, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    //  State & Timer for dropdown menu
    const [open, setOpen] = useState(false);
    const closeTimer = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(closeTimer.current);
        setOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimer.current = setTimeout(() => {
            setOpen(false);
        }, 100); //  Closing time for delay the hover menu
    };

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                toast.success('Successfully logged out');
                setTimeout(() => navigate('/'), 1500);
            })
            .catch(() => toast.error('Logout failed'));
    };

    return (
       <div className="navbar bg-white/50 shadow-md fixed top-0 left-0 w-full z-50">
            <div className="w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                            <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
                            {user ? (
                                <>
                                    <li><Link to="/user/profile" className={location.pathname === '/user/profile' ? 'active' : ''}>My Profile</Link></li>
                                    <li><button onClick={handleLogout}>Logout</button></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/user/login" className={location.pathname === '/user/login' ? 'active' : ''}>Login</Link></li>
                                    <li><Link to="/user/register" className={location.pathname === '/user/register' ? 'active' : ''}>Register</Link></li>
                                </>
                            )}
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link to="/" className="btn btn-ghost text-xl"><img src="https://i.ibb.co.com/0psSBmRW/petcare.png" alt="Winter Pet Care" className="h-12 mr-2" /> WarmPaws </Link>
                </div>

                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                            <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>

                            {!user && (
                                <>
                                    <li><Link to="/user/login" className={location.pathname === '/user/login' ? 'active' : ''}>Login</Link></li>
                                    <li><Link to="/user/register" className={location.pathname === '/user/register' ? 'active' : ''}>Register</Link></li>
                                </>
                            )}
                        </ul>
                    </div>
                    {user && (
                        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="btn btn-ghost btn-circle avatar cursor-pointer">
                                <div className="w-10 rounded-full">
                                    <img alt="User Avatar" src={user?.photoURL || "https://i.ibb.co.com/nNbBbftF/Dr-Emily-Rodriguez.webp"} />
                                </div>
                            </div>

                            {open && (
                                <ul className="absolute right-0 mt-1 p-2 shadow menu menu-sm bg-base-100 rounded-box w-52 z-20">
                                    <li><span className="text-sm font-semibold">{user?.displayName}</span></li>
                                    <li><Link to="/user/profile">My Profile</Link></li>
                                    <li><button onClick={handleLogout}>Logout</button></li>
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
