import { MenuItem } from "@chakra-ui/react";
import { MouseEventHandler } from "react";
import { IconType } from "react-icons";
import Link from "next/link";

interface ItemProps {
    // key: string;
    Icon: IconType;
    command: string;
    content: string;
    color?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    href: string;
}

const HamburgerDropdownItem = ({ Icon, command, content, href, ...rest }: ItemProps) => {
    return (
        <Link href={href}>
            <MenuItem as="a" cursor="pointer" icon={<Icon />} command={command} {...rest} mb="18px" p="0">
                {content}
            </MenuItem>
        </Link>
    );
};

export default HamburgerDropdownItem;
