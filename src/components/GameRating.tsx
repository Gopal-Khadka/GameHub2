import { HStack } from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Props {
  rating: number;
}

const GameRating = ({ rating }: Props) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 != 0;
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-star-${i}`} />);
  }
  if (hasHalfStar) stars.push(<FaStarHalfAlt key="half-star" />);
  return (
    <HStack title={`${rating}`} marginY={2}>
      {stars.map((star) => star)}
    </HStack>
  );
};

export default GameRating;
