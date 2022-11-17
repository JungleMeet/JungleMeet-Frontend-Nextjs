import { MenuItem } from "@chakra-ui/react";
import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

interface ItemProps {
    // key: string;
    Icon: IconType;
    command: string;
    content: string;
    color?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const HamburgerDropdownItem = ({ Icon, command, content, ...rest }: ItemProps) => {
    return (
        <MenuItem icon={<Icon />} command={command} {...rest} mb="18px" p="0">
            {content}
        </MenuItem>
    );
};

export default HamburgerDropdownItem;
