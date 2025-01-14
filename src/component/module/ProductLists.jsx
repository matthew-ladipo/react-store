import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import bg from "../images/wmremove-transformed.jpeg";
import { FaShippingFast } from "react-icons/fa";
import { Ri24HoursLine } from "react-icons/ri";
import { MdOutlineDownloading } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

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
      des: "Dolores porro laboriosam molestias est quo. Et et eos. Ab error modi labore sed eaque est. Quaerat aut est fugiat.",
      name: "Jack Hallow",
      logo: <CgProfile />,
    },
    {
      id: 2,
      des: "Dolorem et cumque consequuntur consequuntur cumque eligendi voluptate. Tempore accusamus tempore consectetur dolor aliquid.",
      name: "Justin Biber",
      logo: <CgProfile />,
    },
    {
      id: 3,
      des: "Et eum neque ipsum quaerat ratione qui dolore eos. Numquam quo vel amet expedita eius facere minima. Dolor et saepe consequuntur.",
      name: "Travis Scout",
      logo: <CgProfile />,
    },
    {
      id: 4,
      des: "Itaque dicta rerum aliquam sit corporis iste omnis. Officia veritatis vel labore et dolor iste velit distinctio.",
      name: "LiL Babby",
      logo: <CgProfile />,
    },
    {
      id: 5,
      des: "In saepe veniam. Rerum excepturi dolor voluptatibus asperiores ad ut. Veniam molestiae tenetur velit voluptatum.",
      name: "Shalli Poppi",
      logo: <CgProfile />,
    },
    {
      id: 6,
      des: "Saepe doloribus deserunt in. At beatae neque pariatur harum vel.",
      name: "Tiwa Savage",
      logo: <CgProfile />,
    },
  ];

  const [products, setProducts] = useState([]);
  const [visibleItems, setVisibleItems] = useState(8);
  const [visible, setVisible] = useState(12);

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
        className=" bg-cover bg-no-repeat  text-white h-[85vh] "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex  ml-32  relative   h-[63vh] w-[400px] ">
          <div className="px-10   py-10 bg-gray-900">
            <p className=" text-[40px] font-bold ">
              The best home entertainment system is here
            </p>
            <h3 className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem accusamus eius, esse doloribus obcaecati nisi
              voluptates suscipit,
            </h3>

            <h2 className="mt-5 text-blue-600 cursor-pointer">Shop Now</h2>
          </div>
        </div>
      </section>
      <section className="container   justify-center items-center absolute mx-auto -bottom-10 flex">
        {service.map((serve, index) => (
          <>
            <div
              key={index}
              className="flex gap-10 px-5 py-2 text-white z-10  bg-gray-900  h-[15vh]"
            >
              <h2
                className={serve.id === 4 ? "border-r-0" : ""}
                style={{
                  display: "flex",
                  gap: "16px",
                  fontSize: "13px",
                  borderRight: "1px",
                  paddingRight: "20px",
                  alignItems: "center",
                }}
              >
                <span className="text-[30px]">
                  <div>{serve.logo}</div>
                </span>
                <div>
                  <p>{serve.des}</p>
                  <p>{serve.name}</p>
                </div>
              </h2>
            </div>
          </>
        ))}
      </section>
      <div className="container mx-auto border-black  py-20">
        <h2 className="text-2xl text-center font-bold mb-6">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-[85%] mx-auto gap-6">
          {products.slice(0, visibleItems).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <section className="container w-[80%] mx-auto border-[1px] border-black  py-20">
        <h2 className="text-2xl  font-bold mb-6">Today’s best deal</h2>
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4   gap-6">
          {products.slice(0, visible).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="container w-[80%] mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3   gap-6   py-20">
        {comments.map((comment, index) => (
        <div class="cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-full h-44 bg-neutral-50 rounded-lg shadow-md flex flex-row items-center justify-evenly gap-3 p-2 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-slate-400">
          <div><CgProfile className="stroke-slate-200 shrink-0 text-[30px] text-gray-500" />
           
          </div>
          
          <div>
            <span class="font-bold">Jack Hallow</span>
            <p class="line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
       ))}
      </section>
    </>
  );
};

export default ProductLists;
