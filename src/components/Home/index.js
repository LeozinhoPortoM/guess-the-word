import "./style.css";

import { useState, useEffect, useCallback } from "react";

import { wordsList } from "../../data/words";

import StartScreen from "../StartScreen";
import Game from "../Game";
import GameOver from "../GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

export default function Home() {
  const [gameStage, setGameStage] = useState(stages[0].name);

  const [words] = useState(wordsList);

  console.log(words);

  return (
    <div className="Home">
      {gameStage === "start" && <StartScreen />}
      {gameStage === "game" && <Game />}
      {gameStage === "end" && <GameOver />}
    </div>
  );
}
