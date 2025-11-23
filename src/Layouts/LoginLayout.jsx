import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const LoginLayout = () => {
    return (
        <div className='flex flex-col h-fit bg-linear-to-br from-slate-50 to-blue-50 pt-10'>
            <ToastContainer></ToastContainer>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex-1 w-11/12 mx-auto '>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default LoginLayout;