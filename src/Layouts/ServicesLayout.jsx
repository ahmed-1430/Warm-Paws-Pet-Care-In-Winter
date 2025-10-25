import React from 'react';
import Services from '../Pages/Services';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigate } from 'react-router';
import Footer from '../Components/Footer';
import LoadingPage from '../Pages/Loading';

const ServicesLayout = () => {
    const { state } = useNavigate()
    return (
        <div className='flex flex-col h-fit bg-linear-to-br from-slate-50 to-blue-50'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto flex-1'>
            {
                state == "loading" ? <LoadingPage></LoadingPage> : <Outlet></Outlet>
            }    
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ServicesLayout;