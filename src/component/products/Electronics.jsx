import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const getRandomStock = () => Math.random() > 0.3; // 70% chance in stock

const Electronics = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quickView, setQuickView] = useState(null);
  const [search, setSearch] = useState(""); // <-- Search state

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
    <div className="py-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
        Electronics
      </h2>
      {/* Search Input */}
      <div className="w-[90%] mx-auto mb-8 flex justify-end">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] mx-auto gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 p-5 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-44 w-44 object-contain mb-4"
              onClick={() => setQuickView(product)}
              style={{ cursor: "pointer" }}
              title="Quick View"
            />
            <h3 className="text-lg font-semibold text-center mb-2 line-clamp-2">
              {product.title}
            </h3>
            <p className="text-sm text-gray-500 mb-1 capitalize">
              {product.category}
            </p>
            {/* Rating */}
            <div className="flex items-center mb-1">
              <span className="text-yellow-400 mr-1">
                {"★".repeat(Math.round(product.rating))}
                {"☆".repeat(5 - Math.round(product.rating))}
              </span>
              <span className="text-xs text-gray-500 ml-1">
                ({product.count})
              </span>
            </div>
            {/* In Stock */}
            <p className={`text-sm font-medium mb-1 ${product.inStock ? "text-green-600" : "text-red-500"}`}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </p>
            {/* Short Description */}
            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
              {product.description}
            </p>
            <p className="text-xl font-bold text-blue-700 mb-2">${product.price}</p>
            <div className="flex gap-2">
             
              <Link
                to={`/product/${product.id}`}
               className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition disabled:opacity-50"
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
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setQuickView(null)}
            >
              ×
            </button>
            <img
              src={quickView.image}
              alt={quickView.title}
              className="h-40 w-40 object-contain mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{quickView.title}</h3>
            <p className="text-gray-700 mb-2">{quickView.description}</p>
            <p className="text-blue-700 font-bold text-lg mb-2">${quickView.price}</p>
            <button
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition disabled:opacity-50"
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