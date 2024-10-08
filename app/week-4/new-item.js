"use client";
import React, { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const Increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const Decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="m-5 p-5 text-center">
      <p className="font-bold font-sans font text-4xl m-4">{quantity}</p>
      <div className="w-48 h-14 m-auto px-3 bg-white flex justify-between items-center rounded">
        <div
          className="px-3 bg-black border-2 border-red-600 rounded text-white hover:bg-red-500 
                            hover:scale-110 transition duration-200 ease-in-out"
        >
          <button
            onClick={Decrement}
            disabled={quantity === 1}
            className="text-center px-4 py-2"
          >
            -
          </button>
        </div>

        <div
          className="px-3 bg-black border-2 border-green-600 rounded text-white hover:bg-green-500 
                            hover:scale-110 transition duration-200 ease-in-out"
        >
          <button
            onClick={Increment}
            disabled={quantity === 20}
            className="text-center px-4 py-2"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
