import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
  // Create a ref for the section
  const sectionRef = useRef(null);
  
  // Check if the section is in view
  const isInView = useInView(sectionRef, {
    once: true, // Only trigger the animation once
    amount: 0.2, // Trigger when 20% of the element is in view
    margin: "0px 0px -100px 0px" // Negative margin to trigger a bit earlier
  });

  const settings = {
    dots: false,
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

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div ref={sectionRef} className="services-section md:px-24 md:py-16 py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="textcolor2 heading1 text-xl font-medium uppercase mb-2">WHAT WE OFFER</h2>
          <h3 className="text-4xl font-bold heading2 textcolor1 mb-2">Fast, reliable plumbing expertise</h3>
          <h3 className="text-4xl font-bold heading2 textcolor1">you can trust.</h3>
          <p className='textcolor3 para1 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nam eum cumque possimus, doloremque exercitationem veritatis cum voluptatibus consequuntur fugit dolores labore? Quaerat architecto placeat voluptatibus soluta reprehenderit. Assumenda impedit quaerat temporibus recusandae labore illo alias, culpa quam rerum asperiores ipsam molestiae! Molestiae quasi molestias quaerat expedita, magnam nam esse.</p>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden xl:block">
          <motion.div 
            className="grid grid-cols-4 gap-6 mb-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {services.slice(0, 4).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} isInView={isInView} />
            ))}
          </motion.div>
          <motion.div 
            className="grid grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {services.slice(4, 8).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index + 4} isInView={isInView} />
            ))}
          </motion.div>
        </div>

        {/* Tablet and Mobile View (Carousel) */}
        <div className="xl:hidden">
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={service.id} className="px-2">
                <ServiceCard service={service} index={index} isInView={isInView} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ service, index, isInView }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        delay: 0.1 * index // Staggered delay based on index
      } 
    }
  };

  return (
    <motion.div
      className="bg-white p-6 shadow-md relative overflow-hidden service-card"
      variants={cardVariants}
    >
      <div className="service-number text-gray-500 absolute top-0 right-0 text-7xl font-bold">
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
          className="text-xl"
        />
      </div>
    </motion.div>
  );
};

export default ServicesSection;