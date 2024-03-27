import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";
import { Text } from "@chakra-ui/react";

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

const GameGrid = () => {
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

  return (
    <>
      {error && <Text color={"red"}>{error} </Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}> {game.name} </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
