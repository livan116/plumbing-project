import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from 'react-intersection-observer';
import img1 from "../../assets/homepage/img1.webp"
import img2 from "../../assets/homepage/img2.webp"
import img3 from "../../assets/homepage/img3.webp"
import img4 from "../../assets/homepage/img4.jpg"
import img5 from "../../assets/homepage/img5.webp"
import img6 from "../../assets/homepage/img6.webp"
import "../../styles/fonts.css"


const GallerySection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const galleryImages = [
    {
      id: 1,
      src: img1,
      alt: "Professional plumber installing a modern bathroom fixture",
      title: "Bathroom Fixture Installation",
      description: "Expert plumbing services with attention to detail"
    },
    {
      id: 2,
      src: img2,
      alt: "Plumber repairing kitchen sink with professional tools",
      title: "Kitchen Plumbing Solutions",
      description: "Quick and reliable repairs for your kitchen needs"
    },
    {
      id: 3,
      src: img3,
      alt: "Water heater installation by certified technician",
      title: "Water Heater Services",
      description: "Professional installation and maintenance"
    },
    {
      id: 4,
      src: img4,
      alt: "Emergency plumbing repair service",
      title: "Emergency Services",
      description: "Available 24/7 for all your plumbing emergencies"
    },
    {
      id: 5,
      src: img5,
      alt: "Drain cleaning with modern equipment",
      title: "Drain Cleaning",
      description: "Professional solutions for clogged drains"
    },
    {
      id: 6,
      src: img6,
      alt: "Whole-house plumbing inspection",
      title: "Plumbing Inspections",
      description: "Comprehensive evaluation of your plumbing system"
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 1,
    arrows: !isMobile,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    draggable: true,
    swipe: true,
    cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1.0)"
  };

  return (
    <section 
      ref={ref} 
      className="pt-16 px-4 bg-gray-50 overflow-hidden"
    >
      <div 
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
        <p className="textcolor2 heading1 text-xl font-medium uppercase mb-2">GALLERY</p>
          <h2 className="text-3xl md:text-4xl font-bold heading2 textcolor1 mb-4">Our Work Portfolio</h2>
          {/* <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div> */}
          <p className="textcolor3 para1 max-w-2xl mx-auto">
            Explore our gallery showcasing professional plumbing projects. 
            We take pride in our quality workmanship and attention to detail.
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ${
          inView ? "opacity-100" : "opacity-0"
        }`}>
          <Slider {...sliderSettings} className="gallery-slider">
            {galleryImages.map((image) => (
              <div key={image.id} className="px-2">
                <div className="bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="relative overflow-hidden group">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-70 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-gray-200 text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        {/* <div className={`text-center mt-10 transition-all duration-1000 delay-500 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
        </div> */}
      </div>
    </section>
  );
};

export default GallerySection;