import { ReactNode } from "react";

export type CatResponse = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export type FoxResponse = {
  image: string;
  link: string;
};

export type DogResponse = {
  message: string[];
  status: string;
};

export type TileContent = {
  image: string;
  isFox: boolean;
};

export type ContextProps = {
  children?: ReactNode | undefined;
};

export type ScoreBoard = {
  name: string;
  date: Date;
  score: number;
};

export type GameControllerContextType = {
  playerName: string;
  gameStarted: boolean;
  gameScore: number;
  scoreboard: ScoreBoard[];
  setPlayerName: (arg: string) => void;
  start: () => void;
  gameOver: () => void;
  scoreUp: () => void;
  scoreDown: () => void;
  newPlayer: () => void;
  playAgain: () => void;
};
