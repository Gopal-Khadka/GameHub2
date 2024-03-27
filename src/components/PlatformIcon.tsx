import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaXbox,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const returnIcon = (slug: string) => {
  const iconMapper: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return iconMapper[slug];
};

const PlatformIcon = ({ platforms }: Props) => {
  return (
    <HStack spacing={5} marginY={2}>
      {platforms.map(({ slug, name, id }) => {
        return (
          <Icon key={id} as={returnIcon(slug)} title={name} color="gray.500" />
        );
      })}
    </HStack>
  );
};

export default PlatformIcon;