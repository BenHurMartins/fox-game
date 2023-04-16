import GameBoard from "@/src/components/GameBoard";
import NameForm from "@/src/components/NameForm";
import { useGameController } from "@/src/contexts/GameControllerProvider";

export default function Home() {
  const { gameStarted } = useGameController();

  return (
    <main className="flex min-h-screen flex-col items-center justify-top ">
      <h1 className="my-24 font-bold text-2xl">Click the Fox! Game</h1>
      {gameStarted ? <GameBoard /> : <NameForm />}
    </main>
  );
}
