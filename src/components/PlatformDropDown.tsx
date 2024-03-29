import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onPlatformClick: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformDropDown = ({ selectedPlatform, onPlatformClick }: Props) => {
  const { datas: platforms, error } = usePlatforms();
  if (error) return null;
  return (
    <Box marginBottom={5}>
      <Menu>
        <MenuButton as={Button} rightIcon={<FiChevronDown />}>
          {selectedPlatform ? selectedPlatform.name : "Platforms"}
        </MenuButton>
        <MenuList width={5}>
          {platforms.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onPlatformClick(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformDropDown;
