import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

const SortDropDown = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FiChevronDown />}>
        Order By: Relevance
      </MenuButton>
      <MenuList width={5}>
        <MenuItem> Relevance</MenuItem>
        <MenuItem> Date Added</MenuItem>
        <MenuItem> Name</MenuItem>
        <MenuItem> Release date</MenuItem>
        <MenuItem> Popularity</MenuItem>
        <MenuItem> Average Rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortDropDown;
