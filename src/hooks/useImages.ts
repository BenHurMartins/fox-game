import { useEffect, useState } from "react";
import { TileContent } from "../models/types";
import { fetchData } from "../api";

export const useImages = () => {
  const [currentSet, setCurrentSet] = useState<TileContent[]>([]);
  const [nextSet, setNextSet] = useState<TileContent[]>([]);

  const fetchInitialSet = async () => {
    const first = await fetchData();
    const second = await fetchData();
    second.forEach((img) => {
      const i = new Image();
      i.src = img.image;
    });
    setCurrentSet(first);
    setNextSet(second);
  };

  const next = async () => {
    setCurrentSet(nextSet);
    const result = await fetchData();
    setNextSet(result);
    result.forEach((img) => {
      const i = new Image();
      i.src = img.image;
    });
  };

  useEffect(() => {
    fetchInitialSet();
  }, []);

  return {
    currentSet,
    next,
  };
};
