import React from 'react';
import Services from '../Pages/Services';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const ServicesLayout = () => {
    return (
        <div className='flex flex-col h-fit bg-linear-to-br from-slate-50 to-blue-50'>
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