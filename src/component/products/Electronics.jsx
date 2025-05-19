import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const getRandomStock = () => Math.random() > 0.3; // 70% chance in stock

const Electronics = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quickView, setQuickView] = useState(null);
  const [search, setSearch] = useState(""); // <-- Search state
  const navigate = useNavigate(); // <-- Add this line

  const fetchElectronicsProducts = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/electronics"
      );
      // Add stock and rating for demo
      const enhanced = response.data.map((p) => ({
        ...p,
        inStock: getRandomStock(),
        rating: Math.round((p.rating?.rate || Math.random() * 5) * 10) / 10,
        count: p.rating?.count || Math.floor(Math.random() * 500 + 1),
      }));
      setProducts(enhanced);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchElectronicsProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Filter products by search
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-12 bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen">
      {/* Back Button */}
      <div className="w-[90%] mx-auto mb-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-white shadow text-blue-700 px-5 py-2 rounded-lg hover:bg-blue-100 transition font-medium"
        >
          ← Back
        </button>
      </div>
      <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-800 tracking-tight drop-shadow">
        Electronics
      </h2>
      {/* Search Input */}
      <div className="w-[90%] mx-auto mb-10 flex justify-end">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-blue-300 rounded-lg px-4 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-400 shadow"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] mx-auto gap-10">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 p-6 flex flex-col items-center border border-blue-100"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-44 w-44 object-contain mb-5 rounded-lg bg-blue-50 cursor-pointer"
              onClick={() => setQuickView(product)}
              title="Quick View"
            />
            <h3 className="text-lg font-semibold text-center mb-2 line-clamp-2 text-blue-900">
              {product.title}
            </h3>
            <p className="text-xs text-blue-500 mb-1 uppercase tracking-wide">
              {product.category}
            </p>
            {/* Rating */}
            <div className="flex items-center mb-1">
              <span className="text-yellow-400 mr-1 text-base">
                {"★".repeat(Math.round(product.rating))}
                {"☆".repeat(5 - Math.round(product.rating))}
              </span>
              <span className="text-xs text-gray-400 ml-1">
                ({product.count})
              </span>
            </div>
            {/* In Stock */}
            <p className={`text-xs font-semibold mb-1 ${product.inStock ? "text-green-600" : "text-red-500"}`}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </p>
            {/* Short Description */}
            <p className="text-xs text-gray-500 mb-3 line-clamp-2 text-center">
              {product.description}
            </p>
            <p className="text-2xl font-bold text-blue-700 mb-3">${product.price}</p>
            <div className="flex gap-3">
              <Link
                to={`/product/${product.id}`}
                className="bg-blue-600 text-white px-5 py-1.5 rounded-lg hover:bg-blue-700 transition font-medium shadow"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Quick View Modal */}
      {quickView && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative shadow-2xl border border-blue-200">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-blue-700 text-2xl font-bold"
              onClick={() => setQuickView(null)}
            >
              ×
            </button>
            <img
              src={quickView.image}
              alt={quickView.title}
              className="h-40 w-40 object-contain mx-auto mb-5 rounded-lg bg-blue-50"
            />
            <h3 className="text-2xl font-bold mb-3 text-blue-900">{quickView.title}</h3>
            <p className="text-gray-700 mb-3 text-center">{quickView.description}</p>
            <p className="text-blue-700 font-bold text-xl mb-4 text-center">${quickView.price}</p>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium w-full disabled:opacity-50"
              onClick={() => {
                handleAddToCart(quickView);
                setQuickView(null);
              }}
              disabled={!quickView.inStock}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
      </div>
    );
  };
  
  export default Electronics;
