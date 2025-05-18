import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Women = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const fetchWomenProducts = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/women's clothing"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchWomenProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-pink-700">
        Women's Clothing
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto mb-6 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearch}
          className="border rounded px-4 py-2 w-full md:w-1/3"
        />
        <select
          value={sort}
          onChange={handleSort}
          className="border rounded px-4 py-2 w-full md:w-1/4"
        >
          <option value="default">Sort by</option>
          <option value="price-asc">Price: Low to high</option>
          <option value="price-desc">Price: High to low</option>
        </select>
       
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-[90%] mx-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 p-6 flex flex-col items-center"
          >
            <div className="w-full flex flex-col items-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-40 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-sm text-pink-600 mb-1">{product.category}</p>
              <p className="text-xl font-bold text-gray-900">${product.price}</p>
            </div>
            <Link
             to={`/product/${product.id}`} 
              className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded transition"
            >
             See Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;