import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
                <main>
                    <Outlet></Outlet>
                </main>
            </header>
        </div>
    );
};

export default HomeLayout;