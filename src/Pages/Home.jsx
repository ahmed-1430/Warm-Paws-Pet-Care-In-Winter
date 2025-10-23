import React from 'react';
import CarouselSlider from '../Components/CarouselSlider';
import PopularServices from '../Components/PopularServices';


const Home = () => {
  return (
    <div className='w-11/12 mx-auto'>
        <CarouselSlider></CarouselSlider>
        <PopularServices></PopularServices>      
    </div>
  );
};

export default Home;