import React from 'react';
import CarouselSlider from '../Components/CarouselSlider';
import PopularServices from '../Components/PopularServices';
import CareTips from '../Components/CareTips';
import Experts from '../Components/Experts';


const Home = () => {
  return (
    <div className='w-11/12 mx-auto'>
        <CarouselSlider></CarouselSlider>
        <PopularServices></PopularServices>  
        <CareTips></CareTips>
        <Experts></Experts>    
    </div>
  );
};

export default Home;