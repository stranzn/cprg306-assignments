"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItems } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ShoppingList() {
  
  const router = useRouter();
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = async (newItem) => {
    console.log("Trying to add item: ", newItem);
    const newItemId = await addItems(user.uid, newItem);
    const updatedItems = await getItems(user.uid);
    setItems(updatedItems);
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
    const loadItems = async () => {
      if (user) {
        const fetchedItems = await getItems(user.uid);
        console.log(fetchedItems);
        setItems(fetchedItems);
      }
    };
    loadItems();
  }, [user]);

  useEffect(() => {
    if (!user) {
      router.push("/week-10");
    }
  }, [user, router]);

  console.log("Selected ingredient:", selectedItemName);

  return (
    <main>
      <title>Week 10 Assignment</title>
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
