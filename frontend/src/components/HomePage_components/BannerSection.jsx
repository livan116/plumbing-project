import React from 'react';
import PropTypes from 'prop-types';
import banner from '../../assets/blogs/img2.webp'

const BannerSection = ({ 
  title = "ABOUT US", 
  subtitle = "Where expert plumbing meets exceptional customer service.", 
  backgroundImage = banner,
}) => {
  return (
    <div className="relative w-full h-64 md:h-70 lg:h-80 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10 banner-gradient opacity-90"
      />
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32">
        <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-6 heading1">
          {title}
        </h1>
        <p className="text-white text-lg md:text-xl lg:text-3xl max-w-md heading3">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

BannerSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  backgroundImage: PropTypes.string,
  gradientDirection: PropTypes.string,
  gradientStartColor: PropTypes.string,
  gradientEndColor: PropTypes.string
};

export default BannerSection;