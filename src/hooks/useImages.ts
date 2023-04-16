import { useEffect, useState } from "react";
import {
  CatResponse,
  DogResponse,
  FoxResponse,
  TileContent,
} from "../models/types";

export const CAT_URL = "https://api.thecatapi.com/v1/images/search?limit=4";
export const FOX_URL = "https://randomfox.ca/floof/";
export const DOG_URL = "https://dog.ceo/api/breeds/image/random/4";

const fetchCats = async () => {
  try {
    const data = await fetch(CAT_URL);
    const result = (await data.json()) as CatResponse[];
    return result.slice(0, 4).map((c) => c.url);
  } catch (error) {
    throw new Error("Error trying to fetch cats");
  }
};

const fetchFox = async () => {
  try {
    const data = await fetch(FOX_URL);
    const result = (await data.json()) as FoxResponse;

    return result.image;
  } catch (error) {
    throw new Error("Error trying to fetch Fox");
  }
};

const fetchDogs = async () => {
  try {
    const data = await fetch(DOG_URL);
    const result = (await data.json()) as DogResponse;

    return result.message;
  } catch (error) {
    throw new Error("Error trying to fetch Dog");
  }
};

const fetchData = async () => {
  try {
    const values = await Promise.all([fetchCats(), fetchDogs(), fetchFox()]);

    const result = values[0]
      .concat(values[1])
      .map((i) => ({ isFox: false, image: i })); //get dogs and cat as non fox
    result.push({ isFox: true, image: values[2] }); // add fox value to the array
    return shuffle(result);
  } catch (error) {
    throw new Error("failed to fetch data");
  }
};

const shuffle = (array: TileContent[]) => {
  return array.sort(() => Math.random() - 0.5);
};

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
