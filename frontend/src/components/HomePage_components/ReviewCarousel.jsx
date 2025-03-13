import React from 'react';
import Slider from 'react-slick';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./homestyles.css";

const testimonials = [
  {
    name: "Michael Harrison",
    location: "Jakarta",
    review: "We had a major leak, but Pipeo's plumbers arrived fast and resolved it without hassle. Their professionalism and friendly service really stood out. I'm so glad we chose them!",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    rating: 4.5,
  },
  {
    name: "David Thompson",
    location: "Jakarta",
    review: "The team at Pipeo did an amazing job replacing our old pipes. They were punctual and finished the job ahead of schedule. We're very satisfied with the quality of their work!",
    image: "https://via.placeholder.com/150",
    rating: 4.8,
  },
  {
    name: "Emily Robinson",
    location: "Bandung",
    review: "Pipeo's installation of our new water heater was seamless. The team was friendly, efficient, and left everything clean when they were done. We're very happy with the results!",
    image: "https://via.placeholder.com/150",
    rating: 4.9,
  },
  {
    name: "Sarah Johnson",
    location: "Bandung",
    review: "Great service! The plumbers at Pipeo are very professional and efficient. I am very happy with their work.",
    image: "https://via.placeholder.com/150",
    rating: 4.7,
  },
];

const ReviewCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-500" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-yellow-500" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-star-${i}`} className="text-yellow-500" />);
    }
    
    return stars;
  };

  return (
    <div className="testimonial-section py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-color2 heading1 text-xl font-medium uppercase mb-2">TESTIMONIAL</p>
          <h2 className="text-4xl font-bold heading2 text-color1">Client Feedback & Reviews</h2>
          <div className="flex justify-center mt-4">
            <div className="flex text-2xl">
              {renderStars(4)}
            </div>
          </div>
        </div>
        
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4 pb-8">
              <div className="testimonial-card relative">
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-600 text-center leading-relaxed">
                    {testimonial.review}
                  </p>
                </div>
                
                <div className="testimonial-pointer"></div>
                
                <div className="flex items-center mt-6 justify-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-blue-900 text-lg">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewCarousel;