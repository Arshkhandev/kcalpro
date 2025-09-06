import React, { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

const Tracker = () => {
  const { trackedFoods, addFood } = useContext(FoodContext);

  const visibleFoods = trackedFoods.filter((food) => food.quantity > 0);

  const totals = visibleFoods.reduce(
    (acc, food) => {
      acc.calories += food.calories * food.quantity;
      acc.protein += food.protein * food.quantity;
      acc.carbs += food.carbs * food.quantity;
      acc.fat += food.fat * food.quantity;
      acc.fiber += food.fiber * food.quantity;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }
  );

  Object.keys(totals).forEach((key) => {
    totals[key] = Math.round(totals[key]);
  });

  if (visibleFoods.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-700 text-lg">
        No foods tracked yet
      </p>
    );
  }

  return (
    <div className="px-6 py-8">
      <div className="mb-6 p-4 bg-gradient-to-r from-green-100 to-teal-100 rounded-xl shadow-lg flex flex-col sm:flex-row justify-around items-center gap-4">
        <div className="text-center">
          <h3 className="font-semibold text-sm text-gray-700">
            Total Calories
          </h3>
          <p className="font-bold text-lg text-red-500">{totals.calories}</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-sm text-gray-700">Protein (g)</h3>
          <p className="font-bold text-lg text-green-600">{totals.protein}</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-sm text-gray-700">Carbs (g)</h3>
          <p className="font-bold text-lg text-yellow-600">{totals.carbs}</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-sm text-gray-700">Fat (g)</h3>
          <p className="font-bold text-lg text-orange-500">{totals.fat}</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-sm text-gray-700">Fiber (g)</h3>
          <p className="font-bold text-lg text-blue-500">{totals.fiber}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
        {visibleFoods.map((food) => (
          <div
            key={food.id}
            className="
              w-60 min-h-[21rem]
              bg-gradient-to-br from-[#A8E6CF] via-[#D1F5D3] to-[#A0CED9]
              rounded-2xl shadow-md p-4 flex flex-col justify-between
              transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg
              cursor-pointer text-[#2F3E46] overflow-hidden
            "
          >
            <div>
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-28 object-cover rounded-xl mb-3"
              />

              <div className="text-base font-semibold mb-1">{food.name}</div>
              <div className="text-xs opacity-80">Serving: {food.serving}</div>
              <div className="text-xs opacity-80">
                Calories: {food.calories}
              </div>
              <div className="text-xs opacity-80">Protein: {food.protein}g</div>
              <div className="text-xs opacity-80">Carbs: {food.carbs}g</div>
              <div className="text-xs opacity-80">Fat: {food.fat}g</div>
              <div className="text-xs opacity-80">Fiber: {food.fiber}g</div>

              <div className="mt-2">
                <h3 className="text-xs font-semibold text-green-700">
                  Vitamins:
                </h3>
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
                <h3 className="text-xs font-semibold text-teal-700">
                  Minerals:
                </h3>
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

            <div className="mt-3 flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  if (food.quantity > 0) addFood(food, -1);
                }}
                className="px-2 py-1 bg-red-400 hover:bg-red-500 text-white rounded-lg text-sm"
              >
                -
              </button>
              <span className="text-sm font-semibold">{food.quantity}</span>
              <button
                onClick={() => addFood(food, 1)}
                className="px-2 py-1 bg-emerald-400 hover:bg-emerald-500 text-white rounded-lg text-sm"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracker;
