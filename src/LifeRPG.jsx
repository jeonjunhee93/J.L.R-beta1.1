
import React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import silhouette from "./assets/silhouette.png";

export default function LifeRPG() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [player, setPlayer] = useState({
    level: 1,
    xp: 0,
    gold: 0,
    inventory: [],
    stats: {
      strength: 5,
      intelligence: 5,
      luck: 5
    },
    equipment: {
      weapon: null,
      armor: null,
      accessory: null,
      helmet: null,
      boots: null,
      gloves: null,
      ring: null,
      cloak: null,
      belt: null,
      shield: null
    }
  });

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🧙‍♂️ 인생 RPG</h1>
      <p className="text-lg">이곳은 당신의 실생활을 게임처럼 관리하는 공간입니다.</p>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">장비</h2>
          <div className="relative w-64 h-[400px] bg-gray-100 rounded-lg">
            <img
              src={silhouette}
              alt="Silhouette"
              className="absolute inset-0 w-full h-full opacity-40 object-contain"
            />
            <div className="absolute top-2 left-[42%] w-10 h-10 border rounded bg-white bg-opacity-75 text-xs flex items-center justify-center">
              {player.equipment.helmet || "머리"}
            </div>
            <div className="absolute top-[60px] left-[42%] w-10 h-10 border rounded bg-white bg-opacity-75 text-xs flex items-center justify-center">
              {player.equipment.armor || "갑옷"}
            </div>
            <div className="absolute top-[120px] left-[25%] w-10 h-10 border rounded bg-white bg-opacity-75 text-xs flex items-center justify-center">
              {player.equipment.gloves || "장갑"}
            </div>
            <div className="absolute top-[120px] right-[25%] w-10 h-10 border rounded bg-white bg-opacity-75 text-xs flex items-center justify-center">
              {player.equipment.weapon || "무기"}
            </div>
            <div className="absolute bottom-[60px] left-[42%] w-10 h-10 border rounded bg-white bg-opacity-75 text-xs flex items-center justify-center">
              {player.equipment.boots || "부츠"}
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">할 일</h2>
          <Input
            className="mb-2"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="할 일을 입력하세요"
          />
          <Button
            onClick={() => {
              if (taskInput.trim()) {
                setTasks([...tasks, taskInput]);
                setTaskInput("");
              }
            }}
          >
            추가
          </Button>
          <ul className="mt-4 list-disc list-inside">
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
