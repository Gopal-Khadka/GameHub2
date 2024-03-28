import { VStack, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { datas: genres } = useGenres();
  return (
    <VStack>
      {genres.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </VStack>
  );
};

export default GenreList;
