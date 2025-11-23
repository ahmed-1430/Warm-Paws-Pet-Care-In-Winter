import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router';

const PetProducts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, 
    });
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up"> Winter Pet Products </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <h3 className="text-2xl font-bold mb-4">Essential Winter Gear</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Insulated winter coats and sweaters</li>
              <li>Waterproof booties for paw protection</li>
              <li>Heated pet beds and blankets</li>
              <li>Pet-safe ice melt and de-icers</li>
              <li>Moisturizing paw balms</li>
            </ul>
            <Link to={"/services"} className="btn btn-primary" data-aos="zoom-in" data-aos-delay="300"> Shop Now </Link>
          </div>
          <div data-aos="zoom-in-left" data-aos-delay="250"className="flex justify-center">
            <img src="https://i.ibb.co.com/NdhKxXLs/winter-pet-products.jpg" alt="Winter Pet Products" className="rounded-lg shadow-lg w-full md:w-4/5 hover:scale-105 transition-transform duration-300"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetProducts;
