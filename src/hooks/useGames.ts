import useData from "./useData";

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
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const endpoint = "/games";
const useGames = () => useData<Game>(endpoint);

export default useGames;
