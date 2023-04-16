import GameBoard from "@/src/components/GameBoard";
import NameForm from "@/src/components/NameForm";
import PageHeader from "@/src/components/PageHeader";
import { useGameController } from "@/src/contexts/GameControllerProvider";

export default function Home() {
  const { gameStarted } = useGameController();

  return (
    <main className="flex min-h-screen flex-col items-center justify-top ">
      <PageHeader />
      {gameStarted ? <GameBoard /> : <NameForm />}
    </main>
  );
}
