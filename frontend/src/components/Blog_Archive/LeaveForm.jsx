import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const LeaveForm = () => {
  const [formData, setFormData] = useState({
    comment: '',
    name: '',
    email: '',
    website: '',
    saveInfo: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-5xl py-4 md:p-6">
      {/* Share section - responsive with center alignment on small screens */}
      <div className="mb-8">
        <div className="flex flex-col items-center sm:flex-row sm:items-center gap-6 bg-gray p-6">
          <span className="textcolor1 font-bold mb-2 sm:mb-0 text-3xl heading3">Share this :</span>
          <div className="flex gap-2">
            <button className="w-14 h-14 rounded-full fb-bg flex items-center justify-center textcolor5 cursor-pointer">
              <FaFacebook size={24} />
            </button>
            <button className="w-14 h-14 rounded-full twitter-bg  flex items-center justify-center textcolor5 cursor-pointer">
              <FaTwitter size={24} />
            </button>
            <button className="w-14 h-14 rounded-full linkedin-bg flex items-center justify-center textcolor5 cursor-pointer">
              <FaLinkedinIn size={24} />
            </button>
            <button className="w-14 h-14 rounded-full watsapp-bg flex items-center justify-center textcolor5 cursor-pointer">
              <FaWhatsapp size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Author info with larger square profile picture */}
      <div className="flex items-start gap-4 mb-12">
        <img 
          src="https://placehold.co/80x80" 
          alt="Profile" 
          className="w-30 h-30 object-cover border-5 border-white"
        />
        <div>
          <h3 className="text-xl font-bold textcolor1 md:text-3xl mb-3 heading3">Natalie Stanley</h3>
          <p className="text-sm md:text-lg textcolor3 heading3">
            Hi, this is dummy biographical info for the design template kit moxcreative. If any questions do hesitate to send us a message on the profile page ThemeForest.
          </p>
        </div>
      </div>

      {/* Comment form */}
      <div>
        <h2 className="text-2xl md:text-5xl font-bold textcolor1 mb-4 md:mb-8 heading3">Leave a Reply</h2>
        <p className="text-sm md:text-xl textcolor3 mb-4 heading3">
          Your email address will not be published. Required fields are marked *
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="comment" className="block md:text-lg font-semibold textcolor1 mb-1 heading3">
              Comment <span className="text-red-500">*</span>
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={6}
              required
              value={formData.comment}
              onChange={handleChange}
              className="w-full  bg-gray p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block md:text-lg font-semibold textcolor1 mb-1 heading3">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray  p-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block md:text-lg font-semibold textcolor1 mb-1 heading3">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray p-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="website" className="block md:text-lg font-semibold textcolor1 mb-1 heading3">
              Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full bg-gray p-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="saveInfo"
              name="saveInfo"
              checked={formData.saveInfo}
              onChange={handleChange}
              className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="saveInfo" className="ml-2 block md:text-lg textcolor1 font-semibold heading3">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>

          <button
            type="submit"
            className="color2 textcolor5 md:text-lg heading3 font-semibold cursor-pointer py-2 px-4 transition duration-200"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeaveForm;