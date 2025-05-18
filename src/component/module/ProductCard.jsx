import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div
     
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 p-6 flex flex-col items-center relative group border border-gray-100 hover:border-indigo-300"
    >
      {/* Favorite Icon */}
      <button
        className="absolute top-3 right-3 text-gray-300 hover:text-red-500 transition-colors z-10 bg-white rounded-full p-1 shadow group-hover:scale-110"
        title="Add to favorites"
        tabIndex={-1}
        onClick={e => e.preventDefault()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
      {/* Product Image with hover effect */}
      <div className="relative mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-44 w-44 object-contain rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300"
        />
        {/* Sale badge example */}
        {product.sale && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow">
            SALE
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-center mb-1 line-clamp-2">{product.title}</h3>
      <p className="text-xs text-gray-400 mb-2">{product.category}</p>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl font-bold text-indigo-600">${product.price}</span>
        {product.oldPrice && (
          <span className="text-sm text-gray-400 line-through">${product.oldPrice}</span>
        )}
      </div>
      {/* Rating stars */}
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < Math.round(product.rating?.rate || 0) ? 'text-yellow-400' : 'text-gray-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
          </svg>
        ))}
        <span className="text-xs text-gray-500 ml-1">({product.rating?.count || 0})</span>
      </div>
      {/* Quick View Button */}
      <Link
       to={`/product/${product.id}`}
        className="mt-auto bg-indigo-50 text-indigo-700 font-medium px-4 py-2 text-center rounded-lg shadow hover:bg-indigo-100 transition-colors w-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 duration-300"
        tabIndex={-1}
       
      >
        Quick View
      </Link>
    </div>
  );
};

export default ProductCard;
