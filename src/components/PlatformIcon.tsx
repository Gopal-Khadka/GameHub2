import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaXbox,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo, SiSega } from "react-icons/si";
import { MdPhoneIphone, MdInbox } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiAtari } from "react-icons/si";
import { IconType } from "react-icons";
import { GiGameConsole } from "react-icons/gi";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  platforms: Platform[];
}

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
  atari: SiAtari,
  sega: SiSega,
  "neo-geo": MdInbox,
  "3do": GiGameConsole,
};

const PlatformIcon = ({ platforms }: Props) => {
  return (
    <HStack spacing={3} marginY={2} justifyContent={"space-between"}>
      {platforms.map(({ slug, name, id }) => {
        return (
          <Icon
            key={id}
            as={iconMapper[slug]}
            title={name}
            color="gray.500"
            cursor="pointer"
          />
        );
      })}
    </HStack>
  );
};

export default PlatformIcon;
