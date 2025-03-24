import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import Button from "./Button"; // Assuming Button component is in the same directory
import "../styles/fonts.css";

const PopUpSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Set a timeout to display the popup after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate form submission
      setIsSubmitted(true);
      // Hide popup after 2 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
  };

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  return (
    <>
      {/* Blur overlay when popup is visible */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed inset-0 backdrop-blur-md bg-white/30 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside popup
            >
              {/* Close button */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={handleClose}
                  className="text-gray-500 hover:text-gray-800 transition-colors p-1"
                  aria-label="Close popup"
                >
                  <IoClose size={24} />
                </button>
              </div>

              {/* Popup content */}
              <div className="p-6 md:p-8">
                {!isSubmitted ? (
                  <>
                    <div className="mb-6 text-center">
                      <div className="inline-block p-3 rounded-full bg-green-100 mb-4">
                        <svg
                          className="w-8 h-8 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="heading1 text-2xl font-bold text-gray-800 mb-2">
                        Subscribe to Our Newsletter
                      </h3>
                      <p className="para1 text-gray-600 mb-4">
                        Get the latest updates, news and special offers sent
                        directly to your inbox.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="flex justify-center">
                        <Button
                          text="Subscribe Now"
                          variant="primary"
                          icon="arrow"
                          onClick={handleSubmit}
                          className="w-full"
                          delay={0.1}
                        />
                      </div>
                    </form>

                    <p className="para1 text-xs text-gray-500 mt-4 text-center">
                      By subscribing, you agree to our Privacy Policy and
                      consent to receive updates from our company.
                    </p>
                  </>
                ) : (
                  <div className="py-8 text-center">
                    <div className="inline-block p-3 rounded-full bg-green-100 mb-4">
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="heading1 text-2xl font-bold text-gray-800 mb-2">
                      Thank You!
                    </h3>
                    <p className="para1 text-gray-600">
                      You've successfully subscribed to our newsletter.
                    </p>
                  </div>
                )}
              </div>

              {/* Optional decorative element */}
              <div className="h-2 gradient2"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PopUpSection;
