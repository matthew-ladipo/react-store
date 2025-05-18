import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Men = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState(""); // Search state

  useEffect(() => {
    const fetchMenProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/category/men's clothing"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchMenProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // Filter products based on search
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="w-11/12 mx-auto mb-6 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded w-64"
        />
        <div className="bg-white shadow rounded px-4 py-2 font-semibold">
          🛒 Cart: {cartCount} item{cartCount !== 1 ? "s" : ""}
        </div>
      </div>
      <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
        Men's Clothing
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 mx-auto gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 p-5 flex flex-col items-center"
          >
            <Link to={`/product/${product.id}`} className="w-full flex flex-col items-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-40 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700 text-center mb-2 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 mb-1 capitalize">
                {product.category}
              </p>
              <p className="text-xl font-bold text-blue-600">${product.price}</p>
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Men;