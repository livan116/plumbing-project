import React, { useState, useEffect, useRef } from "react";
import { FaBriefcase, FaGlobeAmericas, FaStar, FaCoffee } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { SlBriefcase } from "react-icons/sl";
import { BsGlobe } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { LuCoffee } from "react-icons/lu";
import "../../styles/fonts.css"

const CountUp = ({ end, duration = 1000, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const countRef = useRef(null);
  const startTimeRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!inView) return;

    const startAnimation = () => {
      startTimeRef.current = Date.now();
      animate();
    };

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smoother animation
      const easeOutQuad = (t) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      const value = Math.floor(easedProgress * end);
      setCount(value);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const timeoutId = setTimeout(() => {
      startAnimation();
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [inView, end, duration, delay]);

  return <span ref={ref}>{count}</span>;
};

const StatCard = ({ icon: Icon, value, suffix = "", label, delay }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-row justify-center items-center gap-4">
        <Icon className="textcolor2 text-4xl mb-4" />
        <div className="">
          <div className="text-white text-5xl font-bold mb-2 flex items-center heading2">
            <CountUp end={value} delay={delay * 1000} />
            <span>{suffix}</span>
          </div>
          <div className="text-white uppercase tracking-wider text-sm font-medium heading1">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const RatingSection = () => {
  const stats = [
    {
      icon: SlBriefcase,
      value: 14,
      suffix: "K+",
      label: "Project Done",
      delay: 0,
    },
    {
      icon: BsGlobe,
      value: 84,
      suffix: "+",
      label: "Country Branch",
      delay: 0.2,
    },
    {
      icon: FaRegStar,
      value: 4.7,
      suffix: "",
      label: "Client Rating",
      delay: 0.4,
    },
    {
      icon: LuCoffee,
      value: 15,
      suffix: "+",
      label: "Years Experience",
      delay: 0.6,
    },
  ];

  return (
    <section className="color1 py-16 px-4 md:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
