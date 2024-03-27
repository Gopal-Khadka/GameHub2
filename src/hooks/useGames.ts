import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
interface FetchGameResponse {
  count: number;
  results: Game[];
}

interface Game {
  id: number;
  name: string;
  background_image: string;
  released: number;
  slug: string;
  rating: number;
}

const endpoint = "/games";
function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get(endpoint)
      .then(({ data: { results } }: { data: FetchGameResponse }) => {
        const game_datas = results.map(
          ({ background_image, id, name, released, slug, rating }) => {
            return {
              id,
              name,
              background_image,
              released,
              slug,
              rating,
            };
          }
        );
        setGames(game_datas);
      })
      .catch((err: AxiosError) => {
        setError(err.message);
      });
  }, []);
  return { games, error };
}

export default useGames;
