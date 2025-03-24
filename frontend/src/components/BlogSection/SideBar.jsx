import React from "react";
import { Link } from "react-router-dom";
import { FaFolder } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import "../../styles/fonts.css";

const Sidebar = ({ categories }) => {
  return (
    <div className="space-y-8">
      {/* Categories Section */}
      <div className="bg-gray-100 shadow-md p-6">
        <h2 className="textcolor1 heading3 text-2xl mb-6">
          Popular Categories
        </h2>
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center">
              <div className="w-6 h-6 textcolor2 flex items-center justify-center rounded mr-3">
                <FaFolder />
              </div>
              <Link
                to={`/category/${category.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="textcolor3 hover:textcolor2 para1 transition-colors"
              >
                {category.name}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="gradient2 shadow-md p-6 text-white">
        <h2 className="text-xl heading3 mb-4">
          Sign up our newsletter to get update information, news and free
          insight.
        </h2>
        <form className="mt-6 space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-white px-4 py-3 textcolor3 focus:outline-none focus:ring-2"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white px-4 py-3 textcolor3 focus:outline-none focus:ring-2 "
            />
          </div>
          <button
            type="submit"
            className="w-full color2 text-white px-4 py-3 rounded font-semibold flex gap-2 items-center justify-center cursor-pointer hover:bg-[#97e94e]"
          >
            <GoMail />
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
