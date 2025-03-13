import React from 'react';
import Button from '../Button';
import { IoCalendarOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import image from '../../assets/homepage/img1.webp'
import "../../styles/fonts.css"

const HeroSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt="Plumber working" 
          className="w-full h-full object-cover"
        />
        <div className="absolute z-10 inset-0 opacity-40 color1"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row justify-around md:px-24 items-center">
          {/* Left Column - Hero Text */}
          <div className="w-full text-center md:text-left mb-10 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl heading1 font-bold text-white leading-tight mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              EXPERT CARE FOR EVERY<br />
              PIPE IN YOUR HOME.
            </motion.h1>
            
            <motion.p 
              className="text-white text-lg para1 mb-8 max-w-xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Efficient plumbing solutions delivered with seamless,
              professional service from start to finish.
            </motion.p>
            
            <Button 
              text="Discover more" 
              variant="primary" 
              icon="arrow" 
              delay={0.5}
            />
          </div>
          
          {/* Right Column - Form (Hidden on Mobile) */}
          <div className="w-full md:w-1/2 hidden md:block">
            <motion.div 
              className="color1 p-8 max-w-md ml-auto"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 para1 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Name</label>
                    <motion.input
                      type="text"
                      id="name"
                      placeholder="Name"
                      className="w-full p-3 bg-white"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">Phone</label>
                    <motion.input
                      type="tel"
                      id="phone"
                      placeholder="Phone"
                      className="w-full p-3 bg-white"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="date" className="block text-white mb-2">Date</label>
                    <motion.input
                      type="date"
                      id="date"
                      placeholder="Date"
                      className="w-full p-3 bg-white"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-white mb-2">Time</label>
                    <motion.input
                      type="time"
                      id="time"
                      placeholder="Time"
                      className="w-full p-3 bg-white"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                  <motion.input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    className="w-full p-3 bg-white"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <motion.textarea
                    id="message"
                    rows="4"
                    placeholder="Message"
                    className="w-full p-3 bg-white resize-none"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  ></motion.textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full text-white py-3 px-4 flex items-center justify-center"
                  text="Book Now" 
                  variant="primary" 
                  icon="calendar" 
                  delay={0.5}
                />
                 
              
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Emergency Banner */}
      <div className="relative z-10">
        <motion.div 
          className="gradient py-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center gap-8 items-center">
            <motion.div 
              className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-0 text-center md:text-left"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              Need emergency help? Call right away.
            </motion.div>
            <Button 
              text="Contact us" 
              variant="primary" 
              icon="arrow" 
              className=" w-full md:w-auto"
              delay={1.2}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;