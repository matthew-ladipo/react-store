import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Jeweries = () => {
  const [products, setProducts] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const fetchJeweries = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        setProducts(response.data);
        setDisplayed(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchJeweries();
  }, []);

  useEffect(() => {
    setDisplayed(
      products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <div className="py-10 bg-gradient-to-tr from-purple-100 via-white to-pink-100 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center w-[92%] mx-auto mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-purple-800 mb-5 md:mb-0 tracking-tight drop-shadow-lg">
          Jewelry Collection
        </h2>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search jewelry..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-purple-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition w-full md:w-72 shadow"
          />
          <Link
            to="/"
            className="bg-white hover:bg-purple-100 text-purple-700 font-medium px-4 py-2 rounded-xl transition text-center shadow border border-purple-200"
          >
            &larr; Back To Home
          </Link>
          <Link
            to="/cart"
            className="relative inline-block text-purple-600 font-bold text-2xl"
            title="View Cart"
          >
            🛒
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[92%] mx-auto gap-8">
        {displayed.length === 0 ? (
          <div className="col-span-full text-center text-gray-400 text-lg">
            No products found.
          </div>
        ) : (
          displayed.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 p-6 flex flex-col items-center border border-purple-100"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 w-40 object-contain mb-4 drop-shadow-md"
                />
                <h3 className="text-base font-semibold text-gray-900 text-center mb-1 line-clamp-2">
                  {product.title}
                </h3>
              </Link>
              <p className="text-xs text-gray-400 mb-1 capitalize">
                {product.category}
              </p>
              <p className="text-lg font-bold text-purple-600 mb-2">
                ${product.price}
              </p>
              <div className="flex gap-2 w-full">
                <Link
                  to={`/product/${product.id}`}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-lg hover:from-purple-600 hover:to-pink-500 transition w-full text-center font-medium"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Jeweries;