import React, { createContext, useState } from "react";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [trackedFoods, setTrackedFoods] = useState([]);

  const addFood = (food, quantity = 1) => {
    setTrackedFoods((prev) => {
      const existing = prev.find((f) => f.id === food.id);
      if (existing) {
        return prev.map((f) =>
          f.id === food.id ? { ...f, quantity: f.quantity + quantity } : f
        );
      } else {
        return [...prev, { ...food, quantity }];
      }
    });
  };

  const removeFood = (foodId) => {
    setTrackedFoods((prev) => prev.filter((f) => f.id !== foodId));
  };

  return (
    <FoodContext.Provider value={{ trackedFoods, addFood, removeFood }}>
      {children}
    </FoodContext.Provider>
  );
};
