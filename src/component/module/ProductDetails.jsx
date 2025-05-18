import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductId = ({ onAddToCart, onAddToWishlist }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [wishlistAdded, setWishlistAdded] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (err) {
        setError("Error fetching product details.");
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="text-gray-700 text-lg">Loading product details...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="text-red-600 text-lg">{error}</span>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="text-gray-700 text-lg">Product not found.</span>
      </div>
    );
  }

  // Simulate stock for demo purposes
  const stock = product.rating?.count || 10;

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
  };

  const handleAddToWishlist = () => {
    setWishlistAdded(true);
    if (onAddToWishlist) {
      onAddToWishlist(product);
    }
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(stock, Number(e.target.value)));
    setQuantity(value);
  };

  return (
    <div className="py-10 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:flex">
        <div className="md:flex-shrink-0 flex justify-center items-center bg-gray-100 p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-64 w-64 object-contain rounded-lg"
          />
        </div>
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h2>
            <p className="text-xl text-blue-700 font-semibold mb-4">${product.price}</p>
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 mr-2">
                {"★".repeat(Math.round(product.rating?.rate || 0))}
                {"☆".repeat(5 - Math.round(product.rating?.rate || 0))}
              </span>
              <span className="text-gray-600 text-sm">
                ({product.rating?.count || 0} reviews)
              </span>
            </div>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-2">
              {product.category}
            </span>
            <div className="mb-2">
              <span className={`text-sm font-semibold ${stock > 0 ? "text-green-600" : "text-red-600"}`}>
                {stock > 0 ? `In Stock (${stock})` : "Out of Stock"}
              </span>
            </div>
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="mr-2 font-medium">Qty:</label>
              <input
                id="quantity"
                type="number"
                min={1}
                max={stock}
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 border rounded px-2 py-1"
                disabled={stock === 0}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white py-2 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
              disabled={stock === 0}
            >
              Add to Cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className={`py-2 px-6 rounded-lg border font-semibold ${
                wishlistAdded
                  ? "bg-pink-100 text-pink-600 border-pink-300 cursor-not-allowed"
                  : "bg-white text-pink-600 border-pink-400 hover:bg-pink-50"
              }`}
              disabled={wishlistAdded}
            >
              {wishlistAdded ? "Added to Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
