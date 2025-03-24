import React from "react";
import { Link } from "react-router-dom";
import "../../styles/fonts.css";

const ServiceCard = ({ title, para, image, date, comments }) => {
  // Create a URL-friendly slug from the title
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-");
  };

  const slug = createSlug(title);

  return (
    <Link
      to={`/blog/${slug}`}
      className="block transition-transform hover:scale-[1.02] duration-300"
    >
      <div className="bg-white overflow-hidden shadow-md h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute top-0 right-0 color2 text-white px-3 py-1 text-sm font-medium heading3">
            {title.split(":")[0]}
          </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-3 textcolor1 heading3 line-clamp-2">
            {title.split(":")[1] || title}
          </h3>
          <p className="textcolor3 para1 mb-4 text-sm line-clamp-3">{para}</p>
          <div className="mt-auto flex items-center text-sm text-gray-500">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{comments}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
