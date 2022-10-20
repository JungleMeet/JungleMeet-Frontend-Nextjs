import { MenuList } from "@chakra-ui/react";
import {
    AiOutlineSetting,
    AiOutlineMessage,
    AiOutlineFileImage,
    AiOutlineSearch,
} from "react-icons/ai";
import HamburgerDropdownItem from "./HamburgerDropdownItem";
import styled from "styled-components";

const MenuListTitle = styled.span`
    padding-left: 15px;
`;

const HamburgerDropdown = () => {
    const MENU_ITEMS = [
        {
            itemIcon: AiOutlineSetting,
            command: "",
            content: "Settings",
        },
        {
            itemIcon: AiOutlineMessage,
            command: "",
            content: "Messages",
        },
        {
            itemIcon: AiOutlineFileImage,
            command: "",
            content: "Gallery",
        },
        {
            itemIcon: AiOutlineSearch,
            command: "⌘K",
            content: "Search",
        },
    ];
    return (
        <>
            <MenuList minW="180px">
                <MenuListTitle>Application</MenuListTitle>
                {MENU_ITEMS.map(({ itemIcon, ...rest }) => (
                    <HamburgerDropdownItem key={rest.content} Icon={itemIcon} {...rest} />
                ))}
            </MenuList>
        </>
    );
};

export default HamburgerDropdown;
