import { Image, Menu, MenuButton } from "@chakra-ui/react";
import styled from "styled-components";
import HamburgerDropdown from "./HamburgerDropdown";
import { TbMovie } from "react-icons/tb";
import { HiOutlineFire } from "react-icons/hi";
import { MdPeopleOutline } from "react-icons/md";

const HamburgerContainer = styled.div`
  border-radius: 50%;
  background-color: #be123c;
  padding: 13.2px 9.6px;
`;

const Hamburger = () => {
    const MENU_ITEMS = [
        {
            itemIcon: TbMovie,
            command: "",
            content: "All Movies",
        },
        {
            itemIcon: HiOutlineFire,
            command: "",
            content: "Now Playing",
        },
        {
            itemIcon: MdPeopleOutline,
            command: "",
            content: "Movie Discussion",
        },
    ];
    return (
        <Menu offset={[-160, 10]}>
            <MenuButton>
                <HamburgerContainer>
                    <Image src="/hamburger.svg" />
                </HamburgerContainer>
            </MenuButton>
            <HamburgerDropdown menuList={MENU_ITEMS} menuTitle="Menu" />
        </Menu>
    );
};

export default Hamburger;
