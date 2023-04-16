import { FC } from "react";
import { useGameController } from "../contexts/GameControllerProvider";
import Button from "./Button";

const NameForm: FC = () => {
  const { playerName, setPlayerName, start } = useGameController();
  const isDisabled = playerName.length === 0;

  return (
    <section className="flex flex-col justify-between items-center">
      <div className="mb-24">
        <label>Name: </label>
        <input
          className="border-orange-400 border-2 rounded-md ml-2 px-2"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          type="text"
        />
      </div>
      <Button disabled={isDisabled} onClick={start}>
        PLAY!
      </Button>
    </section>
  );
};

export default NameForm;
