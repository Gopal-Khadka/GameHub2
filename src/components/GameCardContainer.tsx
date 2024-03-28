import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useColorMode } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      borderRadius={10}
      overflow={"hidden"}
      border={colorMode === "light" ? "1px gray solid" : ""}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
