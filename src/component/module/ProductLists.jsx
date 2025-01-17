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
      <section
        className="bg-cover bg-no-repeat text-white h-[85vh] py-5 pl-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="bg-gray-900 bg-opacity-80 p-6 md:p-10 max-w-[95%] md:max-w-[45%] rounded-lg text-center md:text-left">
          <p className="text-[24px] md:text-[40px] font-bold leading-snug md:leading-tight">
            The best home entertainment system is here
          </p>
          <h3 className="mt-4 text-[14px] md:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            accusamus eius, esse doloribus obcaecati nisi voluptates suscipit.
          </h3>
          <h2 className="mt-6 text-blue-600 cursor-pointer text-base md:text-lg">
            Shop Now
          </h2>
        </div>
      </section>

      {/* Service Section */}
      <section className="container flex flex-wrap justify-center items- bg-gray-900 mx-auto -mt-12 space-y-4 md:space-y-0 md:space-x-6">
        {service.map((serve, index) => (
          <div
            key={index}
            className="flex items-center gap-4 md:gap-6 px-6 py-4 text-white  rounded-lg h-[15vh] w-full md:w-auto md:flex-1"
          >
            <span className="text-[24px] md:text-[30px]">{serve.logo}</span>
            <div className="text-sm md:text-base leading-tight">
              <p className="font-bold">{serve.des}</p>
              <p>{serve.name}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="bg-gray-100">
        <div className="container mx-auto border-black bg  py-20">
          <h2 className="text-2xl text-center font-bold mb-6">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-[85%] mx-auto gap-6">
            {products.slice(0, visibleItems).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <section
        className="container w-[80%] mx-auto  py-20 overflow-hidden "
        id="electronics"
      >
        <h2 className="text-2xl text-center font-bold mb-6">Electronics</h2>
        {device.length > 0 && (
          <div className="p-8">
            <div
              onClick={PrevSlide}
              className="absolute mt-28 hover:bg-slate-300  -translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-black cursor-pointer"
            >
              <BsChevronCompactLeft size={30} />
            </div>

            <div
              onClick={nextSlide}
              className="absolute mt-28 hover:bg-slate-300  -translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-black cursor-pointer"
            >
              <BsChevronCompactRight size={30} />
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-lg duration-500 p-6">
              <div className="flex flex-col md:flex-row">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.title}
                  className="w-full md:w-1/3 object-cover rounded-lg"
                />

                <div className="md:ml-6 mt-4 md:mt-0">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {currentProduct.title}
                  </h2>

                  <p className="text-xl font-medium text-gray-700 mt-2">
                    ${currentProduct.price}
                  </p>

                  <p className="text-gray-600 mt-4">
                    {currentProduct.description}
                  </p>
                  <p className="text-gray-600 mt-4">
                    {currentProduct.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex top-4 justify-center py-2"></div>
      </section>

      <div className="bg-slate-100 container mx-auto py-20 border-gray-200 ">
        <Women />
      </div>

      <div className="bg-slate-100 pt-5">
        <h2 className="text-2xl text-center font-bold my-5">
          What is everyone saying?
        </h2>
        <section className="container w-[80%] mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3   gap-10   py-20">
          {comments.map((comment, index) => (
            <div class="cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-full h-48 bg-neutral-50 rounded-lg shadow-md flex flex-row items-center justify-evenly gap-3 p-2 px-5 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-slate-400">
              <div className="">{comment.logo}</div>
              <div>
                <span class="font-bold">{comment.name}</span>
                <p class="line-clamp-3 font-[300] text-[20px]">{comment.des}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Marquee pauseOnHover>
        {images.map((image, index) => (
          <div className="container py-10  ">
            <img className="h-40 mx-5" src={image} alt={image} />
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default ProductLists;
