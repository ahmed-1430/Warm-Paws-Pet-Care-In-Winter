import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import LoadingPage from '../Pages/Loading';
import { Outlet, useNavigation } from 'react-router';

const HomeLayout = () => {
  const navigation = useNavigation();

  return (
    <div className='flex flex-col h-fit bg-linear-to-br from-slate-50 to-blue-50'>
      <header>
        <nav className='z-50 relative'>
          <Navbar />
        </nav>
      </header>

      <main className='flex-1'>
        {navigation.state === "loading"
          ? <LoadingPage />
          : <Outlet />
        }
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;