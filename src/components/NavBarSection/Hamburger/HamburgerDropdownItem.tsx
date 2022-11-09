import { MenuItem } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface ItemProps {
    // key: string;
    Icon: IconType;
    command: string;
    content: string;
}

const HamburgerDropdownItem = ({ Icon, command, content }: ItemProps) => {
    return (
        <MenuItem icon={<Icon />} command={command} mb='18px' p="0">
            {content}
        </MenuItem>
    );
};

export default HamburgerDropdownItem;
