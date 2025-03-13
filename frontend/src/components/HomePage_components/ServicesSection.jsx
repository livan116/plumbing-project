import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import Button from '../Button';  // Importing your reusable button

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Dummy service data
const services = [
  { title: "Pipe Installation", description: "Effictur gravida ante risus nisi litora sollicitudin.", icon: "🛠️", id: 1 },
  { title: "Leak Detection", description: "Effictur gravida ante risus nisi litora sollicitudin.", icon: "💧", id: 2 },
  { title: "Drain Cleaning", description: "Effictur gravida ante risus nisi litora sollicitudin.", icon: "🧹", id: 3 },
  { title: "Water Heater", description: "Effictur gravida ante risus nisi litora sollicitudin.", icon: "🔥", id: 4 },
  { title: "Sewer Inspection", description: "Effictur gravida ante risus nisi litora sollicitudin.", icon: "🔧", id: 5 },
  { title: "Toilet Repair", description: "Effictur gravida ante risus nisi litora sollicitudin.", icon: "🚽", id: 6 },
  { title: "Faucet Repair", description: "Effictur gravida ante risus nisi litora sollicitudin.", icon: "🚰", id: 7 },
  { title: "Plumbing Remodels", description: "Effictur gravida ante risus nisi litora sollicitudin.", icon: "🏠", id: 8 },
];

const ServicesSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024, // Mobile and tablets
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">What We Offer</h2>
      <div className="hidden lg:grid grid-cols-4 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-lg text-center relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: service.id * 0.1 }}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Button
              text="Learn more"
              variant="primary"
              onClick={() => console.log(`${service.title} clicked`)}
              icon="arrow"
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile/Tablet View (Carousel) */}
      <div className="lg:hidden">
        <Slider {...settings}>
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center relative mx-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: service.id * 0.1 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button
                text="Learn more"
                variant="primary"
                onClick={() => console.log(`${service.title} clicked`)}
                icon="arrow"
              />
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServicesSection;
