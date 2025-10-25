import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const expertVets = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Winter Pet Health",
    experience: "12 years",
    image: "https://i.ibb.co.com/9m5sJn18/Dr-Sarah-Johnson.jpg"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Pet Dermatology",
    experience: "8 years",
    image: "https://i.ibb.co.com/xt8H2J7T/Dr-Michael-Chen.png"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Cold Weather Care",
    experience: "10 years",
    image: "https://i.ibb.co.com/nNbBbftF/Dr-Emily-Rodriguez.webp"
  }
];

const Experts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation speed
      easing: 'ease-in-out',
      once: true, // Run only once
    });
  }, []);
  return (
    <section className="py-12 bg-slate-200 rounded-2xl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up"> Meet Our Expert Vets </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertVets.map((vet, index) => (
            <div
              key={vet.id}
              className="card bg-base-100 shadow-xl border border-zinc-100 hover:shadow-2xl transition-shadow duration-300"
              data-aos={index % 2 === 0 ? 'flip-left' : 'flip-right'}
              data-aos-delay={index * 200}
            >
              <figure className="px-4 pt-6" data-aos="zoom-in" data-aos-delay={index * 250}>
                <div className="avatar">
                  <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
                    <img src={vet.image} alt={vet.name} />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center" data-aos="fade-up" data-aos-delay={index * 300}>
                <h3 className="card-title">{vet.name}</h3>
                <p className="text-primary font-semibold">{vet.specialty}</p>
                <p>Experience: {vet.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
