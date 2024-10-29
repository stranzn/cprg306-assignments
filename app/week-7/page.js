"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import React, { useState } from "react";

export default function Page () {

    const [items, setItems] = useState(itemsData);

    const HandleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return(
        <main>
            <title>Week 7 Assignment</title>
            <h1 className="mb-3 ml-3 mt-3 text-center text-4xl font-bold font-sans">Shopping List</h1>
            <NewItem onAddItem={HandleAddItem}/>
            <ItemList items={items}/>
        </main>
    );
};