import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Jeweries = () => {
  const [products, setProducts] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(() => {
    // Persist cart in localStorage
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
    // Filter products by search
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
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
          Jewelry Collection
        </h2>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search jewelry..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring"
          />
          <Link
            to="/cart"
            className="relative inline-block text-indigo-600 font-semibold"
            title="View Cart"
          >
            🛒
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] mx-auto gap-8">
        {displayed.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">
            No products found.
          </div>
        ) : (
          displayed.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 p-6 flex flex-col items-center"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 w-40 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-700 text-center mb-2 line-clamp-2">
                  {product.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-500 mb-1 capitalize">
                {product.category}
              </p>
              <p className="text-xl font-bold text-indigo-600 mb-2">
                ${product.price}
              </p>
              <button
                className="mt-auto bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
              >
                See Details
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Jeweries;