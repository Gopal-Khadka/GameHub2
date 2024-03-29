import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  released: number;
  slug: string;
  rating: number;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

let endpoint = "/games";
const useGames = (gameQuery: GameQuery) => {
  return useData<Game>(
    endpoint,
    {
      params: {
        genres: gameQuery.genre?.slug,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.ordering,
      },
    },
    [gameQuery]
  );
};

export default useGames;
