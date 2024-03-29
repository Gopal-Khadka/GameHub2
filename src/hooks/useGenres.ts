import genres from "../data/genres";

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
const useGenres = () => ({ datas: genres, isLoading: false, error: null });

export default useGenres;
