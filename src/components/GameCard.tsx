import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-crop-url";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height="400px">
      <Image src={getCroppedImageUrl(game.background_image)} />
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
