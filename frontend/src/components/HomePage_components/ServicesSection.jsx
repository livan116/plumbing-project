import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
import "../../styles/fonts.css"
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

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './services.css';

// Service data matching the image
const services = [
  { 
    title: "Pipe Installation", 
    description: "Efficitur gravida ante risus nisi litora sollicitudin mi ut non tristique euismod", 
    icon: <FaCog className="textcolor2 text-3xl" />, 
    id: "01" 
  },
  { 
    title: "Leak Detection", 
    description: "Efficitur gravida ante risus nisi litora sollicitudin mi ut non tristique euismod", 
    icon: <FaExpandArrowsAlt className="textcolor2 text-3xl" />, 
    id: "02" 
  },
  { 
    title: "Drain Cleaning", 
    description: "Efficitur gravida ante risus nisi litora sollicitudin mi ut non tristique euismod", 
    icon: <FaLayerGroup className="textcolor2 text-3xl" />, 
    id: "03" 
  },
  { 
    title: "Water Heater", 
    description: "Efficitur gravida ante risus nisi litora sollicitudin mi ut non tristique euismod", 
    icon: <FaFlask className="textcolor2 text-3xl" />, 
    id: "04" 
  },
  { 
    title: "Sewer Inspection", 
    description: "Efficitur gravida ante risus nisi litora sollicitudin mi ut non tristique euismod", 
    icon: <FaWrench className="textcolor2 text-3xl" />, 
    id: "05" 
  },
  { 
    title: "Toilet Repair", 
    description: "Efficitur gravida ante risus nisi litora sollicitudin mi ut non tristique euismod", 
    icon: <FaExternalLinkAlt className="textcolor2 text-3xl" />, 
    id: "06" 
  },
  { 
    title: "Faucet Repair", 
    description: "Efficitur gravida ante risus nisi litora sollicitudin mi ut non tristique euismod", 
    icon: <FaTint className="textcolor2 text-3xl" />, 
    id: "07" 
  },
  { 
    title: "Plumbing Remodels", 
    description: "Efficitur gravida ante risus nisi litora sollicitudin mi ut non tristique euismod", 
    icon: <FaWater className="textcolor2 text-3xl" />, 
    id: "08" 
  },
];

const ServicesSection = () => {
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

  return (
    <div className="services-section md:px-24 py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="textcolor2 heading1 text-xl font-medium uppercase mb-2">WHAT WE OFFER</h2>
          <h3 className="text-4xl font-bold heading2 textcolor1 mb-2">Fast, reliable plumbing expertise</h3>
          <h3 className="text-4xl font-bold heading2 textcolor1">you can trust.</h3>
        </div>

        {/* Desktop View */}
        <div className="hidden xl:block">
          <div className="grid grid-cols-4 gap-6 mb-6">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="grid grid-cols-4 gap-6">
            {services.slice(4, 8).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Tablet and Mobile View (Carousel) */}
        <div className="xl:hidden">
          <Slider {...settings}>
            {services.map((service) => (
              <div key={service.id} className="px-2">
                <ServiceCard service={service} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ service }) => {
  return (
    <motion.div
      className="bg-white p-6 shadow-md relative overflow-hidden service-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="service-number text-gray-100 absolute top-0 right-0 text-7xl font-bold opacity-20">
        {service.id}
      </div>
      <div className="flex flex-col items-start">
        <div className="mb-4">
          {service.icon}
        </div>
        <h3 className="text-xl heading2 font-bold textcolor1 mb-2">{service.title}</h3>
        <p className="textcolor3 para1 mb-6">{service.description}</p>
        <Button 
            text="Learn more" 
            variant="primary" 
            // icon="arrow" 
            delay={0.6}
            className="text-xl "
          />
      </div>
    </motion.div>
  );
};

export default ServicesSection;