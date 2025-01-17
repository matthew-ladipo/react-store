import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Women = () => {
  const [products, setProducts] = useState([]);


  const fetchWomenProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/category/women's clothing");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchWomenProducts();
  }, []);
  return (
    <div>
       <div  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-[85%] mx-auto gap-6">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="bg-white  hover:shadow-xl transform transition-transform duration-300 hover:scale-105 p-4">
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain"
            />
            <h3 className="mt-2 text-lg font-bold">{product.title}</h3>
            <p className="mt-1 text-gray-500">{product.category}</p>
            <p className="mt-2 font-semibold">${product.price}</p>
          </Link>
          ))}
        </div>
    </div>
  )
}

export default Women