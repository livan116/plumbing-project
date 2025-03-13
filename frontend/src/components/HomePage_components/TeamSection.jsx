import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from "framer-motion";

const TeamMember = ({ name, position, image }) => {
  return (
    <div className="px-2">
      <motion.div 
        className="bg-white shadow-lg rounded-lg overflow-hidden h-full"
        whileHover={{ 
          y: -10,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <img 
              src={image} 
              alt={name} 
              className="w-full h-64 object-cover bg-gray-300 transition-transform duration-300"
            />
          </motion.div>
          <div className="absolute right-4 top-4 space-y-2">
            <motion.button 
              className="bg-white rounded-full p-2 shadow-md hover:bg-green-50 transition-colors duration-200 block"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook className="text-green-500 text-lg" />
            </motion.button>
            <motion.button 
              className="bg-white rounded-full p-2 shadow-md hover:bg-green-50 transition-colors duration-200 block"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter className="text-green-500 text-lg" />
            </motion.button>
            <motion.button 
              className="bg-white rounded-full p-2 shadow-md hover:bg-green-50 transition-colors duration-200 block"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="text-green-500 text-lg" />
            </motion.button>
            <motion.button 
              className="bg-white rounded-full p-2 shadow-md hover:bg-green-50 transition-colors duration-200 block"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope className="text-green-500 text-lg" />
            </motion.button>
          </div>
        </div>
        <div className="p-6 bg-white">
          <h3 className="text-xl font-bold text-center text-blue-900">{name}</h3>
          <p className="text-center text-gray-600">{position}</p>
        </div>
      </motion.div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Oscar Andrews",
      position: "Founder",
      image: "/api/placeholder/400/320"
    },
    {
      name: "Emily Davis",
      position: "Co-Founder",
      image: "/api/placeholder/400/320"
    },
    {
      name: "Sarah Miller",
      position: "Business Manager",
      image: "/api/placeholder/400/320"
    },
    {
      name: "Callum Rogers",
      position: "Marketing",
      image: "/api/placeholder/400/320"
    },
    {
      name: "Michael Johnson",
      position: "Tech Lead",
      image: "/api/placeholder/400/320"
    },
    {
      name: "Olivia Thompson",
      position: "UX Designer",
      image: "/api/placeholder/400/320"
    },
    {
      name: "David Kim",
      position: "Product Manager",
      image: "/api/placeholder/400/320"
    },
    {
      name: "Sophia Garcia",
      position: "Customer Relations",
      image: "/api/placeholder/400/320"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <motion.section 
      className="py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Custom CSS to fix horizontal scrolling issues */}
      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
        .slick-slider {
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }
        .slick-list {
          overflow: hidden !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .slick-track {
          display: flex !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
      `}</style>
      
      <div className="container mx-auto px-4 overflow-hidden">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2 
            className="text-green-500 font-medium uppercase tracking-wider mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            MEET OUR TEAM
          </motion.h2>
          <motion.h3 
            className="text-4xl font-bold text-blue-900 max-w-3xl mx-auto leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            We talk a lot about hope helping and teamwork.
          </motion.h3>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="overflow-hidden"
        >
          <div className="overflow-hidden">
            <Slider {...settings}>
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamSection;