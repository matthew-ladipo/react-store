import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10 px-4 md:px-16 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold text-white tracking-wide mb-1 flex items-center justify-center md:justify-start gap-2">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            &copy; 2025 Skipline
          </p>
          <p className="text-xs text-gray-400">All Rights Reserved</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row gap-2 md:gap-8 text-sm text-center md:text-left">
          <li>
            <a
              href="#"
              className="hover:text-blue-400 transition duration-300 underline-offset-4 hover:underline"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-400 transition duration-300 underline-offset-4 hover:underline"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-400 transition duration-300 underline-offset-4 hover:underline"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 md:space-x-6 justify-center">
          <a
            href="#"
            className="group relative"
            aria-label="Facebook"
          >
            <CiFacebook className="w-7 h-7 text-gray-400 group-hover:text-blue-500 transition duration-300" />
            <span className="absolute left-1/2 -bottom-7 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-gray-800 px-2 py-1 rounded shadow transition">Facebook</span>
          </a>
          <a
            href="#"
            className="group relative"
            aria-label="X (formerly Twitter)"
          >
            <FaXTwitter className="w-7 h-7 text-gray-400 group-hover:text-blue-400 transition duration-300" />
            <span className="absolute left-1/2 -bottom-7 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-gray-800 px-2 py-1 rounded shadow transition">X</span>
          </a>
          <a
            href="#"
            className="group relative"
            aria-label="GitHub"
          >
            <FaGithub className="w-7 h-7 text-gray-400 group-hover:text-white transition duration-300" />
            <span className="absolute left-1/2 -bottom-7 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-gray-800 px-2 py-1 rounded shadow transition">GitHub</span>
          </a>
          <a
            href="#"
            className="group relative"
            aria-label="Instagram"
          >
            <FaInstagram className="w-7 h-7 text-gray-400 group-hover:text-pink-400 transition duration-300" />
            <span className="absolute left-1/2 -bottom-7 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-gray-800 px-2 py-1 rounded shadow transition">Instagram</span>
          </a>
        </div>
      </div>
      {/* Decorative Divider */}
      <div className="mt-8 border-t border-gray-700 opacity-60"></div>
      {/* Newsletter Signup */}
      <div className="container mx-auto mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400 mb-2 md:mb-0">Subscribe to our newsletter for updates:</p>
        <form className="flex gap-2 w-full md:w-auto">
          <input
            type="email"
            placeholder="Your email"
            className="px-3 py-2 rounded-l bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-r bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
