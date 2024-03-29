import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

interface Props {
  onSortClick: (ordering: string) => void;
  selectedSort: string | null;
}

const SortDropDown = ({ onSortClick, selectedSort }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const item = sortOrders.find((order) => order.value === selectedSort);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FiChevronDown />}>
        Order By: {item ? item.label : "Relevance"}
      </MenuButton>
      <MenuList width={5}>
        {sortOrders.map((item, index) => (
          <MenuItem key={index} onClick={() => onSortClick(item.value)}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortDropDown;
