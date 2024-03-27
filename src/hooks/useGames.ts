import { AxiosError, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
export interface FetchGameResponse {
  count: number;
  results: Game[];
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

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

const endpoint = "/games";
function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get(endpoint, { signal: controller.signal })
      .then(({ data: { results } }: { data: FetchGameResponse }) => {
        const game_datas = results.map(
          ({
            background_image,
            id,
            name,
            released,
            slug,
            rating,
            parent_platforms,
            metacritic,
          }) => {
            return {
              id,
              name,
              background_image,
              released,
              slug,
              rating,
              parent_platforms,
              metacritic,
            };
          }
        );
        setGames(game_datas);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);
  return { games, error };
}

export default useGames;
