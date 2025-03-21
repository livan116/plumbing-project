import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
// import image from '../../assets/homepage/img2.webp'
import "../../styles/fonts.css"

const ConsultationSection = ({
  title,para,image
}) => {
  return (
    <div className="relative w-full py-16 md:h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity color1 z-20">
        {/* You would add your actual background image here */}
        <img src={image} className="object-cover opacity-40 w-full h-full" alt="Plumber working" />
      </div>
      
      {/* Content Container */}
      <motion.div 
        className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center md:px-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.h2 
          className="text-4xl heading1 md:text-6xl max-w-2xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h2>
        
        {/* Subtext */}
        <motion.p 
          className="text-white para1 text-lg md:text-xl max-w-3xl mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
         {para}
        </motion.p>
        
        {/* Using your custom Button component with proper props */}
        <div className="motion-safe:hover:scale-105 transition-transform">
          <Button 
            text="Free Consultations!" 
            variant="primary" 
            // icon="arrow" 
            delay={0.6}
            className="text-xl"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ConsultationSection;