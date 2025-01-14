import React, { useState } from "react";
import img from "../images/DUSN8058.JPG"
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

const Header = ({cartCount}) => {
  const service = [
    {
      id: 1,
      des: "free shipping",
      name: " When you spend $80 or more",
      logo: <FaShippingFast />,
    },
    {
      id: 2,
      des: "We are available 24/7",
      name: " Need help? contact us anytime",
      logo: <Ri24HoursLine />,
    },
    {
      id: 3,
      des: "Satisfied or return",
      name: " Easy 30-day return policy",
      logo: <MdOutlineDownloading />,
    },
    {
      id: 4,
      des: "100% secure payments",
      name: " Visa, Mastercard, Stripe, PayPal",
      logo: <MdPayment />,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className=" bg-cover bg-no-repeat pt-3 h-[15vh] bg-black "
        
      >
        <div className="flex text-gray-500 font-bold justify-between items-center px-10 py-1 ">
          <div
            className="font-serif 
        text-gray-500"
          >
            <img
              src={logo}
              alt="logo"
              className="w-[100px] h-[60px] text-gray-500"
            />
          </div>
          <ul className="font-serif text-gray-500 max-md:hidden   flex items-center space-x-10">
            <Link to={"/"} className=" hover:text-gray-200 py-1 px-1 rounded">Home</Link>
            <Link to={"/men"} className=" hover:text-gray-200 py-1 px-1 rounded">Men</Link>
            <Link to={"/women"} className=" hover:text-gray-200 py-1 px-1 rounded">Women</Link>
            <button
              onClick={toggleDropdown}
              className=" focus:outline-none flex items-center gap-2"
            >
              Others
              <IoIosArrowDown className="text-[20px]" />
            </button>
                {isOpen && (
             <div className="absolute right-[390px] top-16 mt-2 w-48 text-white bg-gray-600 z-10">
            <Link
              to={"/jeweries"}
              className="block px-4 py-2 text-gray-200 "
            >
              jewelry
            </Link>
            <Link
              to={"/electronics"}
              className="block px-4 py-2 text-gray-200 "
            >
              electronics
            </Link>
           
          </div>
        )}
          </ul>
          <div className="flex items-center gap-6 text-[25px] ">
            <ul className="flex items-center space-x-10 text-[17px] font-serif ">
              <Link to={"/about"} className=" hover:text-gray-200 py-1 px-1 rounded">About</Link>
              <Link to={"/contact"} className=" hover:text-gray-200 py-1 px-1 rounded">
                Contac Us
              </Link>
            </ul>
            <Link to={"/cart"}>
              <section className="absolute text-gray-200 text-[14px] ml-5 top-8 rounded-full ">
                {cartCount}
              </section>
              <FaCartArrowDown />
            </Link>
            <CgProfile />
          </div>
          {/* <div class="flex h-[34px] text-[14px] text-white/60 w-[240px] items-center bg-[#09090b] border border-white/10 rounded-lg focus-within:ring-2 focus-within:ring-gray-700 focus-within:ring-offset-2 focus-within:ring-offset-[#09090b] transition-all duration-150 ease-in-out">
          <input
            placeholder="search"
            type="text"
            name="text"
            class="bg-transparent text-[#f4f4f5] px-3 py-1 rounded-l-lg focus:outline-none w-full"
          />
          <IoMdSearch />
        </div> */}
        </div>

        
      </div>
      
    </>
  );
};

export default Header;
