/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Loading from "./Loading";

interface IGameBoard {
  url: string;
  imageReady: () => void;
  onClick: (arg: boolean) => void;
  isFox: boolean;
  showImage: boolean;
  next: () => void;
}

const GameTile: FC<IGameBoard> = ({
  url,
  imageReady,
  showImage,
  onClick,
  isFox,
  next,
}) => {
  return (
    <div className="flex justify-center items-center">
      {!showImage && (
        <div className="cursor-pointer" onClick={next}>
          <Loading />
        </div>
      )}
      <img
        className=" object-cover h-32 w-32 "
        src={url}
        alt="Animal pictures"
        hidden={!showImage}
        onLoad={imageReady}
        onClick={() => onClick(isFox)}
        onError={next}
      />
    </div>
  );
};

export default GameTile;
