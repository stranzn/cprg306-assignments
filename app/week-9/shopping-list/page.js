"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useUserAuth } from "../_utils/auth-context"; 
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {

  const router = useRouter();
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const itemNameVal = item.name
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .trim();
    const itemArr = itemNameVal.split(",");
    const nameArr = itemArr[0].split(" ");
    setSelectedItemName(nameArr[0]);

    console.log(nameArr[0]);
  };

  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  console.log("Selected ingredient:", selectedItemName);

  return (
    <main>
      <title>Week 8 Assignment</title>
      <h1 className="mb-3 ml-3 mt-3 text-center text-4xl font-bold font-sans">
        Shopping List
      </h1>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
