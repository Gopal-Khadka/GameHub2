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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get(endpoint, { signal: controller.signal })
      .then(({ data: { results } }: { data: FetchGameResponse }) => {
        setGames(results);
        setIsLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { games, error, isLoading };
}

export default useGames;
