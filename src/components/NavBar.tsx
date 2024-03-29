import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (value: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="12px">
      <Image src={logo} boxSize={"60px"} />
      <SearchInput onSearch={(searchValue) => onSearch(searchValue)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
