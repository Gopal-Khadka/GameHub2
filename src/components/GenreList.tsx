import {
  Text,
  Image,
  HStack,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-crop-url";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const GenreList = () => {
  const { datas: genres, isLoading } = useGenres();

  return (
    <List>
      {isLoading &&
        items.map((item) => {
          return (
            <Skeleton
              key={item}
              height={"50px"}
              borderRadius={5}
              marginY={4}
              width={"150px"}
            />
          );
        })}
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
