import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const heroImages = [
  {
    id: 1,
    image: "https://i.ibb.co/fVyk4MML/keeping-your-furry-friend-warm.jpg",
    fallback: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    title: "Winter Pet Care Services",
    subtitle: "Keep your furry friends warm and healthy this winter"
  },
  {
    id: 2,
    image: "https://i.ibb.co/7xnFwwF3/blog-image-holiday-2-900x400.png",
    fallback: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Professional Grooming",
    subtitle: "Special winter treatments for your pet's coat and skin"
  },
  {
    id: 3,
    image: "https://i.ibb.co/tMndxxgP/5-Essential-Winter-Dog-Clothes-For-Walking-Your-Dog-In-the-Cold-Blog-Banner-1-1400x.webp",
    fallback: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    title: "Cozy Winter Outfits",
    subtitle: "Fashionable and functional winter wear for your pets"
  }
];

const CarouselSlider = () => {
  const handleImageError = (e, fallbackUrl) => {
    e.target.src = fallbackUrl;
  };

  return (
    <div className="relative z-0">
      <section className='my-8'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[450px] z-0"
        >
          {heroImages.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full z-0">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover z-0"
                  onError={(e) => handleImageError(e, slide.fallback)}
                />                
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6 z-10">
                  <div className="text-white text-center">
                    <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                    <p className="mb-4">{slide.subtitle}</p>
                    <Link 
                      to="/services" 
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      Explore Services
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>            
    </div>
  );
};

export default CarouselSlider;