import React, { useEffect, useState } from 'react';
import { Briefcase, Wrench, Coffee, Gem } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../../assets/homepage/img1.webp"

const PlumbingService = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Check window width on mount and resize
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 600);
        };
        
        // Initial check
        checkIfMobile();
        
        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);
        
        // Cleanup
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    // Slick carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    };

    // Card content array for easier mapping
    const cards = [
        {
            icon: <Gem className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 text-white" />,
            title: "Fast and Reliable Service",
            description: "Efficitur lobortis amet faucibus feugiat aptent convallis cubilia bibendum nostra nulla arcu"
        },
        {
            icon: <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 text-white" />,
            title: "Locally Owned and Operated",
            description: "Efficitur lobortis amet faucibus feugiat aptent convallis cubilia bibendum nostra nulla arcu"
        },
        {
            icon: <Wrench className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 text-white" />,
            title: "Advanced Tools and Technology",
            description: "Efficitur lobortis amet faucibus feugiat aptent convallis cubilia bibendum nostra nulla arcu"
        },
        {
            icon: <Coffee className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 text-white" />,
            title: "Comprehensive Plumbing Solutions",
            description: "Efficitur lobortis amet faucibus feugiat aptent convallis cubilia bibendum nostra nulla arcu"
        }
    ];

    // Card component for reuse
    const Card = ({ icon, title, description }) => (
        <div className="color1 p-6 rounded text-center transition-all duration-300 transform hover:-translate-y-5 hover:shadow-lg border-b-5 border-gray-500 bordercolor2 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-17 md:h-17 iconcolor rounded-full flex items-center justify-center mx-auto mb-6">
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 heading3">{title}</h3>
            <p className="text-blue-100 heading3">
                {description}
            </p>
        </div>
    );

    return (
        <div className="relative w-full min-h-screen color1 text-white mb-5">
            {/* Background pattern overlay */}
            <div className="absolute inset-0 color1 opacity-40 z-0">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url(${img1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    mixBlendMode: "overlay"
                }} />
            </div>

            {/* Content container */}
            <div className="relative z-10 container mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="textcolor2 heading1 lg:text-2xl font-semibold tracking-wide uppercase mb-4">WHY CHOOSE US</p>
                    <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-4xl mx-auto leading-tight heading3">
                        Where expert plumbing meets exceptional customer service.
                    </h1>
                </div>

                {/* Conditional rendering based on screen size */}
                {isMobile ? (
                    // Mobile view - Carousel
                    <div className="px-4">
                        <Slider {...settings}>
                            {cards.map((card, index) => (
                                <div key={index} className="px-2">
                                    <Card {...card} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                ) : (
                    // Desktop view - Grid
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mx-4 lg:mx-20 x-lg:mx-25">
                        {cards.map((card, index) => (
                            <Card key={index} {...card} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlumbingService;