import React, { useState } from "react";

const Dice: React.FC = () => {
  const [number, setNumber] = useState<number>(1);

  const rollDice = () => {
    setNumber(Math.floor(Math.random() * 6) + 1);
  };

  const dotPositions: Record<number, string[]> = {
    1: ["center"],
    2: ["top-left", "bottom-right"],
    3: ["top-left", "center", "bottom-right"],
    4: ["top-left", "top-right", "bottom-left", "bottom-right"],
    5: ["top-left", "top-right", "center", "bottom-left", "bottom-right"],
    6: ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"],
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-24 h-24 bg-white border-4 border-gray-800 rounded-xl grid grid-cols-3 grid-rows-3 p-2 gap-1"
        onClick={rollDice}
      >
        {["top-left", "top-center", "top-right", "center", "bottom-left", "bottom-center", "bottom-right"].map(
          (pos) => (
            <div
              key={pos}
              className={`flex items-center justify-center ${
                dotPositions[number].includes(pos) ? "bg-black w-4 h-4 rounded-full" : ""
              }`}
            />
          )
        )}
      </div>
      <button
        onClick={rollDice}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Roll Dice
      </button>
    </div>
  );
};

export default Dice;
