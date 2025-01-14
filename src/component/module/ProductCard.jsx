import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="bg-white  hover:shadow-xl transform transition-transform duration-300 hover:scale-105 p-4">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain"
      />
      <h3 className="mt-2 text-lg font-bold">{product.title}</h3>
      <p className="mt-1 text-gray-500">{product.category}</p>
      <p className="mt-2 font-semibold">${product.price}</p>
    </Link>
  );
};

export default ProductCard;
