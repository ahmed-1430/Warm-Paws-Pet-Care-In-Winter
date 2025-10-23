import React from 'react';
import Services from '../Pages/Services';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const ServicesLayout = () => {
    return (
        <div className='flex flex-col h-screen'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto flex-1'>
            <Outlet></Outlet>           
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ServicesLayout;