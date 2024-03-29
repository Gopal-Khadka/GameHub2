import useData from "./useData";
import { Genre } from "./useGenres";

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

let endpoint = "/games";
const useGames = (selectedGenre: Genre | null) => {
  return useData<Game>(endpoint, { params: { genres: selectedGenre?.slug } }, [
    selectedGenre?.id,
  ]);
};

export default useGames;
