import useData from "./useData";
import { Genre } from "./useGenres";
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
interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

let endpoint = "/games";
const useGames = ({ selectedGenre, selectedPlatform }: Props) => {
  return useData<Game>(
    endpoint,
    {
      params: {
        genres: selectedGenre?.slug,
        parent_platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );
};

export default useGames;
