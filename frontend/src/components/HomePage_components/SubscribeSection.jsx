import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../Button";
import "../../styles/fonts.css";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && agreed) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setEmail("");
        setAgreed(false);
        // Reset success message after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
      }, 1000);
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center md:px-24">
        <motion.h2
          className="text-3xl md:text-4xl font-medium text-gray-800 mb-6 heading1"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          WANT TO GET UPDATES?
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base para1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          If you feel tired and stressed after a working day, we are happy to
          provide a wide range of relaxation massage therapy.
        </motion.p>

        <motion.form
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <div className="w-full flex flex-col md:flex-row gap-4 mb-4 items-center justify-center">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full md:w-2/3 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="w-full md:w-auto">
              <Button
                text={isSubmitting ? "Processing..." : "SUBSCRIBE"}
                variant="primary"
                onClick={handleSubmit}
                className={`w-full ${
                  !email || !agreed
                    ? "opacity-70 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                delay={0.1}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="privacy-policy"
              className="mr-2 h-4 w-4 text-pink-400 focus:ring-pink-300 border-gray-300 rounded"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              required
            />
            <label
              htmlFor="privacy-policy"
              className="textcolor3 text-sm para1"
            >
              I agree to the{" "}
              <a href="#" className="textcolor2 hover:underline">
                Privacy Policy
              </a>
              .
            </label>
          </div>

          {isSubmitted && (
            <motion.div
              className="text-green-500 mt-2 para1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Thank you for subscribing!
            </motion.div>
          )}
        </motion.form>

        <motion.div
          className=" opacity-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </section>
  );
};

export default SubscribeSection;
