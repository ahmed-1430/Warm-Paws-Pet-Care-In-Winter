import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const ServiceDetailsLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <ToastContainer></ToastContainer>
                <Outlet></Outlet>
            </main>
            
        </div>
    );
};

export default ServiceDetailsLayout;