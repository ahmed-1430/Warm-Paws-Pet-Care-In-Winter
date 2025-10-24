import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const ServiceDetailsLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            
        </div>
    );
};

export default ServiceDetailsLayout;