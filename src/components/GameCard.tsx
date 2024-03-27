import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
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

        <HStack justifyContent={"space-between"}>
          <PlatformIcon
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore metacritic={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
