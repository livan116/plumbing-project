import React from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../Button';
import "../../styles/fonts.css";

const ConsultationSection = ({
  title, para, image
}) => {
  // Create a ref for the section
  const ref = React.useRef(null);
  
  // Check if the section is in view
  const isInView = useInView(ref, {
    once: true, // Only trigger the animation once
    amount: 0.3, // Trigger when 30% of the element is in view
    margin: "0px 0px -100px 0px" // Negative margin to trigger a bit earlier
  });

  return (
    <div 
      ref={ref}
      className="relative w-full py-16 md:h-[600px] overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity color1 z-20">
        <img src={image} className="object-cover opacity-40 w-full h-full" alt="Plumber working" />
      </div>
      
      {/* Content Container */}
      <motion.div 
        className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center md:px-24"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.h2 
          className="text-4xl heading1 md:text-6xl max-w-2xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h2>
        
        {/* Subtext */}
        <motion.p 
          className="text-white para1 text-lg md:text-xl max-w-3xl mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
         {para}
        </motion.p>
        
        {/* Button */}
        <motion.div 
          className="motion-safe:hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            text="Free Consultations!" 
            variant="primary" 
            className="text-xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ConsultationSection;