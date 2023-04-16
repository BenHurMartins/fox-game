/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import { useImages } from "../hooks/useImages";
import GameTile from "./GameTile";
import { useGameController } from "../contexts/GameControllerProvider";

interface IGameBoard {}

const GameBoard: FC<IGameBoard> = () => {
  const { currentSet, next } = useImages();
  const { gameScore, scoreDown, scoreUp, gameOver } = useGameController();
  const [imgReadyCount, setImageReadyCount] = useState(0);
  const [countdown, setCountdown] = useState(30);

  const showImages = imgReadyCount === 9; // only shows the images when all images are ready
  const imageReady = () => {
    setImageReadyCount((c) => {
      if (c === 9) return c;
      return c + 1;
    });
  };

  const onNext = () => {
    next();
    setImageReadyCount(0);
  };

  useEffect(() => {
    const timerID = setInterval(() => {
      setCountdown((c) => {
        if (c === 0) return 0;
        return c - 1;
      });
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  useEffect(() => {
    countdown === 0 && gameOver();
  }, [countdown]);

  const onImageClick = (isFox: boolean) => {
    if (isFox) {
      scoreUp();
    } else {
      scoreDown();
    }
    onNext();
  };

  return (
    <section>
      <div className="w-96 flex justify-between mb-8">
        <span className="w-36 ">Score: {gameScore}</span>
        <span className="w-36 ">Time left: {countdown}</span>
      </div>
      <div className="grid w-96 h-96 grid-rows-3 grid-cols-3 ">
        {currentSet.map((img, i) => {
          return (
            <GameTile
              key={img.image}
              url={img.image}
              isFox={img.isFox}
              imageReady={imageReady}
              showImage={showImages}
              onClick={onImageClick}
              next={onNext}
            />
          );
        })}
      </div>
    </section>
  );
};

export default GameBoard;
