import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  FaCog, 
  FaExpandArrowsAlt, 
  FaLayerGroup, 
  FaFlask, 
  FaWrench, 
  FaExternalLinkAlt, 
  FaTint, 
  FaWater 
} from 'react-icons/fa';
import Slider from 'react-slick';
import "../../styles/fonts.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './services.css';

// Service data matching the image
const services = [
  { 
    title: "Pipe Installation", 
    description: "Efficitur gravida ante risus nisi litora sollicitudin mi ut non tristique euismod", 
    icon: <FaCog className="text-green-500 text-3xl" />, 
    id: "01" 
  },
  { 
    title: "Leak Detection", 
    description: "Efficitur gravida ante risus nisi litora sollicitudin mi ut non tristique euismod", 
    icon: <FaExpandArrowsAlt className="text-green-500 text-3xl" />, 
    id: "02" 
  },
  { 
    title: "Drain Cleaning", 
    description: "Efficitur gravida ante risus nisi litora sollicitudin mi ut non tristique euismod", 
    icon: <FaLayerGroup className="text-green-500 text-3xl" />, 
    id: "03" 
  },
  { 
    title: "Water Heater", 
    description: "Efficitur gravida ante risus nisi litora sollicitudin mi ut non tristique euismod", 
    icon: <FaFlask className="text-green-500 text-3xl" />, 
    id: "04" 
  },
  { 
    title: "Sewer Inspection", 
    description: "Efficitur gravida ante risus nisi litora sollicitudin mi ut non tristique euismod", 
    icon: <FaWrench className="text-green-500 text-3xl" />, 
    id: "05" 
  },
  { 
    title: "Toilet Repair", 
    description: "Efficitur gravida ante risus nisi litora sollicitudin mi ut non tristique euismod", 
    icon: <FaExternalLinkAlt className="text-green-500 text-3xl" />, 
    id: "06" 
  },
  { 
    title: "Faucet Repair", 
    description: "Efficitur gravida ante risus nisi litora sollicitudin mi ut non tristique euismod", 
    icon: <FaTint className="text-green-500 text-3xl" />, 
    id: "07" 
  },
  { 
    title: "Plumbing Remodels", 
    description: "Efficitur gravida ante risus nisi litora sollicitudin mi ut non tristique euismod", 
    icon: <FaWater className="text-green-500 text-3xl" />, 
    id: "08" 
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, threshold: 0.1 });
  const headingControls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      headingControls.start('visible');
    }
  }, [isInView, headingControls]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const headingVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={sectionRef} className="services-section py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial="hidden"
          animate={headingControls}
          variants={headingVariants}
        >
          <h2 className="text-green-500 font-medium uppercase mb-2">WHAT WE OFFER</h2>
          <h3 className="text-4xl font-bold text-blue-900 mb-2">Fast, reliable plumbing expertise</h3>
          <h3 className="text-4xl font-bold text-blue-900">you can trust.</h3>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden xl:block">
          <div className="grid grid-cols-4 gap-6 mb-6">
            {services.slice(0, 4).map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                isInView={isInView} 
                index={index} 
              />
            ))}
          </div>
          <div className="grid grid-cols-4 gap-6">
            {services.slice(4, 8).map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                isInView={isInView} 
                index={index + 4} 
              />
            ))}
          </div>
        </div>

        {/* Tablet and Mobile View (Carousel) */}
        <div className="xl:hidden">
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={service.id} className="px-2">
                <ServiceCard 
                  service={service} 
                  isInView={isInView} 
                  index={index} 
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ service, isInView, index }) => {
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0 
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.1 + (index * 0.1),
        ease: "easeOut"
      }
    }
  };

  const numberVariants = {
    hidden: { 
      opacity: 0, 
      x: 20 
    },
    visible: {
      opacity: 0.2,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2 + (index * 0.1),
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="bg-white p-6 rounded shadow-md relative overflow-hidden service-card"
      initial="hidden"
      animate={controls}
      variants={cardVariants}
    >
      <motion.div 
        className="service-number text-gray-100 absolute top-0 right-0 text-7xl font-bold opacity-20"
        variants={numberVariants}
      >
        {service.id}
      </motion.div>
      <div className="flex flex-col items-start">
        <motion.div
          className="mb-4"
          variants={iconVariants}
        >
          {service.icon}
        </motion.div>
        <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
        <p className="text-color3 text-red-100 mb-6">{service.description}</p>
        <motion.button 
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors duration-300 text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn more
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServicesSection;