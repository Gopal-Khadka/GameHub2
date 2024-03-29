import {
  Link,
  Image,
  HStack,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-crop-url";

interface Props {
  onLinkClick: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const GenreList = ({ onLinkClick, selectedGenre }: Props) => {
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
            <Link
              fontSize="large"
              key={genre.id}
              fontWeight={selectedGenre?.id == genre.id ? "bold" : "normal"}
              onClick={() => onLinkClick(genre)}
            >
              {genre.name}
            </Link>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
