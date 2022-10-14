import { Image, Menu, MenuButton } from "@chakra-ui/react";
import styled from "styled-components";
import HamburgerDropdown from "./HamburgerDropdown";

const HamburgerContainer = styled.div`
  border-radius: 50%;
  background-color: #be123c;
  padding: 13.2px 9.6px;
`;

const Hamburger = () => {
    return (
        <Menu offset={[70, 10]}>
            <MenuButton>
                <HamburgerContainer>
                    <Image src="./hamburger.svg" />
                </HamburgerContainer>
            </MenuButton>
            <HamburgerDropdown />
        </Menu>
    );
};

export default Hamburger;
