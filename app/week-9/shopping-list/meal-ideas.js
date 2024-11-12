"use client";

import React, { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async (ingredient) => {
    console.log("Ingredient before passed to fetch: ", ingredient);
    const data = await fetchMealIdeas(ingredient);
    setMeals(data);
  };

  useEffect(() => {
    if (ingredient){
        loadMealIdeas(ingredient);
        console.log("ingredient NN: ", ingredient);
    } else {
        console.error("ingredient null");
    }
  }, [ingredient]);

  return (
    <div>
      <h1 className="font-bold text-xl underline">Meal Ideas</h1>
      <p className="m-1">Meal ideas for ingredient: {ingredient}</p>
      <div>
        <ul>
          {meals.map((meal) => (
            <li key={meal.id}>
              <div className="m-3 p-1 bg-zinc-700 text-white">
                <p>{meal.mealName}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

async function fetchMealIdeas(ingredient) {

    console.log("Fetching meals for ingredient: ", ingredient);


  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );

    if (!response.ok) {
      throw new Error("No Response");
    }

    const { meals } = await response.json();

    if (!meals) {
        console.error("No data found");
      return [];
    }

    const dataArr = meals.map((meal) => ({
      id: meal.idMeal,
      mealName: meal.strMeal,
      thumbnail: meal.strMealThumb,
    }));

    return dataArr;
  } catch (err) {
    console.error("Was unable to fetch", err);
    return [];
  }
}
