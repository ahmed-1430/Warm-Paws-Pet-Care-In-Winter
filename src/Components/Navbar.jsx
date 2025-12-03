import React, { useContext, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const closeTimer = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(closeTimer.current);
        setOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimer.current = setTimeout(() => {
            setOpen(false);
        }, 120);
    };

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                toast.success('Successfully logged out');
                setTimeout(() => navigate('/'), 1200);
            })
            .catch(() => toast.error('Logout failed'));
    };

    return (
        <div className="navbar bg-white/80 shadow-md fixed top-0 left-0 w-full z-50 backdrop-blur-md">
            <div className="w-11/12 mx-auto flex items-center">

                {/* LEFT SIDE */}
                <div className="navbar-start">

                    {/* MOBILE DROPDOWN */}
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                            <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
                            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
                            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>

                            {user ? (
                                <>
                                    <li><Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link></li>
                                    <li><Link to="/user/profile">My Profile</Link></li>
                                    <li><button onClick={handleLogout}>Logout</button></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/user/login">Login</Link></li>
                                    <li><Link to="/user/register">Register</Link></li>
                                </>
                            )}
                        </ul>
                    </div>

                    {/* LOGO */}
                    <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
                        <img src="https://i.ibb.co.com/0psSBmRW/petcare.png" alt="WarmPaws" className="h-12" />
                        WarmPaws
                    </Link>
                </div>

                {/* RIGHT SIDE (Desktop Menu + Avatar) */}
                <div className="navbar-end">

                    {/* DESKTOP MENU */}
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-medium">

                            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                            <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
                            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
                            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>

                            {user && (
                                <li><Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link></li>
                            )}

                            {!user && (
                                <>
                                    <li><Link to="/user/login">Login</Link></li>
                                    <li><Link to="/user/register">Register</Link></li>
                                </>
                            )}
                        </ul>
                    </div>

                    {/* USER AVATAR */}
                    {user && (
                        <div
                            className="relative ml-4 hidden lg:block"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="btn btn-ghost btn-circle avatar cursor-pointer">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="User Avatar"
                                        src={user?.photoURL || "https://i.ibb.co.com/nNbBbftF/Dr-Emily-Rodriguez.webp"}
                                    />
                                </div>
                            </div>

                            {open && (
                                <ul className="absolute right-0 mt-2 p-2 shadow menu menu-sm bg-base-100 rounded-box w-56 z-20">
                                    <li className="font-semibold text-sm mb-1">{user?.displayName}</li>
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
