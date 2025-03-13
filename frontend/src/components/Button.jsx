import React from 'react';
import { IoCalendarOutline } from 'react-icons/io5';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import "../styles/fonts.css"

const Button = ({ 
  text, 
  onClick, 
  variant = 'primary', 
  icon = 'none',
  className = '',
  delay = 0
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-colors duration-200";
  
  const variants = {
    primary: "color2 hover:bg-green-700 text-white py-3 px-6",
    secondary: "color1 hover:bg-blue-900 text-white py-3 px-6",
    outline: "border-2 border-white text-white hover:bg-white/10 py-3 px-6"
  };
  
  const icons = {
    none: null,
    arrow: <HiArrowNarrowRight className="ml-2" />,
    calendar: <IoCalendarOutline className="mr-2" />
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className} para1 font-medium text-lg `}
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {icon === 'calendar' && icons.calendar}
      {text}
      {icon === 'arrow' && icons.arrow}
    </motion.button>
  );
};

export default Button;