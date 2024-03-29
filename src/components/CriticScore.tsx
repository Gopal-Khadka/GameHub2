import { Badge } from "@chakra-ui/react";
interface Props {
  metacritic: number;
}
const CriticScore = ({ metacritic }: Props) => {
  let color = metacritic > 75 ? "green" : metacritic > 60 ? "yellow" : "";
  return (
    <Badge
      title={`${metacritic}`}
      cursor="pointer"
      borderRadius={2}
      paddingX={2}
      fontSize="14px"
      colorScheme={color}
    >
      {metacritic}
    </Badge>
  );
};

export default CriticScore;
