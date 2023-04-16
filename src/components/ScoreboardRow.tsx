import { FC } from "react";
import { ScoreBoard } from "../models/types";

const ScoreboardRow: FC<{ player: ScoreBoard; rank: number }> = ({
  player,
  rank,
}) => (
  <tr
    key={player.date.getTime()}
    className="border-2 odd:bg-gray-200 even:bg-gray-300"
  >
    <td className="text-right pr-2 bg-gray-400 text-white  border-2">{rank}</td>
    <td className="text-right pr-2  border-2">{player.name}</td>
    <td className="text-right pr-2  border-2">
      {player.date.toLocaleDateString()}
    </td>
    <td className="text-right pr-2  border-2">{player.score}</td>
  </tr>
);

export default ScoreboardRow;
