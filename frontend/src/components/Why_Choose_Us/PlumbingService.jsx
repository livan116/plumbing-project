import React from 'react';
import { Diamond, Briefcase, Wrench, Coffee, Gem} from 'lucide-react';
import img1 from "../../assets/homepage/img1.webp"

const PlumbingService = () => {
    return (
        <div className="relative w-full min-h-screen color1 text-white mb-5">
            {/* Background pattern overlay */}
            <div className="absolute inset-0 color1 opacity-70 z-0">
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

                {/* Cards grid - added mx-8 for side margins */}
                <div className="grid md:px-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {/* Card 1 */}
                    <div className="color1 p-6 lg:py-10 rounded text-center transition-all duration-300 transform hover:-translate-y-5 hover:shadow-lg border-b-5 border-gray-500 bordercolor2 group md:w-full">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-17 md:h-17 iconcolor rounded-full flex items-center justify-center mx-auto mb-6">
                            <Gem className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 heading3">Fast and Reliable Service</h3>
                        <p className="text-blue-100 heading3">
                            Efficitur lobortis amet faucibus feugiat aptent convallis cubilia bibendum nostra nulla arcu
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="color1 p-6 rounded text-center transition-all duration-300 transform hover:-translate-y-5 hover:shadow-lg border-b-5 border-gray-500 bordercolor2 group">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-17 md:h-17 iconcolor rounded-full flex items-center justify-center mx-auto mb-6">
                            <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 heading3">Locally Owned and Operated</h3>
                        <p className="text-blue-100 heading3">
                            Efficitur lobortis amet faucibus feugiat aptent convallis cubilia bibendum nostra nulla arcu
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="color1 p-6 rounded text-center transition-all duration-300 transform hover:-translate-y-5 hover:shadow-lg border-b-5 border-gray-500 bordercolor2 group">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-17 md:h-17 iconcolor rounded-full flex items-center justify-center mx-auto mb-6">
                            <Wrench className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 heading3">Advanced Tools and Technology</h3>
                        <p className="text-blue-100 heading3">
                            Efficitur lobortis amet faucibus feugiat aptent convallis cubilia bibendum nostra nulla arcu
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="color1 p-6 rounded text-center transition-all duration-300 transform hover:-translate-y-5 hover:shadow-lg border-b-5 border-gray-500 bordercolor2 group">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-17 md:h-17 iconcolor rounded-full flex items-center justify-center mx-auto mb-6">
                            <Coffee className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 heading3">Comprehensive Plumbing Solutions</h3>
                        <p className="text-blue-100 heading3">
                            Efficitur lobortis amet faucibus feugiat aptent convallis cubilia bibendum nostra nulla arcu
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlumbingService;