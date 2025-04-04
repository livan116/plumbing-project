import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsEnvelope } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
import { IoCalendarOutline } from 'react-icons/io5';
import { FiPhone, FiChevronDown } from 'react-icons/fi';
import "../styles/fonts.css"
import logo from "../assets/logo2.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    homepage: false,
    services: false,
    pages: false
  });

  const toggleDropdown = (key) => {
    setDropdownOpen({
      ...dropdownOpen,
      [key]: !dropdownOpen[key]
    });
  };

  const navigate = useNavigate();

  return (
    <header className="w-full flex flex-col relative z-100">
      {/* Top Bar */}
      <div className="w-full gradient text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BsEnvelope className="hidden sm:block" />
            <span className="hidden sm:block">support@domain.tld</span>
            <FiPhone className="ml-4 hidden sm:block" />
            <span className="hidden sm:block">(888) 4000-2424</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-200">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-200">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-200">
              <FaTwitter />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-200">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img src={logo} alt="Pipea Logo" className="h-12" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button
                  className="flex items-center text-gray-700 hover:text-green-600 font-medium"
                  onClick={() => {
                    toggleDropdown("homepage");
                    navigate("/");
                  }}
                >
                  Homepage
                </button>
              </div>

              <Link
                to={"/about"}
                className="text-gray-700 hover:text-green-600 font-medium"
                // onClick={() => navigate("/about")}
              >
                About us
              </Link>

              <div className="relative group">
                <button
                  className="flex items-center text-gray-700 hover:text-green-600 font-medium"
                  onClick={() => {
                    toggleDropdown("services");
                    navigate("/services");
                  }}
                >
                  Services
                </button>
                {/* {dropdownOpen.services && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Service 1
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Service 2
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Service 3
                      </a>
                    </div>
                  </div>
                )} */}
              </div>

              <Link
                to={"/booking"}
                // onClick={() => navigate("/booking")}
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Booking
              </Link>
              <Link
                to={"/contact"}
                // onClick={() => navigate("/contact")}
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Contact us
              </Link>

              <div className="relative group">
                <button
                  className="flex items-center text-gray-700 hover:text-green-600 font-medium"
                  onClick={() => toggleDropdown("pages")}
                >
                  Pages
                  <FiChevronDown className="ml-1" />
                </button>
                {dropdownOpen.pages && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <div className="py-1">
                      <Link
                       to={"/blogs"}
                        // onClick={() => navigate("/blogs")}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Blogs
                      </Link>
                      <Link
                       to={"/schedulePage"}
                        // onClick={() => navigate("/schedulePage")}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        class schedule
                      </Link>
                      <Link
                        to={"/pricing"}
                        // onClick={() => navigate("/pricing")}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Pricing
                      </Link>

                      <Link
                       to={"/testimonial"}
                        // onClick={() => navigate("/testimonial")}
                        className="block px-4 py-2 text-gray-600 hover:text-green-600"
                      >
                        Testimonials
                      </Link>

                      <Link
                        to={"/faq"}
                        // onClick={() => navigate("/faq")}
                        className="block px-4 py-2 text-gray-600 hover:text-green-600"
                      >
                        FAQ
                      </Link>
                      <Link
                        to={"/error"}
                        // onClick={() => navigate("/error")}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        404 Page
                      </Link>
                      <Link
                       to={"/help"}
                        // onClick={() => navigate("/help")}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Help Center
                      </Link>
                      <Link

                        to={"/privacyPolicy"}
                        // onClick={() => navigate("/privacyPolicy")}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Privacy Policy
                      </Link>

                      <Link
                        to={"/refundPolicy"}
                        // onClick={() => navigate("/refundPolicy")}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Refund Page
                      </Link>

                      <Link
                        to={"/termsAndCondition"}
                        // onClick={() => navigate("/termsAndCondition")}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Terms And Conditions
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Book Now Button */}
            <div className="hidden lg:block">
              <Link
                to={'/booking'}
                // onClick={()=>navigate('/booking')}
                className="color2 hover:bg-green-700 text-white px-6 py-3 rounded flex items-center"
              >
                <IoCalendarOutline className="mr-2" /> Book Now!
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-4 py-4">
              <div className="border-b pb-2">
                <button
                  className="flex items-center justify-between w-full text-gray-700 font-medium"
                  onClick={() => {
                    toggleDropdown("homepage");
                    navigate("/");
                  }}
                >
                  Homepage
                </button>
                {/* {dropdownOpen.homepage && (
                  <div className="mt-2 pl-4 space-y-2">
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-green-600"
                    >
                      Home 1
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-green-600"
                    >
                      Home 2
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-green-600"
                    >
                      Home 3
                    </a>
                  </div>
                )} */}
              </div>

              <Link
                to={"/about"}
                className="text-gray-700 font-medium border-b pb-2"
                // onClick={() => navigate("/about")}
              >
                About us
              </Link>

              <div className="border-b pb-2">
                <button
                  className="flex items-center justify-between w-full text-gray-700 font-medium"
                  onClick={() => {
                    toggleDropdown("services");
                    navigate("/services");
                  }}
                >
                  Services
                </button>
                {/* {dropdownOpen.services && (
                  <div className="mt-2 pl-4 space-y-2">
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-green-600"
                    >
                      Service 1
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-green-600"
                    >
                      Service 2
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-green-600"
                    >
                      Service 3
                    </a>
                  </div>
                )} */}
              </div>

              <Link
                to={"/booking"}
                // onClick={() => navigate("/booking")}
                className="text-gray-700 font-medium border-b pb-2"
              >
                Booking
              </Link>
              <Link
                to={"/contact"}
                // onClick={() => navigate("/contact")}
                className="text-gray-700 font-medium border-b pb-2"
              >
                Contact us
              </Link>

              <div className="border-b pb-2">
                <button
                  className="flex items-center justify-between w-full text-gray-700 font-medium"
                  onClick={() => toggleDropdown("pages")}
                >
                  Pages
                  <FiChevronDown
                    className={`ml-1 transform ${
                      dropdownOpen.pages ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {dropdownOpen.pages && (
                  <div className="mt-2 pl-4 space-y-2">
                    <Link
                      to={"/blogs"}
                      // onClick={() => navigate("/blogs")}
                      className="block text-gray-600 hover:text-green-600"
                    >
                      blogs
                    </Link>
                    <Link
                      to={"/schedulePage"}
                      // onClick={() => navigate("/schedulePage")}
                      className="block text-gray-600 hover:text-green-600"
                    >
                      class schedule
                    </Link>
                    <Link
                      to={"/pricing"}
                      // onClick={() => navigate("/pricing")}
                      className="block text-gray-600 hover:text-green-600"
                    >
                      Pricing
                    </Link>
                    <Link
                      to={"/testimonials"}
                      // onClick={() => navigate("/testimonials")}
                      className="block text-gray-600 hover:text-green-600"
                    >
                      Testimonials
                    </Link>
                    <Link
                      to={"/error"}
                      // onClick={() => navigate("/error")}
                      className="block text-gray-600 hover:text-green-600"
                    >
                      404 Page
                    </Link>
                    <Link
                      to={"/help"}
                      // onClick={() => navigate("/help")}
                      className="block text-gray-600 hover:text-green-600 "
                    >
                      Help Center
                    </Link>

                    <Link
                      to={"/privacyPolicy"}
                      // onClick={() => navigate("/privacyPolicy")}
                      className="block text-gray-600 hover:text-green-600"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to={"/refundPolicy"}
                      // onClick={() => navigate("/refundPolicy")}
                      className="block text-gray-600 hover:text-green-600"
                    >
                      Refund Page
                    </Link>
                    <Link
                      to={"/termsAndCondition"}
                      // onClick={() => navigate("/termsAndCondition")}
                      className="block text-gray-600 hover:text-green-600"
                    >
                      Terms And Condition
                    </Link>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <Link
                  to={'/booking'}
                  className="color2 hover:bg-green-700 text-white px-4 py-2 rounded inline-flex items-center"
                >
                  <IoCalendarOutline className="mr-2" /> Book Now!
                </Link>
              </div>

              <div className="pt-4 flex items-center space-x-2 text-sm text-gray-600">
                <BsEnvelope />
                <span>support@domain.tld</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <FiPhone />
                <span>(888) 4000-2424</span>
              </div>
              <div className="pt-2 flex items-center space-x-6">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-600 hover:text-green-600"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-gray-600 hover:text-green-600"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-gray-600 hover:text-green-600"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="text-gray-600 hover:text-green-600"
                >
                  <FaYoutube />
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;