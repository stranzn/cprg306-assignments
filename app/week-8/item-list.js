"use client";
import Item from './item';
import React, { useState } from "react";

export default function ItemList({ items, onItemSelect }) {

    const [sortBy, setSortBy] = useState("name");

    const getSortedItems = () => {
        let resortedItems = [...items];
        if (sortBy === "name") {
            resortedItems.sort((a, b) => a.name.localeCompare(b.name)); 
        } else if (sortBy === "category") {
            resortedItems.sort((a, b) => a.category.localeCompare(b.category));
        }
        return resortedItems;
    };

    const sortedItems = getSortedItems();

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="ml-5 flex items-center">
                <p className="font-bold">Sort By:</p>
                <button 
                    onClick={() => setSortBy("name")}  
                    className={`m-3 p-1 border-white border-2 ${sortBy === "name" ? "bg-rose-500 text-white" : "bg-rose-800"}`}>
                    Name
                </button>
                <button 
                    onClick={() => setSortBy("category")}  
                    className={`m-3 p-1 border-white border-2 ${sortBy === "category" ? "bg-rose-500 text-white" : "bg-rose-800"}`}>
                    Category
                </button>
            </div>

            <div>
                <ul>
                    {sortedItems.map(item => (
                        <li key={item.id}>
                            <Item name = {item.name} category={item.category} quantity = {item.quantity} onSelect={() => onItemSelect(item)}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
