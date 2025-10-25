import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const winterTips = [
  {
    id: 1,
    title: "Keep Pets Warm",
    description: "Ensure your pets have a warm, cozy place to sleep, away from drafts.",
    icon: "🔥"
  },
  {
    id: 2,
    title: "Protect Their Paws",
    description: "Use pet-safe ice melts and wipe paws after walks to remove salt and chemicals.",
    icon: "🐾"
  },
  {
    id: 3,
    title: "Limit Outdoor Time",
    description: "Shorten walks in very cold weather, especially for short-haired breeds.",
    icon: "⏱️"
  },
  {
    id: 4,
    title: "Proper Nutrition",
    description: "Pets may need more calories in winter to maintain body heat.",
    icon: "🍖"
  }
];

const CareTips = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true,     
      mirror: false, 
    });
  }, []);
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up"> Winter Care Tips for Pets </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {winterTips.map((tip, index) => (
            <div
              key={tip.id}
              className="card bg-base-100 shadow-lg border border-zinc-100 hover:shadow-2xl transition-shadow duration-300"
              data-aos={
                index % 2 === 0
                  ? "fade-up-right"
                  : "fade-up-left"
              }
              data-aos-delay={index * 150} 
            >
              <div className="card-body text-center">
                <div
                  className="text-5xl mb-4"
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
                >
                  {tip.icon}
                </div>
                <h3 className="card-title justify-center" data-aos="fade-up" data-aos-delay={index * 250}> {tip.title} </h3>
                <p data-aos="fade-in" data-aos-delay={index * 300}> {tip.description} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareTips;
