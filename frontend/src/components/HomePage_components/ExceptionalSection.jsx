import React from "react";
import { motion } from "framer-motion";
import { FaLayerGroup, FaChartBar } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "../../styles/fonts.css";
import plumber1 from "../../assets/homepage/plumber1.webp";
import plumber2 from "../../assets/homepage/plumber2.webp";
import plumberavif1 from "../../assets/homepage/plumber-avif2.avif";
import plumberavif2 from "../../assets/homepage/plumber-avif1.avif";
import { RxSketchLogo } from "react-icons/rx";
import { SlLayers } from "react-icons/sl";
import { RiBarChart2Line } from "react-icons/ri";

const ServiceFeature = ({ icon: Icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="flex items-start gap-4 mb-8"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex-shrink-0">
        <div className="w-16 h-16 font-bold rounded-full color2 flex items-center justify-center text-white">
          <Icon size={30} />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold textcolor1 heading2 mb-2">{title}</h3>
        <p className="textcolor3 para1">{description}</p>
      </div>
    </motion.div>
  );
};

const ExceptionalSection = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text Content */}
        <div>
          <motion.p
            className="textcolor2 font-medium mb-3 heading1"
            initial={{ opacity: 0, y: 20 }}
            animate={
              sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5 }}
          >
            OUR SERVICE
          </motion.p>

          <motion.h2
            className="text-3xl font-medium textcolor1 mb-6 leading-tight heading2"
            initial={{ opacity: 0, y: 20 }}
            animate={
              sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Exceptional plumbing
            <br />
            expertise for your home.
          </motion.h2>

          <motion.p
            className="textcolor3 para1 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={
              sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Aliquam pellentesque quam aenean bibendum mollis per. Duis non
            rhoncus vulputate maximus enim ornare. Diam eu id rutrum lobortis
            netus neque integer venenatis letius libero a.
          </motion.p>

          <div className="space-y-6">
            <ServiceFeature
              icon={SlLayers}
              title="High-Quality Workmanship Guarantee"
              description="Auctor elementum etiam congue gravida posuere nostra inceptos scelerisque mus consequat imperdiet."
              delay={0.3}
            />

            <ServiceFeature
              icon={RxSketchLogo}
              title="Comprehensive Plumbing Solutions"
              description="Auctor elementum etiam congue gravida posuere nostra inceptos scelerisque mus consequat imperdiet."
              delay={0.4}
            />

            <ServiceFeature
              icon={RiBarChart2Line}
              title="Customer Satisfaction is Our Top Priority"
              description="Auctor elementum etiam congue gravida posuere nostra inceptos scelerisque mus consequat imperdiet."
              delay={0.5}
            />
          </div>
        </div>

        {/* Right Column - Images */}
        <motion.div
          className="relative h-full"
          initial={{ opacity: 0, x: 30 }}
          animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Top image */}
            <div className="absolute top-0 left-20 w-4/5 md:w-5/5 h-4/5 bg-gray-200 overflow-hidden">
              <picture>
                <source
                  srcSet={plumberavif2}
                  type="image/avif"
                  className="w-full h-full object-cover"
                />
                <source
                  srcSet={plumber2}
                  type="image/webp"
                  className="w-full h-full object-cover"
                />

                <img
                  src={plumber2}
                  alt="Plumber working under sink"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>
            </div>

            {/* Bottom image */}
            <div className="absolute bottom-10 md:bottom-20 left-0 w-3/5 md:w-3/5 h-2/5 bg-gray-200 overflow-hidden">
              <picture>
                <source
                  srcSet={plumberavif1}
                  type="image/avif"
                  className="w-full h-full object-cover"
                />
                <source
                  srcSet={plumber1}
                  type="image/webp"
                  className="w-full h-full object-cover"
                />

                <img
                  src={plumber1}
                  alt="Plumber working under sink"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExceptionalSection;
