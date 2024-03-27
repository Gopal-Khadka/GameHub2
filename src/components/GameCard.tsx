import { Card, Image, CardBody, Heading, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"xx-large"}>{game.name}</Heading>
        <Text>{game.rating}</Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
