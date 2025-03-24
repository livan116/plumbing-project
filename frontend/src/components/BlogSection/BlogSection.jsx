import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
import "../../styles/fonts.css";
import ServiceCard from "./ServiceCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/blogs/pic1.jpg";
import img2 from "../../assets/blogs/pic2.jpg";
import img3 from "../../assets/blogs/pic3.jpg";
import img4 from "../../assets/blogs/pic4.jpg";
import img5 from "../../assets/blogs/pic5.jpg";
import img6 from "../../assets/blogs/pic6.jpg";
import Navbar from "../Navbar";
import PipeoFooter from "../footer/PipeoFooter";

// Main Component
const BlogsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const services = [
    {
      title:
        "Water Softener: The Benefits of Installing a Water Softener in Your Home",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste ut consequuntur, fugiat, dolores non debitis tempora, perferendis magni illum placeat totam dolorem nesciunt! Suscipit nulla recusandae hic sit modi dolorem facilis libero, voluptatem vitae, ut ab nihil aliquam. Dolore voluptates doloribus perferendis eos. Dicta nisi consequuntur quam veritatis hic.",
      image: img1,
      date: "October 1, 2024",
      comments: "No Comments",
    },
    {
      title:
        "Leak Detection: How to Detect Hidden Water Leaks and Save on Bills",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste ut consequuntur, fugiat, dolores non debitis tempora, perferendis magni illum placeat totam dolorem nesciunt! Suscipit nulla recusandae hic sit modi dolorem facilis libero, voluptatem vitae, ut ab nihil aliquam. Dolore voluptates doloribus perferendis eos. Dicta nisi consequuntur quam veritatis hic.",
      image: img2,
      date: "October 1, 2024",
      comments: "No Comments",
    },
    {
      title:
        "Water Heater: Water Heater Maintenance: Simple Tips for Long-Lasting Performance",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste ut consequuntur, fugiat, dolores non debitis tempora, perferendis magni illum placeat totam dolorem nesciunt! Suscipit nulla recusandae hic sit modi dolorem facilis libero, voluptatem vitae, ut ab nihil aliquam. Dolore voluptates doloribus perferendis eos. Dicta nisi consequuntur quam veritatis hic.",
      image: img3,
      date: "October 1, 2024",
      comments: "No Comments",
    },
    {
      title: "Plumbing: Essential Plumbing Maintenance Tips for Homeowners",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste ut consequuntur, fugiat, dolores non debitis tempora, perferendis magni illum placeat totam dolorem nesciunt! Suscipit nulla recusandae hic sit modi dolorem facilis libero, voluptatem vitae, ut ab nihil aliquam. Dolore voluptates doloribus perferendis eos. Dicta nisi consequuntur quam veritatis hic.",
      image: img4,
      date: "October 1, 2024",
      comments: "No Comments",
    },
    {
      title:
        "Water Filter: Choosing the Right Water Filtration System for Your Home",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste ut consequuntur, fugiat, dolores non debitis tempora, perferendis magni illum placeat totam dolorem nesciunt! Suscipit nulla recusandae hic sit modi dolorem facilis libero, voluptatem vitae, ut ab nihil aliquam. Dolore voluptates doloribus perferendis eos. Dicta nisi consequuntur quam veritatis hic.",
      image: img5,
      date: "October 1, 2024",
      comments: "No Comments",
    },
    {
      title:
        "Drainage: How to Prevent Clogged Drains and Maintain Proper Drainage",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste ut consequuntur, fugiat, dolores non debitis tempora, perferendis magni illum placeat totam dolorem nesciunt! Suscipit nulla recusandae hic sit modi dolorem facilis libero, voluptatem vitae, ut ab nihil aliquam. Dolore voluptates doloribus perferendis eos. Dicta nisi consequuntur quam veritatis hic.",
      image: img6,
      date: "October 1, 2024",
      comments: "No Comments",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    // cssEase: "ease-in-out",
  };

  return (
    <>
      <Navbar/>
      <div className="py-8 px-4 bg-gray-50">
        <div className="md:px-24">
          <h2 className="text-3xl font-bold text-center textcolor1 heading2 mb-8">
            Our Water Services
          </h2>
          <p className="text-center para1 textcolor3 mb-10 max-w-3xl mx-auto">
            Professional water services for your home and business needs. We
            provide quality solutions for all your water systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
      <PipeoFooter/>
    </>
  );
};

export default BlogsSection;
