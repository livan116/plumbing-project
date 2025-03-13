import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
import image from '../../assets/homepage/img2.webp'
import "../../styles/fonts.css"

const ConsultationSection = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity color1 z-20">
        {/* You would add your actual background image here */}
        <img src={image} className="object-cover opacity-40 w-full h-full" alt="Plumber working" />
      </div>
      
      {/* Content Container */}
      <motion.div 
        className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.h2 
          className="text-4xl heading1 md:text-6xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          GET EXPERT ADVICE WITH A
          <br />
          FREE CONSULTATION!
        </motion.h2>
        
        {/* Subtext */}
        <motion.p 
          className="text-white para1 text-lg md:text-xl max-w-3xl mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Ultrices quam mattis posuere porttitor tellus rhoncus tristique. Primis aliquam dignissim interdum vel suscipit sodales.
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