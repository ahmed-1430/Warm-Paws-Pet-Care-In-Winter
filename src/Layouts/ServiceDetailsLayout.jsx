import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigate } from 'react-router';
import { ToastContainer } from 'react-toastify';
import LoadingPage from '../Pages/Loading';

const ServiceDetailsLayout = () => {
    const { state } = useNavigate()
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <ToastContainer></ToastContainer>
                {
                    state == "loading" ? <LoadingPage></LoadingPage> : <Outlet></Outlet>
                }
                
            </main>
            
        </div>
    );
};

export default ServiceDetailsLayout;