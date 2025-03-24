import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Button from "../Button";
import { FaTrophy } from "react-icons/fa";
import repair from "../../assets/repair.png";
import "../../styles/fonts.css";
import video from "../../assets/videos/video1.mp4";

const WhoWeAre = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);
  
  // Set up intersection observer
  const isInView = useInView(sectionRef, {
    once: true, // Animation only happens once
    amount: 0.2, // Trigger when 20% of the element is in view
    margin: "0px 0px -100px 0px" // Start animation slightly before section is in view
  });

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="w-full overflow-hidden bg-gray-50 py-8 md:py-12 lg:py-16"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Left side with icon, title and image */}
          <motion.div
            className="relative mb-8 lg:mb-0 lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            {/* Small screens layout */}
            <div className="flex flex-col lg:hidden">
              {/* Green background with gradient for small screens */}
              <div className="gradient2 p-6 rounded-t-lg">
                <div className="flex flex-col items-center justify-center text-white">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mb-4 bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center border-green-600"
                  >
                    <FaTrophy className="text-green-600 text-2xl" />
                  </motion.div>
                  <motion.h3
                    initial={{ y: 10, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-xl font-bold mb-0 text-center heading2"
                  >
                    Comprehensive
                  </motion.h3>
                  <motion.h3
                    initial={{ y: 10, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                    transition={{ delay: 0.45, duration: 0.5 }}
                    className="text-xl font-bold mb-0 text-center heading2"
                  >
                    Plumbing
                  </motion.h3>
                  <motion.h3
                    initial={{ y: 10, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-xl font-bold mb-2 text-center heading2"
                  >
                    Solutions
                  </motion.h3>
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                    transition={{ delay: 0.55, duration: 0.5 }}
                    className="text-xs text-center para1"
                  >
                    Letius viverra euismod himenaeos lobortis facilisis
                    fringilla potenti
                  </motion.p>
                </div>
              </div>
              {/* Mobile image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="w-full"
              >
                <img
                  src={repair}
                  alt="Plumber working on pipes"
                  className="w-full mt-2 h-70 md:h-auto object-cover shadow-lg"
                />
              </motion.div>
            </div>

            {/* Desktop layout */}
            <div className="relative hidden lg:block ml-20">
              {/* Green background with gradient */}
              <div className="absolute bottom-15 left-0 h-90 w-64 gradient2"></div>

              {/* Icon and text overlay */}
              <div className="md:absolute flex flex-col justify-center items-center left-0 mt-15 z-10 w-64 p-6 text-white">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mb-6 bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center border-green-600"
                >
                  <FaTrophy className="text-green-600 text-3xl" />
                </motion.div>
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-2xl font-bold mb-0 text-center heading2"
                >
                  Comprehensive
                </motion.h3>
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                  className="text-2xl font-bold mb-0 text-center heading2"
                >
                  Plumbing
                </motion.h3>
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-2xl font-bold mb-3 text-center heading2"
                >
                  Solutions
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  className="text-sm text-center para1"
                >
                  Letius viverra euismod himenaeos lobortis facilisis fringilla
                  potenti
                </motion.p>
              </div>

              {/* Main image */}
              <motion.div
                className="relative ml-64 z-10 h-full"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <img
                  src={repair}
                  alt="Plumber working on pipes"
                  className="h-full w-100 object-cover shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right side with text and buttons */}
          <motion.div
            className="lg:w-1/2 lg:pl-16 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.p
              className="textcolor2 font-medium mb-2 md:mb-4 uppercase tracking-wider heading1 text-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              WHO WE ARE
            </motion.p>

            <motion.h2
              className="text-3xl md:text-4xl font-bold textcolor1 mb-4 md:mb-6 lg:text-5xl heading2"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Plumbing made simple with fast, effective solutions.
            </motion.h2>

            <motion.p
              className="textcolor3 mb-6 md:mb-8 para1 text-sm md:text-base"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Aliquam pellentesque quam aenean bibendum mollis per. Duis non
              rhoncus vulputate maximus enim ornare. Diam eu id rutrum lobortis
              netus neque integer venenatis letius libero a.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button
                  text="Discover more"
                  variant="primary"
                  icon="arrow"
                  className="color2 w-full sm:w-auto"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-full sm:w-64 mt-4 sm:mt-0 overflow-hidden rounded shadow-lg"
              >
                <video
                  ref={videoRef}
                  onClick={handleVideoToggle}
                  className="w-full h-full object-cover cursor-pointer"
                  poster="/api/placeholder/300/200"
                  autoPlay
                  loop
                  muted
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;