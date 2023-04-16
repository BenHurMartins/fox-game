import { FC, createContext, useContext, useState } from "react";
import { useRouter } from "next/router";
import {
  GameControllerContextType,
  ContextProps,
  ScoreBoard,
} from "../models/types";

const GameContext = createContext<GameControllerContextType | null>(null);

const GameControllerProvider: FC<ContextProps> = ({ children }) => {
  const router = useRouter();
  const [playerName, setPlayerName] = useState("");
  const [scoreboard, setScoreboard] = useState<ScoreBoard[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameScore, setGameScore] = useState(0);

  const scoreUp = () => {
    setGameScore((s) => s + 1);
  };
  const scoreDown = () => {
    setGameScore((s) => s - 1);
  };

  const start = () => {
    setGameStarted(true);
  };

  const gameOver = () => {
    setGameStarted(false);
    setScoreboard((s) => {
      return [
        ...s,
        { date: new Date(), name: playerName, score: gameScore },
      ].sort((a, b) => b.score - a.score);
    });
    router.push("/scoreboard");
  };

  const newPlayer = () => {
    router.push("/");
    setPlayerName("");
    setGameScore(0);
  };
  const playAgain = () => {
    router.push("/");
    setGameScore(0);
  };

  const value = {
    playerName,
    gameStarted,
    gameScore,
    scoreboard,
    setPlayerName,
    start,
    gameOver,
    scoreUp,
    scoreDown,
    newPlayer,
    playAgain,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameControllerProvider;

export const useGameController = () =>
  useContext(GameContext) as GameControllerContextType;
