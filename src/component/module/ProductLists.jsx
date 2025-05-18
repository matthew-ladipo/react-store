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
        "Dolores porro laboriosam molestias est quo. Et et eos. Ab error modi labore sed eaque est. Quaerat aut est fugiat.",
      name: "Jack Hallow",
      logo: (
        <CgProfile className="stroke-slate-200 shrink-0 text-[30px] text-gray-500" />
      ),
    },
    {
      id: 2,
      des:
        "Dolorem et cumque consequuntur consequuntur cumque eligendi voluptate. Tempore accusamus tempore consectetur dolor aliquid.",
      name: "Justin Biber",
      logo: (
        <CgProfile className="stroke-slate-200 shrink-0 text-[30px] text-gray-500" />
      ),
    },
    {
      id: 3,
      des:
        "Et eum neque ipsum quaerat ratione qui dolore eos. Numquam quo vel amet expedita eius facere minima. Dolor et saepe consequuntur.",
      name: "Travis Scout",
      logo: (
        <CgProfile className="stroke-slate-200 shrink-0 text-[30px] text-gray-500" />
      ),
    },
    {
      id: 4,
      des:
        "Itaque dicta rerum aliquam sit corporis iste omnis. Officia veritatis vel labore et dolor iste velit distinctio.",
      name: "LiL Babby",
      logo: (
        <CgProfile className="stroke-slate-200 shrink-0 text-[30px] text-gray-500" />
      ),
    },
    {
      id: 5,
      des:
        "In saepe veniam. Rerum excepturi dolor voluptatibus asperiores ad ut. Veniam molestiae tenetur velit voluptatum.",
      name: "Shalli Poppi",
      logo: (
        <CgProfile className="stroke-slate-200 shrink-0 text-[30px] text-gray-500" />
      ),
    },
    {
      id: 6,
      des: "Saepe doloribus deserunt in. At beatae neque pariatur harum vel.",
      name: "Tiwa Savage",
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
        className="relative bg-cover bg-no-repeat text-white min-h-[60vh] md:min-h-[85vh] py-8 px-4 md:py-12 md:pl-16 flex items-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/60 to-black/80 z-0 rounded-lg" />
        <div className="relative z-10 bg-gray-900 bg-opacity-80 p-6 md:p-10 max-w-full md:max-w-[45%] rounded-lg text-center md:text-left shadow-2xl backdrop-blur-sm">
          <p className="text-[28px] md:text-[44px] font-extrabold leading-snug md:leading-tight drop-shadow-lg">
            The best home entertainment system is here
          </p>
          <h3 className="mt-4 text-[15px] md:text-[18px] text-blue-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            accusamus eius, esse doloribus obcaecati nisi voluptates suscipit.
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
            Products
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
          Electronics
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
      <div className="bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 pt-8">
        <h2 className="text-3xl text-center font-extrabold my-8 text-blue-900 tracking-tight">
          What is everyone saying?
        </h2>
        <section className="container w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12">
          {comments.map((comment, index) => (
            <div
              key={comment.id}
              className="cursor-pointer overflow-hidden relative transition-all duration-500 hover:-translate-y-2 w-full h-48 bg-white rounded-2xl shadow-xl flex flex-row items-center justify-evenly gap-3 p-2 px-5 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-blue-400"
            >
              <div className="animate-bounce-slow">{comment.logo}</div>
              <div>
                <span className="font-bold text-blue-900">{comment.name}</span>
                <p className="line-clamp-3 font-[300] text-[18px] text-gray-700">{comment.des}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Marquee Section */}
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
