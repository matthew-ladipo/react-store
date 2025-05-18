import React, { useState } from "react";
import img from "../images/DUSN8058.JPG";
import bg from "../images/wmremove-transformed.jpeg";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Ri24HoursLine } from "react-icons/ri";
import { MdOutlineDownloading, MdPayment } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../images/f5e884102732761.5f3d3d9493dd6.jpg";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  const service = [
    {
      id: 1,
      des: "Free Shipping",
      name: "When you spend $80 or more",
      logo: <FaShippingFast />,
    },
    {
      id: 2,
      des: "Available 24/7",
      name: "Need help? Contact us anytime",
      logo: <Ri24HoursLine />,
    },
    {
      id: 3,
      des: "Satisfied or Return",
      name: "Easy 30-day return policy",
      logo: <MdOutlineDownloading />,
    },
    {
      id: 4,
      des: "100% Secure Payments",
      name: "Visa, Mastercard, Stripe, PayPal",
      logo: <MdPayment />,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 pt-3 h-[15vh] text-gray-200 font-serif shadow-lg">
        <div className="flex justify-between items-center px-6 md:px-16 py-2">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-[90px] md:w-[110px] h-auto rounded-lg shadow-md border-2 border-gray-700"
            />
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-10 text-lg font-medium">
            <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <Link to="/men" className="hover:text-yellow-400 transition-colors">Men</Link>
            <Link to="/women" className="hover:text-yellow-400 transition-colors">Women</Link>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-yellow-400 focus:outline-none">
                Others <IoIosArrowDown />
              </button>
              <div className="absolute right-0 top-8 bg-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 min-w-[140px]">
                <Link
                  to="/jewelries"
                  className="block px-5 py-2 hover:bg-gray-700 rounded-t"
                >
                  Jewelry
                </Link>
                <Link
                  to="/electronics"
                  className="block px-5 py-2 hover:bg-gray-700 rounded-b"
                >
                  Electronics
                </Link>
              </div>
            </div>
          </nav>

          {/* Cart and Profile */}
          <div className="flex items-center space-x-8 text-xl">
            <nav className="hidden md:flex items-center space-x-8 text-base">
              <Link to="/about" className="hover:text-yellow-400 transition-colors">About</Link>
              <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link>
            </nav>
            <Link to="/cart" className="relative hover:text-yellow-400 transition-colors">
              <FaCartArrowDown className="text-2xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5 shadow">
                  {cartCount}
                </span>
              )}
            </Link>
            <div className="relative group">
              <CgProfile className="text-2xl cursor-pointer hover:text-yellow-400 transition-colors" />
              <button className="absolute right-0 top-8 bg-gray-800 text-white py-1 px-6 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Logout
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleDropdown} className="text-3xl text-yellow-400 focus:outline-none">
              <IoIosArrowDown />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-gray-900 text-white text-center shadow-lg z-20">
          <Link to="/" className="block py-3 border-b border-gray-700 hover:bg-gray-800">Home</Link>
          <Link to="/men" className="block py-3 border-b border-gray-700 hover:bg-gray-800">Men</Link>
          <Link to="/women" className="block py-3 border-b border-gray-700 hover:bg-gray-800">Women</Link>
          <Link to="/jewelries" className="block py-3 border-b border-gray-700 hover:bg-gray-800">Jewelry</Link>
          <Link to="/electronics" className="block py-3 border-b border-gray-700 hover:bg-gray-800">Electronics</Link>
          <Link to="/about" className="block py-3 border-b border-gray-700 hover:bg-gray-800">About</Link>
          <Link to="/contact" className="block py-3 hover:bg-gray-800">Contact Us</Link>
        </nav>
      )}
    </>
  );
};

export default Header;
