import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import bg from "../images/wmremove-transformed.jpeg";
import Women from "../products/Women";
import { FaShippingFast } from "react-icons/fa";
import { Ri24HoursLine } from "react-icons/ri";
import { MdOutlineDownloading } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Marquee from "react-fast-marquee";
import Electronics from "../products/Electronics";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ProductLists = () => {
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

  const comments = [
    {
      id: 1,
      des:
        "Absolutely love the quality and variety of products! My order arrived quickly and the customer service was fantastic. Highly recommend this store to anyone looking for great deals.",
      name: "Emily Carter",
      logo: (
        <CgProfile className="stroke-slate-200 shrink-0 text-[30px] text-gray-500" />
      ),
    },
    {
      id: 2,
      des:
        "The electronics section is top-notch. I found exactly what I needed for my home office, and the checkout process was seamless. Will definitely shop here again.",
      name: "Michael Lee",
      logo: (
        <CgProfile className="stroke-slate-200 shrink-0 text-[30px] text-gray-500" />
      ),
    },
    {
      id: 3,
      des:
        "I was impressed by the fast shipping and secure packaging. The product matched the description perfectly and works great. Thank you for the excellent service!",
      name: "Sophia Martinez",
      logo: (
        <CgProfile className="stroke-slate-200 shrink-0 text-[30px] text-gray-500" />
      ),
    },
    {
      id: 4,
      des:
        "Customer support was very responsive and helpful when I had a question about my order. It's rare to find such dedication these days. Five stars!",
      name: "David Kim",
      logo: (
        <CgProfile className="stroke-slate-200 shrink-0 text-[30px] text-gray-500" />
      ),
    },
    {
      id: 5,
      des:
        "The women's fashion collection is amazing! I received so many compliments on my new outfit. The fit and quality exceeded my expectations.",
      name: "Jessica Brown",
      logo: (
        <CgProfile className="stroke-slate-200 shrink-0 text-[30px] text-gray-500" />
      ),
    },
    {
      id: 6,
      des:
        "Easy returns and hassle-free refunds made my shopping experience stress-free. I appreciate the transparency and honesty of this store.",
      name: "Ahmed Hassan",
      logo: (
        <CgProfile className="stroke-slate-200 shrink-0 text-[30px] text-gray-500" />
      ),
    },
  ];

  const [device, setDevice] = useState([]); // Keep device as an array
  const [current, setCurrent] = useState(0);

  const PrevSlide = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? device.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = current === device.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  };

  const fetchElectronicsProducts = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/electronics"
      );
      setDevice(response.data); // Set the entire array of products
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchElectronicsProducts();
  }, []);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(autoSlide); // Clean up the interval on component unmount
  }, [current, device]);

  const currentProduct = device[current];

  const slideStyle = {
    transform: `translateX(-${current * 100}%)`,
    transition: "transform 0.5s ease-in-out",
  };

  const images = [
    "IMG_8603.JPG",
    "IMG_8603.JPG",
    "IMG_8605.PNG",
    "IMG_8606.PNG",
    "IMG_8607.JPG",
    "IMG_8608.JPG",
    "IMG_8609.JPG",
    "IMG_8610.PNG",
    "IMG_8611.PNG",
    "IMG_8612.JPG",
    "IMG_8613.JPG",
  ];

  const [products, setProducts] = useState([]);
  const [visibleItems, setVisibleItems] = useState(8);
  const [visible, setVisible] = useState(12);
  const [tech, setTech] = useState(1);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
    
        className="relative bg-cover bg-no-repeat text-white min-h-[60vh] md:min-h-[85vh] py-8 px-4 md:py-12 md:pl-16 flex items-center font-custom"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/60 to-black/80 z-0 rounded-lg" />
        <div className="relative z-10 bg-gray-900 bg-opacity-80 p-6 md:p-10 max-w-full md:max-w-[45%] rounded-lg text-center md:text-left shadow-2xl backdrop-blur-sm">
          <p className="text-[28px] md:text-[44px] font-extrabold leading-snug md:leading-tight drop-shadow-lg">
            Discover the Ultimate Shopping Experience
          </p>
          <h3 className="mt-4 text-[15px] md:text-[18px] text-blue-100">
            Explore top-quality electronics, trending fashion, and unbeatable deals. Fast shipping, secure payments, and 24/7 support—everything you need for a seamless shopping journey.
          </h3>
          <button className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white rounded-full text-base md:text-lg font-semibold shadow-lg transition-all duration-300 animate-bounce">
            Shop Now
          </button>
        </div>
        {/* Decorative floating shapes */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-blue-400 bg-opacity-30 rounded-full blur-2xl animate-pulse z-0" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-pink-400 bg-opacity-20 rounded-full blur-2xl animate-pulse z-0" />
      </section>

      {/* Service Section */}
      <section className="container flex flex-wrap justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mx-auto -mt-12 space-y-4 md:space-y-0 md:space-x-6 py-8 rounded-xl shadow-2xl border border-blue-900/10">
        {service.map((serve, index) => (
          <div
            key={index}
            className="flex items-center gap-4 md:gap-6 px-6 py-4 text-white rounded-xl h-[13vh] w-full md:w-auto md:flex-1 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 hover:from-blue-700 hover:to-blue-900 transition-all shadow-lg border border-blue-900/20"
          >
            <span className="text-[32px] md:text-[38px] drop-shadow-lg animate-spin-slow">{serve.logo}</span>
            <div className="text-sm md:text-base leading-tight">
              <p className="font-bold">{serve.des}</p>
              <p>{serve.name}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Products Section */}
      <div className="bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200">
        <div className="container mx-auto py-16">
          <h2 className="text-3xl text-center font-extrabold mb-8 text-blue-900 tracking-tight">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-[90%] mx-auto gap-8">
            {products.slice(0, visibleItems).map((product, idx) => (
              <div className="hover:scale-105 transition-transform duration-300" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          {products.length > visibleItems && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setVisibleItems((prev) => prev + 4)}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded-full font-semibold shadow-lg transition-all"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Electronics Carousel */}
      <section
        className="container w-[90%] mx-auto py-16 overflow-hidden relative"
        id="electronics"
      >
        <h2 className="text-3xl text-center font-extrabold mb-8 text-indigo-900 tracking-tight">
          Latest Electronics
        </h2>
        {device.length > 0 && (
          <div className="p-8 relative">
            <button
              onClick={PrevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 hover:bg-blue-200 bg-white shadow text-2xl rounded-full p-2 text-blue-900 cursor-pointer z-10 transition-all"
              aria-label="Previous Slide"
            >
              <BsChevronCompactLeft size={30} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 hover:bg-blue-200 bg-white shadow text-2xl rounded-full p-2 text-blue-900 cursor-pointer z-10 transition-all"
              aria-label="Next Slide"
            >
              <BsChevronCompactRight size={30} />
            </button>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl duration-500 p-8 shadow-2xl border border-blue-900/10">
              <div className="flex flex-col md:flex-row items-center">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.title}
                  className="w-full md:w-1/3 object-contain rounded-xl bg-gradient-to-br from-blue-100 via-white to-blue-50 p-4 shadow"
                />

                <div className="md:ml-8 mt-6 md:mt-0 w-full">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {currentProduct.title}
                  </h2>

                  <p className="text-xl font-medium text-blue-700 mt-2">
                    ${currentProduct.price}
                  </p>

                  <p className="text-gray-600 mt-4 line-clamp-3">
                    {currentProduct.description}
                  </p>
                  <p className="text-gray-500 mt-4 text-sm">
                    {currentProduct.category}
                  </p>
                </div>
              </div>
              {/* Dots navigation */}
              <div className="flex justify-center mt-6 gap-2">
                {device.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`transition-all ${current === idx ? "text-blue-700 scale-125" : "text-gray-400"} text-3xl`}
                  >
                    <RxDotFilled />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Women Section */}
      <div className="bg-gradient-to-br from-pink-100 via-slate-100 to-pink-50 container mx-auto py-20 border-gray-200 rounded-2xl shadow-2xl my-8">
        <Women />
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-12 pb-16">
        <h2 className="text-4xl text-center font-extrabold mb-12 text-indigo-900 tracking-tight drop-shadow-lg">
          What Our Customers Say
        </h2>
        <section className="container w-[92%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-8">
          {comments.map((comment, index) => (
            <div
              key={comment.id}
              className="relative group overflow-hidden transition-all duration-400 hover:-translate-y-2 w-full h-56 bg-gradient-to-br from-white via-blue-100 to-blue-50 rounded-3xl shadow-2xl flex flex-row items-center justify-evenly gap-4 p-6 border border-blue-200 hover:border-indigo-400"
            >
              <div className="animate-bounce-slow text-indigo-700 group-hover:scale-110 transition-transform duration-300">
                {comment.logo}
              </div>
              <div>
                <span className="font-bold text-indigo-900 text-lg">{comment.name}</span>
                <p className="line-clamp-3 font-[300] text-[17px] text-gray-700 mt-2">{comment.des}</p>
              </div>
              <span className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-blue-400 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </section>
      </div>
      <Marquee pauseOnHover className="bg-white py-8 shadow-inner">
        {images.map((image, index) => (
          <div key={index} className="container py-4">
            <img className="h-32 mx-5 object-contain rounded-xl shadow-lg border border-blue-100" src={image} alt={image} />
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default ProductLists;
