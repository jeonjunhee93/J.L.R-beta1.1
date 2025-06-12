import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
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
      luck: 5,
    },
    equipment: {
      helmet: null,
      armor: null,
      gloves: null,
      boots: null,
      weapon: null,
      shield: null,
      ring: null,
      cloak: null,
      belt: null,
      accessory: null,
    },
  });

  const handleAddTask = () => {
    if (!taskInput.trim()) return;
    const reward = {
      xp: 10,
      gold: 5,
    };
    const newTask = {
      id: Date.now(),
      description: taskInput,
      completed: false,
      reward,
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const completeTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id && !t.completed
          ? {
              ...t,
              completed: true,
            }
          : t
      )
    );
    const task = tasks.find((t) => t.id === id);
    if (task && !task.completed) {
      const newXP = player.xp + task.reward.xp;
      const newGold = player.gold + task.reward.gold;
      const newLevel = player.level + Math.floor(newXP / 100);
      setPlayer({
        ...player,
        xp: newXP % 100,
        gold: newGold,
        level: newLevel,
      });
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🧙‍♂️ 인생 RPG</h1>
      <div className="flex gap-8">
        {/* 장비창 */}
        <div className="relative w-72 h-[500px]">
          <img src={silhouette} alt="장비 실루엣" className="absolute inset-0 opacity-30" />
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
            <Slot label="Helmet" />
          </div>
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
            <Slot label="Armor" />
          </div>
          <div className="absolute top-40 left-6">
            <Slot label="Gloves" />
          </div>
          <div className="absolute top-40 right-6">
            <Slot label="Shield" />
          </div>
          <div className="absolute top-56 left-1/2 transform -translate-x-1/2">
            <Slot label="Belt" />
          </div>
          <div className="absolute top-72 left-6">
            <Slot label="Boots" />
          </div>
          <div className="absolute top-72 right-6">
            <Slot label="Weapon" />
          </div>
          <div className="absolute bottom-20 left-12">
            <Slot label="Ring" />
          </div>
          <div className="absolute bottom-20 right-12">
            <Slot label="Cloak" />
          </div>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <Slot label="Accessory" />
          </div>
        </div>

        {/* 할일 관리 */}
        <div className="flex-1">
          <div className="flex gap-2 mb-4">
            <Input
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="할 일 입력"
            />
            <Button onClick={handleAddTask}>추가</Button>
          </div>
          <div className="grid gap-3">
            {tasks.map((task) => (
              <Card key={task.id}>
                <CardContent className="flex justify-between items-center py-3">
                  <div>
                    <p className={task.completed ? "line-through text-gray-500" : ""}>
                      {task.description}
                    </p>
                    <p className="text-sm text-gray-400">
                      보상: {task.reward.xp} XP / {task.reward.gold} Gold
                    </p>
                  </div>
                  {!task.completed && (
                    <Button size="sm" onClick={() => completeTask(task.id)}>
                      완료
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Slot({ label }) {
  return (
    <div className="w-16 h-16 border border-gray-300 bg-white bg-opacity-70 flex items-center justify-center rounded shadow text-xs text-center">
      {label}
    </div>
  );
}
