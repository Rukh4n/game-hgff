import React from "react";
import Dice from "../../componens/Dice";
import Pion from "../../componens/playGame/Pion";
import DialogBar from "../../componens/dialogBar/DialogBar";
const PlayGame: React.FC = () => {
  const numberOfStaps = 100; // Ganti jadi lebih besar, misal 50, untuk melihat efek scroll

  // Warna-warna acak yang berbeda untuk kotak
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-orange-500",
    "bg-teal-500",
    "bg-rose-500",
  ];

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 p-6 w-full">
      <DialogBar/>
      <h1 className="text-white text-2xl mb-6">Play Game</h1>

      {/* Scrollable container (scroll muncul hanya jika overflow) */}
      <div className="w-full max-w-5xl overflow-x-auto mb-10 relative">
        <Pion />
        <div className="flex space-x-2 px-2">
          {Array.from({ length: numberOfStaps }).map((_, index) => (
            <div
              key={index}
              className={`w-16 h-4 rounded-md ${colors[index % colors.length]} border-2 border-white flex-shrink-0`}
            ></div>
          ))}
        </div>
      </div>

      {/* Komponen Dice rata kanan */}
      <div className="w-full max-w-5xl flex justify-end">
        <Dice />
      </div>
    </div>
  );
};

export default PlayGame;
