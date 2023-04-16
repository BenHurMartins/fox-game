import { FC } from "react";
import { useGameController } from "@/src/contexts/GameControllerProvider";
import Button from "@/src/components/Button";

const Scoreboard: FC = () => {
  const { scoreboard, playAgain, newPlayer } = useGameController();

  return (
    <main className="flex min-h-screen flex-col items-center justify-top ">
      <section className="flex flex-col justify-between items-center">
        <h1 className="my-24 font-bold text-2xl">Click the Fox! Game</h1>
        <h2 className="text-lg font-bold">SCOREBOARD</h2>
        <table className="my-12 table-auto gap-2 border-2 ">
          <thead className="bg-gray-400 text-white ">
            <tr className=" border-2">
              <th className="w-24  border-2">Rank</th>
              <th className="w-32  border-2">Name</th>
              <th className="w-24  border-2">Date</th>
              <th className="w-24  border-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {scoreboard.map((player, i) => {
              return (
                <tr
                  key={player.date.getTime()}
                  className="border-2 odd:bg-gray-200 even:bg-gray-300"
                >
                  <td className="text-right pr-2 bg-gray-400 text-white  border-2">
                    {i + 1}
                  </td>
                  <td className="text-right pr-2  border-2">{player.name}</td>
                  <td className="text-right pr-2  border-2">
                    {player.date.toLocaleDateString()}
                  </td>
                  <td className="text-right pr-2  border-2">{player.score}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex  gap-8">
          <Button onClick={playAgain}>PLAY!</Button>
          <Button onClick={newPlayer}>To Welcome Screen</Button>
        </div>
      </section>
    </main>
  );
};

export default Scoreboard;
