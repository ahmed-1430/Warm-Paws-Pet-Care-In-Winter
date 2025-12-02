import React, { useEffect } from 'react';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularServices = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,      
      easing: 'ease-in-out',
    });
  }, []);

  const popularServices = data.filter((service) => parseFloat(service.rating) >= 4.8);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up"> Popular Winter Care Services </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularServices.map((service, index) => (
            <div
              key={service.serviceId}
              className="card bg-base-100 shadow-xl"
              data-aos="zoom-in"
              data-aos-delay={index * 100}>
              <figure className="px-4 pt-4">
                <img src={service.image} alt={service.serviceName} className="rounded-xl h-48 w-full object-cover"/>
              </figure>
              <div className="card-body">
                <h3 className="card-title">{service.serviceName}</h3>
                <div className="flex items-center">
                  <div className="rating rating-sm">
                    {[...Array(5)].map((_, i) => (
                      <input key={i} type="radio" name={`rating-${service.serviceId}`} className="mask mask-star-2 bg-orange-400" checked={i < Math.floor(service.rating)} readOnly/>
                    ))}
                  </div>
                  <span className="ml-2 text-sm">({service.rating})</span>
                </div>
                <p className="text-xl font-bold text-primary">${service.price}</p>
                <div className="card-actions justify-end">
                  <Link to={`/services/category/${service._id}`} className="btn btn-primary btn-sm" data-aos="fade-up"> View Details </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8" data-aos="fade-up">
          <Link to="/services" className="btn btn-outline btn-primary"> View All Services </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
