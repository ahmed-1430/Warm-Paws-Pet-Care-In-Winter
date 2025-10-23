import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div className='flex flex-col h-screen'>
            <header>
                <nav className='z-50 relative'>
                    <Navbar></Navbar>
                </nav>
            </header>
             <main className='flex-1'>
                    <Outlet></Outlet>
                </main>
                <footer>
                    <Footer></Footer>
                </footer>
        </div>
    );
};

export default HomeLayout;