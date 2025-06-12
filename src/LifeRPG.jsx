
import { useState } from "react";
import { motion } from "framer-motion";
import silhouette from "./assets/silhouette.png";

export default function LifeRPG() {
  const [player] = useState({
    equipment: {
      helmet: null,
      armor: null,
      weapon: null,
      gloves: null,
      boots: null,
      shield: null,
      ring: null,
      cloak: null,
      belt: null,
      accessory: null,
    }
  });

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🧙‍♂️ 인생 RPG</h1>
      <div className="relative w-64 h-[500px] mx-auto mb-8">
        <img src={silhouette} alt="실루엣" className="w-full h-full object-contain opacity-20" />
        <div className="absolute top-2 left-24 bg-white bg-opacity-40 border rounded p-1">👑</div>
        <div className="absolute top-24 left-24 bg-white bg-opacity-40 border rounded p-1">🛡</div>
        <div className="absolute top-44 left-24 bg-white bg-opacity-40 border rounded p-1">⚔️</div>
        <div className="absolute top-44 left-4 bg-white bg-opacity-40 border rounded p-1">🧤</div>
        <div className="absolute top-44 right-4 bg-white bg-opacity-40 border rounded p-1">🥾</div>
        <div className="absolute top-64 left-2 bg-white bg-opacity-40 border rounded p-1">💍</div>
        <div className="absolute top-64 right-2 bg-white bg-opacity-40 border rounded p-1">🧣</div>
        <div className="absolute top-[18rem] left-24 bg-white bg-opacity-40 border rounded p-1">👖</div>
      </div>
    </div>
  );
}
