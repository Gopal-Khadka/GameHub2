import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import usePlatforms from "../hooks/usePlatforms";

const PlatformDropDown = () => {
  const { datas: platforms, error } = usePlatforms();
  if (error) return null;
  return (
    <Box marginBottom={5}>
      <Menu>
        <MenuButton as={Button} rightIcon={<FiChevronDown />}>
          Platforms
        </MenuButton>
        <MenuList width={5}>
          {platforms.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformDropDown;
