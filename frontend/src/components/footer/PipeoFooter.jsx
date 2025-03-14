import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

import dropleticon from '../../assets/droplet.svg'

import logo from "../../assets/logo.png"

const PipeoFooter = () => {
    return (
        <footer className="relative color1 text-white md:px-10">
            {/* Background Overlay */}
            <div
                className="absolute inset-0 opacity-20 z-0"
                style={{
                    backgroundImage: "url('/src/assets/img2.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    mixBlendMode: "overlay"
                }}
            ></div>

            <div className="lg:px-12 relative z-10 container px-4 md:px-4 py-8 md:py-12">
                {/* Top Section */}
                <div className="flex flex-wrap items-center md:flex-row justify-between mb-8 border-b border-gray-500 pb-4 md:pb-6">
                    {/* Logo */}
                    <img src={logo} alt="Pipeo Logo" className="h-8 md:h-10" />

                    {/* Social Media Icons */}
                    <div className="flex space-x-3 mt-4 md:mt-0">
                        {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, index) => (
                            <a key={index} href="#" className="color2 p-2 md:p-3 rounded-full hover:bg-green-400 transition transform hover:scale-105">
                                <Icon size={16} className="text-white" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-wrap md:justify-between md:flex-row py-6 md:py-8">
                    {/* Services Column */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0 pr-0 md:pr-6">
                        <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">Services</h3>
                        <ul className="space-y-2">
                            {['Pipe Installation', 'Drain Cleaning', 'Sewer Inspection', 'Toilet Repair', 'Faucet Repair', 'Plumbing Remodels'].map((service, index) => (
                                <li key={index} className="flex items-center hover:text-green-400 transition">
                                    <img src={dropleticon} alt="Droplet" className="w-4 h-4 mr-2" />
                                    <span className="text-sm md:text-base cursor-pointer">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support & Company Section */}
                    <div className="w-full lg:w-1/3 md:w-1/2 flex md:flex-col md:flex-row space-y-6 md:space-y-0">
                        {/* Support Column */}
                        <div className="w-full md:w-1/2 pr-2 md:pr-6">
                            <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">Support</h3>
                            <ul className="space-y-2">
                                {['Help Center', 'Ticket Support', 'Customer Services', 'Sales Support', 'Contact us'].map((support, index) => (
                                    <li key={index} className="flex items-center hover:text-green-400 transition">
                                        <img src={dropleticon} alt="Droplet" className="w-4 h-4 mr-2" />
                                        <span className="text-sm md:text-base cursor-pointer">{support}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div className="w-full md:w-1/2 pl-2 md:pl-6">
                            <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">Company</h3>
                            <ul className="space-y-2">
                                {['About us', 'Leadership', 'Careers', 'Article & News', 'Legal Notices'].map((company, index) => (
                                    <li key={index} className="flex items-center hover:text-green-400 transition">
                                        <img src={dropleticon} alt="Droplet" className="w-4 h-4 mr-2" />
                                        <span className="text-sm md:text-base cursor-pointer">{company}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="lg:p-14 lg:mt-0 md:w-full mt-6 lg:w-1/3 md:mt-5 flex flex-col justify-center gradient p-6 md:p-8">
                        <h3 className="lg:text-lg md:text-xl mb-4 para1 text-white">Sign up our newsletter to get update information, news and free insight.</h3>
                        {/* <p className="text-sm lg:text-lg md:text-xl mb-2 para1 text-white"></p> */}
                        <div className="flex w-full">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-1/2 px-4 py-2 text-gray-700 border border-gray-300 bg-white focus:outline-none"
                            />
                            <button className="w-1/2 px-4 py-2 bg-green-700 text-white flex items-center justify-center hover:bg-green-800 transition">
                                <FaEnvelope size={18} className="mr-2" /> Sign Up
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-500 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">
                    <p className="mb-3 md:mb-0 text-center md:text-left">
                        © 2025 Pipeo, All rights reserved. Powered by MoxCreative.
                    </p>
                    <div className="flex space-x-2 md:space-x-4">
                        {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((policy, index) => (
                            <a key={index} href="#" className="hover:text-green-400 transition">{policy}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default PipeoFooter;