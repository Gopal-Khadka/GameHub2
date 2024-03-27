import { Box } from "@chakra-ui/react";
interface Props {
  critic_score: number;
}
const CriticScore = ({ critic_score }: Props) => {
  return <Box>{critic_score}</Box>;
};

export default CriticScore;
