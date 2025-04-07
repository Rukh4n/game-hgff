// src/componens/playGame/Pion.tsx
import React from "react";
import { BsConeStriped } from "react-icons/bs";

interface PionProps {
  position: number;
}

const Pion: React.FC<PionProps> = ({ position }) => {
  return (
    <div
      className="absolute transition-all duration-300"
      style={{ left: `${position * 4.5}rem` }} // menyesuaikan dengan lebar kotak + margin
    >
      <div className="w-12 h-12">
        <BsConeStriped className="w-full h-full text-yellow-500" />
      </div>
    </div>
  );
};

export default Pion;
