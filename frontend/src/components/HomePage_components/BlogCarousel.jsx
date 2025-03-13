import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogCarousel = () => {
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "The Benefits of Installing a Water Softener in Your Home",
      image: "src/assets/blogs/pic1.jpg", // Replace with your image path
      date: "October 1, 2024",
      comments: 0
    },
    {
      id: 2,
      title: "How to Detect Hidden Water Leaks and Save on Bills",
      image: "src/assets/blogs/pic2.jpg", // Replace with your image path
      date: "October 1, 2024",
      comments: 0
    },
    {
      id: 3,
      title: "Water Heater Maintenance: Simple Tips for Long-Lasting Performance",
      image: "src/assets/blogs/pic3.jpg", // Replace with your image path
      date: "October 1, 2024",
      comments: 0
    },
    {
      id: 4,
      title: "Emergency Plumbing: What to Do Before Help Arrives",
      image: "src/assets/blogs/pic4.jpg", // Replace with your image path
      date: "October 1, 2024",
      comments: 0
    },
    {
      id: 5,
      title: "How to Choose the Right Plumbing Fixtures for Your Bathroom",
      image: "src/assets/blogs/pic1.jpg", // Replace with your image path
      date: "October 1, 2024",
      comments: 0
    },
    {
      id: 6,
      title: "Common Causes of Low Water Pressure and How to Fix Them",
      image: "src/assets/blogs/pic2.jpg", // Replace with your image path
      date: "October 1, 2024",
      comments: 0
    }
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Blog card component
  const BlogCard = ({ blog }) => {
    return (
      <motion.div 
        className="px-2 py-4"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white shadow-md overflow-hidden cursor-pointer h-full flex flex-col pb-8">
          <div className="h-50 overflow-hidden">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="heading3 text-gray-600 hover:text-[#389a48] transition-colors duration-300 mb-3">
              {blog.title}
            </h3>
            <div className="flex text-sm text-gray-400 heading3 mt-auto">
              <span>{blog.date}</span>
              <span className="mx-2">·</span>
              <span>{blog.comments === 0 ? "No Comments" : `${blog.comments} Comments`}</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="py-8 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="textcolor2 font-semibold text-xl heading1 uppercase tracking-wider mb-5">READ ARTICLE</p>
          <h2 className=" text-3xl md:text-5xl heading3 font-bold textcolor1 mt-2">Latest Post & Article</h2>
        </div>
        
        <div className="mb-12">
          <Slider {...settings}>
            {blogPosts.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;