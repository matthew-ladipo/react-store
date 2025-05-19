import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, onRemoveAll, onQuantityChange, remove }) => {
  // Calculate total price
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-4 text-yellow-700 text-center">
          <p>Your cart is empty.</p>
          <p className="mt-2">
            <a href="/" className="text-blue-600 hover:underline">
              Continue Shopping
            </a>
            </p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white shadow-md p-4 rounded-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg border mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mt-1">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                      onClick={() => onQuantityChange(item, (item.quantity || 1) - 1)}
                      disabled={(item.quantity || 1) <= 1}
                    >-</button>
                    <span className="px-3">{item.quantity || 1}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                      onClick={() => onQuantityChange(item, (item.quantity || 1) + 1)}
                    >+</button>
                  </div>
                </div>
                <button
                  className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => remove(item)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span>
            <button
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
              onClick={onRemoveAll}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
