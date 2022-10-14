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
    const menuItemArray = [
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
                {menuItemArray.map((item) => (
                    <HamburgerDropdownItem
                        key={item.content}
                        icon={item.itemIcon}
                        command={item.command}
                        content={item.content}
                    />
                ))}
            </MenuList>
        </>
    );
};

export default HamburgerDropdown;
