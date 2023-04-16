import { FC } from "react";
import { useGameController } from "@/src/contexts/GameControllerProvider";
import Button from "@/src/components/Button";
import PageHeader from "@/src/components/PageHeader";
import ScoreboardHeader from "@/src/components/ScoreboardHeader";
import ScoreboardRow from "@/src/components/ScoreboardRow";

const Scoreboard: FC = () => {
  const { scoreboard, playAgain, newPlayer } = useGameController();

  return (
    <main className="flex min-h-screen flex-col items-center justify-top ">
      <section className="flex flex-col justify-between items-center">
        <PageHeader />
        <h2 className="text-lg font-bold">SCOREBOARD</h2>
        <table className="my-12 table-auto gap-2 border-2 ">
          <ScoreboardHeader />
          <tbody>
            {scoreboard.map((player, i) => {
              return (
                <ScoreboardRow
                  key={player.date.getTime()}
                  player={player}
                  rank={i + 1}
                />
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
