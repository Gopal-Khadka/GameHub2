import { Text, Image, HStack, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-crop-url";

const GenreList = () => {
  const { datas: genres } = useGenres();
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack boxSize="32px">
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={5}
            />
            <Text fontSize="large" key={genre.id}>
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
