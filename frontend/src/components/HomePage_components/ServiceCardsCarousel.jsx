import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Button from '../Button'; // Assuming this is the path to your button component
import { FaWrench, FaShower, FaToilet, FaSink } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

// Card Component for reusability
const ServiceCard = ({ title, description, price, icon, features, index }) => {
  const IconComponent = icon;
  
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col min-w-[280px] md:min-w-[calc(50%-16px)] cursor-grab active:cursor-grabbing"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: "0 20px 30px rgba(0,0,0,0.1)" }}
    >
      <div className="p-6 flex-grow">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-800">
            <IconComponent className="w-8 h-8" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-center text-blue-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 text-center">{description}</p>
        <div className="text-center text-2xl font-bold text-blue-900 mb-6">${price}<span className="text-sm font-normal text-gray-500">/Monthly</span></div>
        
        {/* Features list */}
        <div className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start">
              <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 pb-6">
        <Button 
          text="Choose Package" 
          variant="primary" 
          className="w-full"
        />
      </div>
    </motion.div>
  );
};

// Main carousel component
const ServiceCardsCarousel = () => {
  const carouselRef = useRef(null);
  const controls = useAnimation();
  const [width, setWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  // Service data with features
  const services = [
    {
      id: 1,
      title: "Basic Plumbing",
      description: "Essential plumbing maintenance and minor repairs for residential properties",
      price: 49,
      icon: FaWrench,
      features: [
        "24/7 customer support",
        "Free diagnostics",
        "Minor leak repairs",
        "Drain cleaning",
        "Quarterly maintenance check"
      ]
    },
    {
      id: 2,
      title: "Bathroom Specialist",
      description: "Complete bathroom plumbing services including installation and repairs",
      price: 79,
      icon: FaShower,
      features: [
        "All Basic features",
        "Fixture installation",
        "Toilet and shower repairs",
        "Water pressure optimization",
        "Pipe insulation"
      ]
    },
    {
      id: 3,
      title: "Emergency Services",
      description: "24/7 emergency plumbing support with rapid response times",
      price: 99,
      icon: FaToilet,
      features: [
        "1-hour response time",
        "Priority scheduling",
        "Weekend service",
        "Holiday coverage",
        "Major repair discounts"
      ]
    },
    {
      id: 4,
      title: "Kitchen Plumbing",
      description: "Specialized kitchen plumbing services for fixtures and appliances",
      price: 69,
      icon: FaSink,
      features: [
        "Garbage disposal installation",
        "Dishwasher hookup",
        "Sink and faucet repair",
        "Water filtration systems",
        "Pipe replacement"
      ]
    }
  ];

  // Calculate dimensions on mount and resize
  useEffect(() => {
    if (!carouselRef.current) return;
    
    const updateDimensions = () => {
      const container = carouselRef.current;
      setWidth(container.offsetWidth);
      
      // Calculate card width based on viewport
      const isMobile = window.innerWidth < 768;
      const gap = 16; // gap between cards (in px)
      const visibleCards = isMobile ? 1 : 2;
      const newCardWidth = (container.offsetWidth - ((visibleCards - 1) * gap)) / visibleCards;
      setCardWidth(newCardWidth);
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Auto-scrolling carousel effect
  useEffect(() => {
    const autoSwivel = setInterval(() => {
      if (isDragging) return;
      
      const nextIndex = (currentIndex + 1) % (services.length - 1);
      setCurrentIndex(nextIndex);
      
      // Calculate position based on card width and current index
      const position = -(nextIndex * (cardWidth + 16)); // 16px is the gap
      controls.start({ x: position, transition: { duration: 0.7, ease: "easeInOut" } });
    }, 3000); // Change slide every 3 seconds
    
    return () => clearInterval(autoSwivel);
  }, [currentIndex, cardWidth, controls, isDragging, services.length]);

  // Handle drag start, end and constraints
  const handleDragStart = () => {
    setIsDragging(true);
  };
  
  const handleDragEnd = (_, info) => {
    setIsDragging(false);
    
    // Calculate which slide to snap to based on drag velocity and distance
    const threshold = cardWidth / 4;
    const velocity = info.velocity.x;
    const offset = info.offset.x;
    
    // Calculate new index based on drag
    let newIndex = currentIndex;
    
    if (Math.abs(offset) > threshold || Math.abs(velocity) > 500) {
      if (offset > 0 || velocity > 500) {
        // Dragged right - go to previous slide
        newIndex = Math.max(0, currentIndex - 1);
      } else {
        // Dragged left - go to next slide
        newIndex = Math.min(services.length - 2, currentIndex + 1);
      }
    }
    
    // Update current index and animate to the correct position
    setCurrentIndex(newIndex);
    const position = -(newIndex * (cardWidth + 16));
    controls.start({ x: position, transition: { type: "spring", stiffness: 500, damping: 30 } });
  };

  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Service Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose from our range of professional plumbing service packages tailored to meet your specific needs.</p>
        </div>
        
        <div className="relative overflow-hidden">
          <motion.div 
            ref={carouselRef}
            className="flex gap-4"
            drag="x"
            dragConstraints={{ right: 0, left: -((services.length - 1) * (cardWidth + 16)) }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={controls}
          >
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                price={service.price}
                icon={service.icon}
                features={service.features}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardsCarousel;