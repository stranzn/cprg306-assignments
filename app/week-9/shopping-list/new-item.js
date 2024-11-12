"use client";
import React, { useState } from "react";

export default function NewItem({ onAddItem }) {

  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  
  const generateId = () => {
    let result = '';
    while (result.length < 18) {
      result += (Math.random() + 1).toString(36).substring(2);
    }
    return result.substring(0, 18);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let item = {
      id: generateId(),
      quantity: quantity,
      name: name,
      category: category
    }

    console.log(item);

    onAddItem(item);

    setName("");
    setCategory("produce");
    setQuantity(1);
  }

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleNameChange = (event) => setName(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-2 p-2 text-center">
        <div className ="w-96 m-auto h-40 bg-slate-500 rounded"> {/*Controls box*/}
          
          <div> {/*Name Input*/}
            <input
              type="text"
              onChange={handleNameChange}
              value={name}
              placeholder="Enter Item Name"
              className="h-8 w-11/12 m-2 p-1 rounded-md border-black border-2 text-black"
            />
          </div> {/*Name input end*/}

          <div> {/*Category input*/}
            <select
              value = {category}
              onChange = {handleCategoryChange}
              className="m-2 w-11/12 p-1 font-bold bg-white text-black h-8 rounded border-black border-2"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meats</option>
              <option value="frozen">Frozen Foods</option>
              <option value="canned">Canned Foods</option>
              <option value ="dry">Dry Goods</option>
              <option value ="beverage">Beverages</option>
              <option value="snack">Snacks</option>
              <option value ="household">Household</option>
              <option value="other">Other</option>

            </select>
          </div> {/*Category input end*/}

          <div className="scale-90 w-56 h-14 m-auto px-3 bg-white flex justify-between items-center rounded border-black border-2">  {/*quantity buttons*/}
            <p className="font-bold font-sans font text-4xl m-1 text-black">{quantity}</p>
            <div
              className="px-3 bg-black border-2 border-red-600 rounded text-white hover:bg-red-500 
                            hover:scale-110 transition duration-200 ease-in-out"
            >
              <button
                onClick={decrement}
                disabled={quantity === 1}
                className="text-center px-4 py-2"
                type="button"
              >
                -
              </button>
            </div>

            <div
              className="px-3 bg-black border-2 border-green-600 rounded text-white hover:bg-green-500 
                            hover:scale-110 transition duration-200 ease-in-out"
            >
              <button
                onClick={increment}
                disabled={quantity === 20}
                className="text-center px-4 py-2"
                type="button"
              >
                +
              </button>
            </div>
          </div> {/*quantity buttons end*/}

        </div> {/*Controls box end*/}  

        <div>
          <button type="submit" className="m-1 p-2 w-48 bg-blue-400 text-black font-bold hover:bg-blue-300 border-white border-2">Add</button>
        </div>
      </div>
    </form>
  );
}
