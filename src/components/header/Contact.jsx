import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-8">
      {/* Page Title */}
      <h1 className="text-2xl md:text-4xl font-bold text-center py-6">Contact Us</h1>

      {/* Contact Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Phone */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl hover:scale-105 transition-all">
          <FaPhone className="text-indigo-600 dark:text-indigo-400 text-3xl mb-4" />
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <p className="text-sm sm:text-base">+91-9876543210</p>
        </div>

        {/* Email */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl hover:scale-105 transition-all">
          <FaEnvelope className="text-indigo-600 dark:text-indigo-400 text-3xl mb-4" />
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-sm sm:text-base">support@example.com</p>
        </div>

        {/* Location */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl hover:scale-105 transition-all">
          <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400 text-3xl mb-4" />
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <p className="text-sm sm:text-base">Mumbai, India</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto mt-12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              className="w-full p-3 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              rows="5"
              placeholder="Write your message..."
              required
              autoComplete= "off"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
