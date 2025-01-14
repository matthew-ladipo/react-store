import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="bg-white shadow-lg p-4 mb-4 rounded-lg">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
