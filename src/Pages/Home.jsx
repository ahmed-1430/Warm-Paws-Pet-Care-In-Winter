import React from 'react';
import CarouselSlider from '../Components/CarouselSlider';
import PopularServices from '../Components/PopularServices';
import CareTips from '../Components/CareTips';
import Experts from '../Components/Experts';
import PetProducts from '../Components/PetProducts';
import { useLoaderData } from 'react-router';


const Home = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
    <div className='w-11/12 mx-auto'>
        <CarouselSlider></CarouselSlider>
        <PopularServices data={data}></PopularServices>  
        <CareTips></CareTips>
        <Experts></Experts>
        <PetProducts></PetProducts>    
    </div>
  );
};

export default Home;