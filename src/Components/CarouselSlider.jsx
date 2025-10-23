import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router';

// Import Swiper styles
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
    <div>
      <section>
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
          className="mySwiper h-[450px]"
        >
          {heroImages.map((slide) => (
            <SwiperSlide key={slide.id}>
              {/* Using img tag instead of background for better error handling */}
              <div className="hero min-h-screen relative z-10">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="absolute inset-0 w-full h-[450px] object-fit"
                  onError={(e) => handleImageError(e, slide.fallback)}
                />
                {/* <div className="hero-overlay bg-opacity-60 absolute inset-0 bg-black"></div> */}
                {/* <div className="hero-content text-center text-neutral-content relative z-10">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-zinc-500">{slide.title}</h1>
                    <p className="mb-5 text-lg">{slide.subtitle}</p>
                    <Link to="/services" className="btn btn-primary">Explore Services</Link>
                  </div>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>            
    </div>
  );
};

export default CarouselSlider;