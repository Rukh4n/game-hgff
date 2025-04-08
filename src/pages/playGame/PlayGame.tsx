// src/pages/PlayGame.tsx
import React, { useRef, useEffect } from "react";
import Dice from "../../componens/Dice";
import Pion from "../../componens/playGame/Pion";
import DialogBar from "../../componens/dialogBar/DialogBar";
import { useAppSelector } from "../../hooks/hooks";

const PlayGame: React.FC = () => {
  const data = JSON.parse(localStorage.getItem("data") || "{}");
  const numberOfSteps = parseInt(data.deathAge) || 100;

  const pionPosition = useAppSelector((state) => state.counter.value);
  const pionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    pionRef.current?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [pionPosition]);

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
    <>
      <div className="w-full">
        <DialogBar />
      </div>
      <div className="h-screen flex flex-col items-center justify-center bg-gray-900 p-6 w-full">
        <h1 className="text-white text-2xl mb-6">Play Game</h1>

        <div className="w-full max-w-5xl overflow-x-auto mb-10 relative">
          <div className="relative h-12">
            <div ref={pionRef}>
              <Pion />
            </div>
          </div>
          <div className="flex space-x-2 px-2">
            {Array.from({ length: numberOfSteps }).map((_, index) => (
              <div
                key={index}
                className={`w-16 h-4 rounded-md ${
                  colors[index % colors.length]
                } border-2 border-white flex-shrink-0`}
              ></div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-5xl flex justify-end">
          <Dice />
        </div>
      </div>
    </>
  );
};

export default PlayGame;
