'use client';
import Item from './item';
import React, { useState } from "react";
import itemsJSON from "./items.json";

export default function ItemList(){

  const [sortBy, setSortBy] = useState("name");
  const [items, setItems] = useState(() => {
    const sortedItems = [...itemsJSON].sort((a, b) => a.name.localeCompare(b.name));
    return sortedItems;
  });

  const sortItems = (method) =>{

    let resortedItems = [...items];

    setSortBy(method);

    if (method === "name") {
      resortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (method === "category") {
      resortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }

    setItems(resortedItems);

  }
    
      return(
        <div>
          <div className="ml-5 flex items-center">
            <p>Sort By:</p>
            <button 
              onClick={() => sortItems("name")}  
              className={`m-3 p-1 border-white border-2 ${sortBy === "name" ? "bg-rose-500 text-white" : "bg-rose-800"}`}>
              Name
            </button>
            <button 
              onClick={() => sortItems("category")}  
              className={`m-3 p-1 border-white border-2 ${sortBy === "category" ? "bg-rose-500 text-white" : "bg-rose-800"}`}>
              Category
            </button>
          </div>

          <div>
            <ul>
              {items.map(item =>(
                <li key={item.id}>
                  <Item name = {item.name} category={item.category} quantity = {item.quantity}/>
                </li>
              ))}
            </ul>
          </div>

        </div>
    );
}