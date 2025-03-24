import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { GiCog, GiWrench } from "react-icons/gi";
import { MdOutlineHandyman } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import Button from "../Button";
import "../../styles/fonts.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PricingCard = ({
  title,
  description,
  price,
  features,
  icon,
  isHighlighted = false,
  delay = 0,
  isVisible = false,
}) => {
  const Icon = icon;

  return (
    <div
      className={`flex flex-col h-full p-4 sm:p-6 shadow-md transition-all duration-700 ${
        isHighlighted ? "gradient1 text-white" : "bg-white"
      } ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-16"
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-3 sm:mb-4">
          <Icon
            className={`w-8 h-8 sm:w-10 sm:h-10 ${
              isHighlighted ? "text-white" : "textcolor2"
            }`}
          />
        </div>

        <h3
          className={`text-lg sm:text-xl font-bold mb-2 heading2
          ${isHighlighted ? "text-white" : "textcolor1"}`}
        >
          {title}
        </h3>

        <p
          className={`text-xs sm:text-sm mb-3 sm:mb-4 para1 ${
            isHighlighted ? "text-white" : "textcolor3"
          }`}
        >
          {description}
        </p>

        <div className="border-t border-b py-3 sm:py-4 my-3 sm:my-4 flex items-end">
          <span className="text-3xl sm:text-4xl font-bold heading2 textcolor4">
            ${price}
          </span>
          <span
            className={`ml-1 sm:ml-2 text-sm sm:text-base heading2 ${
              isHighlighted ? "text-white" : "textcolor3"
            }`}
          >
            /Monthly
          </span>
        </div>

        <div className="mb-4 sm:mb-6">
          <h4
            className={`ml-1 mb-2 sm:ml-2 text-sm sm:text-base heading2 ${
              isHighlighted ? "text-white" : "textcolor1"
            }`}
          >
            Features :
          </h4>
          <ul className="space-y-1 sm:space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 textcolor2">✓</span>
                <span className="text-xs sm:text-sm para1">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <Button
            text="Choose Package"
            // variant={isHighlighted ? "secondary" : "primary"}
            className="w-full text-sm sm:text-base color2"
            delay={delay}
          />
        </div>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const [deviceSize, setDeviceSize] = useState("desktop");
  const sliderRef = useRef(null);
  const [autoplay, setAutoplay] = useState(true);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkDeviceSize = () => {
      const width = window.innerWidth;
      if (width < 375) {
        setDeviceSize("xsmall"); // For iPhone SE and similar
      } else if (width < 640) {
        setDeviceSize("medium"); // For small mobile devices
      } else if (width < 768) {
        setDeviceSize("medium"); // For larger mobile devices
      } else {
        setDeviceSize("desktop");
      }
    };

    checkDeviceSize();
    window.addEventListener("resize", checkDeviceSize);

    // Auto-start carousel on mobile
    const startAutoplay = () => {
      if (sliderRef.current && deviceSize !== "desktop") {
        sliderRef.current.slickPlay();
      }
    };

    // Set a timeout to ensure the slider is mounted
    const autoplayTimer = setTimeout(startAutoplay, 100);

    // Intersection Observer for scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.2, // 20% of the section must be visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("resize", checkDeviceSize);
      clearTimeout(autoplayTimer);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [deviceSize]);

  const packages = [
    {
      title: "Starter Pack",
      description: "Bibendum nulla posuere ac a conubia tellus finibus",
      price: "49",
      icon: GiCog,
      features: [
        "Curae parturient mollis",
        "Quam ultricies",
        "Taciti dictum viverra",
        "Velit facilisis aptent",
        "Risus class curae",
      ],
    },
    {
      title: "Premium Pack",
      description: "Bibendum nulla posuere ac a conubia tellus finibus",
      price: "99",
      icon: GiWrench,
      isHighlighted: true,
      features: [
        "Curae parturient mollis",
        "Quam ultricies",
        "Taciti dictum viverra",
        "Velit facilisis aptent",
        "Risus class curae",
      ],
    },
    {
      title: "Expert Pack",
      description: "Bibendum nulla posuere ac a conubia tellus finibus",
      price: "299",
      icon: MdOutlineHandyman,
      features: [
        "Curae parturient mollis",
        "Quam ultricies",
        "Taciti dictum viverra",
        "Velit facilisis aptent",
        "Risus class curae",
      ],
    },
    {
      title: "Ultimate Pack",
      description: "Bibendum nulla posuere ac a conubia tellus finibus",
      price: "499",
      icon: FaTools,
      features: [
        "Curae parturient mollis",
        "Quam ultricies",
        "Taciti dictum viverra",
        "Velit facilisis aptent",
        "Risus class curae",
      ],
    },
  ];

  // Get centerPadding based on device size
  const getCenterPadding = () => {
    switch (deviceSize) {
      case "xsmall":
        return "0px"; // No padding for iPhone SE to ensure proper centering
      case "small":
        return "0px"; // No padding for small devices to ensure proper centering
      case "medium":
        return "10px"; // Reduced padding for medium devices
      default:
        return "30px";
    }
  };

  // Determines if we should use centerMode for the carousel
  const useCenterMode = () => {
    return deviceSize !== "xsmall" && deviceSize !== "small";
  };

  const mobileSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 5,
    centerMode: useCenterMode(),
    centerPadding: getCenterPadding(),
    initialSlide: 1, // Start with the highlighted card (Premium)
    adaptiveHeight: true,
    beforeChange: () => {
      // Ensure autoplay continues
      if (sliderRef.current && !autoplay) {
        setAutoplay(true);
        sliderRef.current.slickPlay();
      }
    },
    afterChange: () => {
      // Reset autoplay timer on manual interaction
      if (sliderRef.current && autoplay) {
        sliderRef.current.slickPlay();
      }
    },
  };

  return (
    <div
      className="container px-3 sm:px-4 py-10 sm:py-12"
      ref={sectionRef}
    >
      <div
        className={`text-center mb-8 transition-all duration-700 ${
          sectionVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        <h2 className="text-xl uppercase font-semibold textcolor2 tracking-wider mb-2 heading1">
          CHOOSE PACKAGE
        </h2>
        <h3 className="text-4xl font-bold textcolor1 mb-4 sm:mb-8 heading2">
          Plumbing made simple with fast, <br className="hidden md:block" />
          effective solutions.
        </h3>
      </div>

      {deviceSize !== "desktop" ? (
        <div className="mobile-carousel-container">
          <Slider
            ref={sliderRef}
            {...mobileSliderSettings}
            className="mobile-pricing-slider"
          >
            {packages.map((pkg, index) => (
              <div key={index} className="mobile-slide-item">
                <div className="mobile-card-wrapper">
                  <PricingCard
                    {...pkg}
                    delay={0.1 * index}
                    isVisible={sectionVisible}
                  />
                </div>
              </div>
            ))}
          </Slider>
          <div
            className={`text-center text-xs textcolor3 mt-4 transition-opacity duration-700 ${
              sectionVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            {/* <span>Swipe to see more packages</span> */}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <PricingCard
              key={index}
              {...pkg}
              delay={0.1 * index}
              isVisible={sectionVisible}
            />
          ))}
        </div>
      )}

      <style jsx global>{`
        /* Mobile carousel specific styles */
        .mobile-carousel-container {
          width: 100%;
          max-width: 100vw;
          margin: 0 auto;
          overflow: hidden;
          padding-bottom: 20px;
        }

        .mobile-pricing-slider {
          width: 100%;
          margin: 0 auto;
        }

        .mobile-slide-item {
          padding: 0;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .mobile-card-wrapper {
          width: calc(100% - 10px);
          max-width: 400px;
          margin: 0 auto;
          height: 100%;
        }

        /* Styling for carousel dots */
        .mobile-pricing-slider .slick-dots {
          bottom: -25px;
        }

        .mobile-pricing-slider .slick-dots li button:before {
          color: #10b981;
          font-size: 8px;
        }

        .mobile-pricing-slider .slick-dots li.slick-active button:before {
          color: #10b981;
          opacity: 1;
        }

        /* Slide transition effects */
        .mobile-pricing-slider .slick-slide {
          opacity: 1;
          transition: all 0.3s ease;
        }

        .mobile-pricing-slider .slick-center {
          opacity: 1;
        }

        /* Fix for small devices to ensure centering */
        @media (max-width: 640px) {
          .slick-track {
            display: flex !important;
            justify-content: center !important;
          }

          .slick-slide {
            float: none !important;
            display: flex !important;
            justify-content: center !important;
          }

          .mobile-slide-item {
            width: 100% !important;
            max-width: 350px !important;
          }
        }

        /* Even smaller devices like iPhone SE */
        @media (max-width: 375px) {
          .mobile-slide-item {
            width: 100% !important;
            max-width: 260px !important;
          }
        }

        /* Ensure the slider doesn't overflow the container */
        .slick-list {
          overflow: hidden !important;
        }

        /* Animation keyframes */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PricingSection;
