import React from "react";
import { FaBagShopping } from "react-icons/fa6";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="container py-16 bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen mx-auto">
      <h2 className="text-5xl font-extrabold text-center mb-14 text-blue-900 drop-shadow">
        Contact Us
      </h2>

      {/* Contact Details Section */}
      <div className="w-[95%] px-8 py-12 border-2 border-blue-200 bg-white/80 shadow-xl rounded-2xl mx-auto flex flex-col md:flex-row items-center justify-around gap-10 md:gap-0 mb-16">
        <div className="border-b-2 md:border-b-0 md:border-r-2 border-blue-100 pb-8 md:pb-0 md:pr-12 text-center md:text-left">
          <FaBagShopping className="my-6 text-4xl text-blue-700 mx-auto md:mx-0" />
          <p className="text-2xl font-serif font-bold text-blue-900">Expert Sales Service</p>
          <ul className="text-gray-700 mt-3 space-y-1">
            <li>123-456-7890</li>
            <li>Mon-Fri: 8 am - 5 pm</li>
            <li>Sat-Sun: 12 pm - 6 pm</li>
          </ul>
        </div>
        <div className="border-b-2 md:border-b-0 md:border-r-2 border-blue-100 pb-8 md:pb-0 md:pr-12 text-center md:text-left">
          <IoChatboxEllipses className="my-6 text-4xl text-blue-700 mx-auto md:mx-0" />
          <p className="text-2xl font-serif font-bold text-blue-900">Customer Service</p>
          <ul className="text-gray-700 mt-3 space-y-1">
            <li>123-456-7890</li>
            <li>Mon-Fri: 8 am - 5 pm</li>
            <li>Sat-Sun: 12 pm - 6 pm</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <FaShippingFast className="my-6 text-4xl text-blue-700 mx-auto md:mx-0" />
          <p className="text-2xl font-serif font-bold text-blue-900">
            Home Install & Delivery
          </p>
          <ul className="text-gray-700 mt-3 space-y-1">
            <li>123-456-7890</li>
            <li>Mon-Fri: 8 am - 5 pm</li>
            <li>Sat-Sun: 12 pm - 6 pm</li>
          </ul>
        </div>
      </div>

      {/* Contact and Social Links Section */}
      <section className="w-[95%] my-10 flex flex-col md:flex-row items-stretch justify-between border-2 border-blue-200 bg-white/90 shadow-lg rounded-2xl mx-auto">
        <div className="w-full md:w-1/2 px-12 py-12 space-y-12 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-3 text-blue-900">
              Have a Question? Contact Us.
            </h1>
            <p className="text-gray-700 mb-5">
              Reach out with any questions regarding your local store or corporate inquiries.
            </p>
            <span className="flex flex-col space-y-2">
              <a href="#" className="text-blue-700 hover:underline font-medium">
                Call 1-800-234-5678
              </a>
              <a href="#" className="text-blue-700 hover:underline font-medium">
                Email Customer Service
              </a>
            </span>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-3 text-blue-900">Investor & Suppliers</h1>
            <span className="flex flex-col space-y-2">
              <a href="#" className="text-blue-700 hover:underline font-medium">
                Email Investor Relations
              </a>
              <a href="#" className="text-blue-700 hover:underline font-medium">
                Apply to Become a Supplier
              </a>
            </span>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-3 text-blue-900">Keep in Touch</h1>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-700 transition">
                <CiFacebook className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700 transition">
                <FaXTwitter className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700 transition">
                <FaGithub className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700 transition">
                <FaInstagram className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="w-full md:w-1/2 bg-blue-50 shadow-md rounded-2xl p-8 max-w-lg mx-auto flex flex-col justify-center">
          <div className="mb-6">
            <label className="block text-blue-900 font-bold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="border border-blue-200 rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            />
          </div>

          <div className="mb-6">
            <label className="block text-blue-900 font-bold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="border border-blue-200 rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            />
          </div>

          <div className="mb-6">
            <label className="block text-blue-900 font-bold mb-2">Message</label>
            <textarea
              placeholder="Your message"
              className="border border-blue-200 rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              rows="5"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold text-lg shadow"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
