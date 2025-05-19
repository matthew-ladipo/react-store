import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Women = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");


  const partName = useLocation().pathname;

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
    <div className="py-12 bg-gradient-to-b from-pink-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-pink-700 tracking-tight drop-shadow">
          Women's Clothing
        </h2>
        {partName ===  '/women' ? 
         <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <Link
            to="/"
            className="bg-white border border-gray-300 hover:bg-pink-100 text-pink-700 font-semibold px-5 py-2 rounded shadow transition w-full md:w-auto text-center"
          >
            &larr; Back To Home
          </Link>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={handleSearch}
            className="border-2 border-pink-200 focus:border-pink-400 rounded px-4 py-2 w-full md:w-1/3 shadow-sm transition"
          />
          <select
            value={sort}
            onChange={handleSort}
            className="border-2 border-pink-200 focus:border-pink-400 rounded px-4 py-2 w-full md:w-1/4 shadow-sm transition"
          >
            <option value="default">Sort by</option>
            <option value="price-asc">Price: Low to high</option>
            <option value="price-desc">Price: High to low</option>
          </select>
        </div>  : 
        <>
        </>
      }
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-pink-200 transform transition-transform duration-300 hover:scale-105 p-7 flex flex-col items-center border border-pink-100"
            >
              <div className="w-full flex flex-col items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 w-40 object-contain mb-5 drop-shadow"
                />
                <h3 className="text-lg font-semibold text-gray-800 text-center mb-2 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-xs uppercase tracking-wide text-pink-500 mb-1">{product.category}</p>
                <p className="text-2xl font-bold text-pink-700 mb-2">${product.price}</p>
              </div>
              <Link
                to={`/product/${product.id}`}
                className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-full shadow transition"
              >
                See Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Women;