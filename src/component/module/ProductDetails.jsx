import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductId = ({ onAddToCart }) => {
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      setProduct(response.data);
    } catch (err) {
      setError("Error fetching product details.");
      console.error("Error fetching product:", err);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  if (loading) {
    return <p className="text-center text-gray-700">Loading product details...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  if (!product) {
    return <p className="text-center text-gray-700">Product not found.</p>;
  }

  
  const handleAddToCart = () => {
    onAddToCart(product); 
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row">
         
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-1/3 object-cover rounded-lg"
          />

          <div className="md:ml-6 mt-4 md:mt-0">
           
            <h2 className="text-2xl font-semibold text-gray-900">{product.title}</h2>

           
            <p className="text-xl font-medium text-gray-700 mt-2">${product.price}</p>

            
            <p className="text-gray-600 mt-4">{product.description}</p>
            <p className="text-gray-600 mt-4">{product.category}</p>

            
            <button
              onClick={handleAddToCart} 
              className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
