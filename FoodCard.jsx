import React, { useState, useContext } from "react";
import { FoodContext } from "../context/FoodContext"; // import context

const FoodCard = ({ food }) => {
  const [quantity, setQuantity] = useState(0);
  const { addFood } = useContext(FoodContext); // get addFood from context

  const increase = () => {
    setQuantity((q) => q + 1);
    addFood(food, 1); // add 1 to tracker
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
      addFood(food, -1); // subtract 1 from tracker
    } else {
      addFood(food, -quantity); // remove completely from tracker
      setQuantity(0);
    }
  };

  return (
    <div
      className="
        w-60 min-h-[21rem] 
        bg-gradient-to-br from-[#A8E6CF] via-[#D1F5D3] to-[#A0CED9] 
        rounded-2xl shadow-md 
        p-4 flex flex-col justify-between
        transition-all duration-300 
        hover:scale-105 hover:-translate-y-2 hover:shadow-lg
        cursor-pointer text-[#2F3E46] overflow-hidden
      "
    >
      <div>
        <img
          src={food.image}
          alt="img"
          className="w-full h-28 object-cover rounded-xl mb-3"
        />

        <div className="text-base font-semibold mb-1">{food.name}</div>
        <div className="text-xs opacity-80">Serving: {food.serving}</div>
        <div className="text-xs opacity-80">Calories: {food.colories}</div>
        <div className="text-xs opacity-80">Protein: {food.protien}g</div>
        <div className="text-xs opacity-80">Carbs: {food.carbs}g</div>
        <div className="text-xs opacity-80">Fat: {food.fat}g</div>
        <div className="text-xs opacity-80">Fiber: {food.fiber}g</div>

        <div className="mt-2">
          <h3 className="text-xs font-semibold text-green-700">Vitamins:</h3>
          <div className="flex flex-wrap gap-1 mt-1">
            {food.vitamins.map((vitamin, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-green-200 text-green-800 text-[10px] rounded-full"
              >
                {vitamin}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-2">
          <h3 className="text-xs font-semibold text-teal-700">Minerals:</h3>
          <div className="flex flex-wrap gap-1 mt-1">
            {food.minerals.map((mineral, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-teal-200 text-teal-800 text-[10px] rounded-full"
              >
                {mineral}
              </span>
            ))}
          </div>
        </div>
      </div>

      {quantity === 0 ? (
        <button
          onClick={() => {
            setQuantity(1);
            addFood(food, 1); // add to tracker
          }}
          className="mt-3 w-24 self-center py-1 rounded-lg bg-emerald-400 hover:bg-emerald-500 text-white text-sm transition"
        >
          Add
        </button>
      ) : (
        <div className="mt-3 flex items-center justify-center gap-3">
          <button
            onClick={decrease}
            className="px-2 py-1 bg-red-400 hover:bg-red-500 text-white rounded-lg text-sm"
          >
            -
          </button>
          <span className="text-sm font-semibold">{quantity}</span>
          <button
            onClick={increase}
            className="px-2 py-1 bg-emerald-400 hover:bg-emerald-500 text-white rounded-lg text-sm"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default FoodCard;
