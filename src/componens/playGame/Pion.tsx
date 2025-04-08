// src/componens/playGame/Pion.tsx
import React from "react";
import { BsConeStriped } from "react-icons/bs";
import { useAppSelector } from "../../hooks/hooks";

const Pion: React.FC = () => {
  const position = useAppSelector((state) => state.counter.value);

  return (
    <div
      className="absolute transition-all duration-300"
      style={{ left: `${position * 4.5}rem` }}
    >
      <div className="w-12 h-12">
        <BsConeStriped className="w-full h-full text-yellow-500" />
      </div>
    </div>
  );
};

export default Pion;
