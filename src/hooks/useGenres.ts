import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: Game[];
}
interface Game {
  id: number;
  slug: string;
  name: string;
  added: number;
}

const endpoint = "/genres";
const useGenres = () => useData<Genre>(endpoint);

export default useGenres;
