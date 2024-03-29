import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GamesHeading = ({ gameQuery: { platform, genre } }: Props) => {
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginBottom={5} as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GamesHeading;
