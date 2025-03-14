import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

import dropleticon from '../../assets/droplet.svg'

import logo from "../../assets/logo.png"

const PipeoFooter = () => {
    return (
        <footer className="relative color1 text-white">
            {/* Background image with overlay */}
            <div
                className="absolute inset-0 color1 opacity-20 z-0"
                style={{
                    backgroundImage: "url('/src/assets/img2.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    mixBlendMode: "overlay"
                }}
            ></div>

            <div className="relative z-10 container px-4 md:px-30 py-8 md:py-15">
                {/* Top section with logo and social media */}
                <div className="flex flex-row justify-between items-center mb-8 pt-5 border-b border-gray-500 pb-4 md:pb-6">
                    {/* Logo */}
                    <div>
                        <img src={logo} alt="Pipeo Logo" className="h-8 md:h-10" />
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-1 md:space-x-2">
                        <a href="#" className="color2 p-2 md:p-3 rounded-full hover:bg-green-400 transition-all transform hover:scale-105 md:hover:scale-120">
                            <FaFacebookF size={16} className="text-white group-hover:text-green-400 transition-colors" />
                        </a>
                        <a href="#" className="color2 p-2 md:p-3 rounded-full hover:bg-green-300 transition-all transform hover:scale-105 md:hover:scale-120">
                            <FaInstagram size={16} className="text-white group-hover:text-green-700 transition-colors" />
                        </a>
                        <a href="#" className="color2 p-2 md:p-3 rounded-full hover:bg-green-300 transition-all transform hover:scale-105 md:hover:scale-120">
                            <FaTwitter size={16} className="text-white group-hover:text-green-700 transition-colors" />
                        </a>
                        <a href="#" className="color2 p-2 md:p-3 rounded-full hover:bg-green-300 transition-all transform hover:scale-105 md:hover:scale-120">
                            <FaYoutube size={16} className="text-white group-hover:text-green-700 transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Main content area */}
                <div className="flex flex-wrap py-6 md:py-8">
                    {/* Services Column */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0 pr-0 md:pr-4">
                        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Services</h3>
                        <ul className="space-y-2">
                            {['Pipe Installation', 'Drain Cleaning', 'Sewer Inspection', 'Toilet Repair', 'Faucet Repair', 'Plumbing Remodels'].map((service, index) => (
                                <li key={`service-${index}`}>
                                    <a href="#" className="flex items-center hover:color2 transition-colors para1">
                                        {/* <span className="text-green-500 mr-2">

                                            <svg className="w-3 h-3 md:w-4 md:h-4 fill-current" viewBox="0 0 20 20">
                                                <path d="src\assets\droplet.svg"></path>
                                            </svg>
                                        </span> */}
                                        <span className="text-green-500 mr-2">
                                            <img src={dropleticon} alt="Droplet" className="w-4 h-4 md:w-5 md:h-5" />
                                        </span>
                                        <span className="text-sm md:text-base">{service}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support and Company Columns side by side on mobile */}
                    <div className="flex flex-row w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0">
                        {/* Support Column */}
                        <div className="w-1/2 pr-2 md:pr-4">
                            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Support</h3>
                            <ul className="space-y-2">
                                {['Help Center', 'Ticket Support', 'Customer Services', 'Sales Support', 'Contact us'].map((support, index) => (
                                    <li key={`support-${index}`}>
                                        <a href="#" className="flex items-center hover:text-green-500 transition-colors para1">
                                        <span className="text-green-500 mr-2">
                                            <img src={dropleticon} alt="Droplet" className="w-4 h-4 md:w-5 md:h-5" />
                                        </span>
                                            <span className="text-sm md:text-base">{support}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div className="w-1/2 pl-2 md:pl-8">
                            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Company</h3>
                            <ul className="space-y-2">
                                {['About us', 'Leadership', 'Careers', 'Article & News', 'Legal Notices'].map((company, index) => (
                                    <li key={`company-${index}`}>
                                        <a href="#" className="flex items-center hover:text-green-500 transition-colors para1">
                                        <span className="text-green-500 mr-2">
                                            <img src={dropleticon} alt="Droplet" className="w-4 h-4 md:w-5 md:h-5" />
                                        </span>
                                            <span className="text-sm md:text-base">{company}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="w-full sm:w-1/2 md:w-1/3 gradient2 flex flex-col justify-center p-6 md:p-8 md:ml-16">
                        <div>
                            <h3 className="text-lg md:text-xl mb-2 para1 text-white">Sign up our newsletter to get update <br /> information, news and free insight.</h3>
                        </div>
                        <div className="flex mt-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="px-4 text-gray-700 border border-gray-300 bg-white focus:outline-none"
                            />
                            <button className="color2 px-4 md:px-8 py-2 hover:bg-green-700 transition-colors flex items-center cursor-pointer">
                                <FaEnvelope size={25} className=" text-white pr-2 " />
                                <span className="text-sm md:text-base text-white">Sign up</span>

                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer bottom */}
                <div className="border-t border-gray-500 mt-6 md:mt-8 pt-4 md:pt-6 flex flex-col items-center md:flex-row md:justify-between">
                    <div className="mb-3 md:mb-0 text-xs md:text-sm text-center md:text-left">
                        Copyright © 2025 Pipeo, All rights reserved. Powered by MoxCreative.
                    </div>
                    <div className="flex space-x-2 md:space-x-4 text-xs md:text-sm">
                        <a href="#" className="hover:text-green-400 transition-colors">Terms of services</a>
                        <span className='dot'>•</span>
                        <a href="#" className="hover:text-green-400 transition-colors">Privacy policy</a>
                        <span className='dot'>•</span>
                        <a href="#" className="hover:text-green-400 transition-colors">Cookie policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default PipeoFooter;