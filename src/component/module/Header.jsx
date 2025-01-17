import React, { useState, useEffect } from "react";
import img from "../images/DUSN8058.JPG";
import bg from "../images/wmremove-transformed.jpeg";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdArrowRightAlt } from "react-icons/md";
import { FaRegHandPointRight } from "react-icons/fa6";
import { Ri24HoursLine } from "react-icons/ri";
import { MdOutlineDownloading } from "react-icons/md";
import { MdPayment } from "react-icons/md";
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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-cover bg-no-repeat pt-3 h-[15vh] bg-black text-gray-500 font-serif">
        <div className="flex justify-between items-center px-5 md:px-10 py-1">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="logo"
              className="w-[80px] md:w-[100px] h-auto"
            />
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link to="/men" className="hover:text-gray-200">
              Men
            </Link>
            <Link to="/women" className="hover:text-gray-200">
              Women
            </Link>

            <div className="relative group">
              <p className="hover:text-gray-200 focus:outline-none flex items-center gap-1">
                Others
                <IoIosArrowDown />
              </p>
              <button className="absolute right-0 top-8 bg-gray-700 text-white   opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  to="/jewelries"
                  className="block px-4 py-2 hover:bg-gray-500"
                >
                  Jewelry
                </Link>
                <Link
                  to="/electronics"
                  className="block px-4 py-2 hover:bg-gray-500"
                >
                  Electronics
                </Link>
              </button>
            </div>
          </ul>

          {/* Cart and Profile */}
          <div className="flex items-center space-x-6 text-lg">
            <ul className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="hover:text-gray-200">
                About
              </Link>
              <Link to="/contact" className="hover:text-gray-200">
                Contact Us
              </Link>
            </ul>
            <Link to="/cart" className="relative">
              <FaCartArrowDown className="text-2xl" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
                  {cartCount}
                </span>
              )}
            </Link>
            <div className="relative group">
              <CgProfile className="text-2xl cursor-pointer" />
              <button className="absolute right-0 top-8 bg-gray-700 text-white py-1 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Logout
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleDropdown} className="text-2xl">
              <IoIosArrowDown />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white text-center">
          <Link to="/" className="block py-2 border-b hover:bg-gray-700">
            Home
          </Link>
          <Link to="/men" className="block py-2 border-b hover:bg-gray-700">
            Men
          </Link>
          <Link to="/women" className="block py-2 border-b hover:bg-gray-700">
            Women
          </Link>
          <Link
            to="/jewelries"
            className="block py-2 border-b hover:bg-gray-700"
          >
            Jewelry
          </Link>
          <Link
            to="/electronics"
            className="block py-2 border-b hover:bg-gray-700"
          >
            Electronics
          </Link>
          <Link to="/about" className="block py-2 border-b hover:bg-gray-700">
            About
          </Link>
          <Link to="/contact" className="block py-2 hover:bg-gray-700">
            Contact Us
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
