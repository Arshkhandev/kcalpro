import React from "react";
import foods from "../util/FoodData";
import FoodCard from "../components/FoodCard";

const Home = ({ query }) => {
  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(query.toLowerCase())
  );

  const displayedFoods = query.trim() ? filteredFoods : foods;

  return (
    <div
      className="
        min-h-screen w-full 
        bg-gradient-to-b from-[#D1F5D3] via-[#A8E6CF] to-[#A0CED9] 
        px-6 py-10
      "
    >
      {displayedFoods.length === 0 ? (
        <p className="text-center text-gray-700 text-lg tracking-wide font-medium">
          No foods found
        </p>
      ) : (
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
            gap-8 place-items-center
          "
        >
          {displayedFoods.map((food) => (
            <FoodCard food={food} key={food.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
