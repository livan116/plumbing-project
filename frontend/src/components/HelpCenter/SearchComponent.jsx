import React, { useState } from 'react';
import img from '../../assets/homepage/img1.webp'

const SearchComponent = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="w-full min-h-[200px] color1 flex flex-col items-center justify-center p-4 relative">
            {/* Decorative element */}
            <img
                src={img}
                alt="Decorative element"
                className="absolute h-full w-full left-0 opacity-30 top-0"
            />

            {/* Hero Title */}
            <h1 className="text-4xl heading1 md:text-5xl lg:text-6xl text-white font-light tracking-wider mb-8 mt-4">
                Hi, how can we help?
            </h1>

            {/* Search Form */}
            <div className="w-full max-w-lg mx-auto">
                <div className="flex heading3">
                    <button
                        id="dropdown-button"
                        onClick={toggleDropdown}
                        className="hidden md:inline-flex shrink-0 z-10 items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 "
                        type="button"
                    >
                        All categories{" "}
                        <svg
                            className="w-2.5 h-2.5 ms-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute z-10 heading3 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 mt-12">
                            <ul className="py-2 text-sm text-gray-700">
                                <li>
                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">
                                        Category 1
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">
                                        Category 2
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">
                                        Category 3
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">
                                        Category 4
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Search Input */}
                    <div className="relative w-full">
                        <input
                            type="search"
                            id="search-dropdown"
                            className="block p-2.5 w-full heading3 z-20 text-sm text-gray-900 bg-gray-50 rounded-lg md:rounded-s-none md:rounded-e-lg border border-gray-300 "
                            placeholder="Search"
                            required
                        />
                        <button
                            type="submit"
                            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800  "
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only heading3">Search</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchComponent;