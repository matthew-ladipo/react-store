import React from "react";
import { FaBagShopping } from "react-icons/fa6";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="container py-10">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>

      {/* Contact Details Section */}
      <div className="w-[90%] px-5 py-10 border border-gray-300 rounded-lg mx-auto flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0">
        <div className="border-b-[1.5px] md:border-b-0 md:border-r-[1.5px] border-gray-300 pb-8 md:pb-0 md:pr-10 text-center md:text-left">
          <FaBagShopping className="my-5 text-3xl text-blue-800 mx-auto md:mx-0" />
          <p className="text-xl font-serif font-bold">Expert Sales Service</p>
          <ul className="text-gray-600 mt-2">
            <li>123-456-7890</li>
            <li>Mon-Fri: 8 am - 5 pm</li>
            <li>Sat-Sun: 12 pm - 6 pm</li>
          </ul>
        </div>
        <div className="border-b-[1.5px] md:border-b-0 md:border-r-[1.5px] border-gray-300 pb-8 md:pb-0 md:pr-10 text-center md:text-left">
          <IoChatboxEllipses className="my-5 text-3xl text-blue-800 mx-auto md:mx-0" />
          <p className="text-xl font-serif font-bold">Customer Service</p>
          <ul className="text-gray-600 mt-2">
            <li>123-456-7890</li>
            <li>Mon-Fri: 8 am - 5 pm</li>
            <li>Sat-Sun: 12 pm - 6 pm</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <FaShippingFast className="my-5 text-3xl text-blue-800 mx-auto md:mx-0" />
          <p className="text-xl font-serif font-bold">
            Home Install & Delivery
          </p>
          <ul className="text-gray-600 mt-2">
            <li>123-456-7890</li>
            <li>Mon-Fri: 8 am - 5 pm</li>
            <li>Sat-Sun: 12 pm - 6 pm</li>
          </ul>
        </div>
      </div>

      {/* Contact and Social Links Section */}
      <section className="w-[90%] my-20 flex flex-col md:flex-row items-center justify-between border border-gray-300 rounded-lg mx-auto space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2 px-10 py-10 space-y-10">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Have a Question? Contact Us.
            </h1>
            <p className="text-gray-600 mb-4">
              Reach out with any questions regarding your local store or corporate inquiries.
            </p>
            <span className="flex flex-col space-y-2">
              <a href="#" className="text-blue-600 hover:underline">
                Call 1-800-234-5678
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Email Customer Service
              </a>
            </span>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-2">Investor & Suppliers</h1>
            <span className="flex flex-col space-y-2">
              <a href="#" className="text-blue-600 hover:underline">
                Email Investor Relations
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Apply to Become a Supplier
              </a>
            </span>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-2">Keep in Touch</h1>
            <div className="flex space-x-4 md:space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <CiFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              placeholder="Your message"
              className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
