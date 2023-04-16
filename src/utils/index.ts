import { TileContent } from "../models/types";

export const shuffle = (array: TileContent[]) => {
  return array.sort(() => Math.random() - 0.5);
};
