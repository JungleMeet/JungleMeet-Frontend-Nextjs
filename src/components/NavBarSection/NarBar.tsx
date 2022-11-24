import React from "react";
import NavBarContainer from "./NavBarContainer";
import { Image } from "@chakra-ui/react";
import IconContainer from "./IconContainer/IconContainer";
import Link from "next/link";
import SearchBar from "@components/SearchBar/SearchBar";

const NavBar = () => {
    return (
        <NavBarContainer>
            <Link href="/">
                <Image src="/JungleMeetLogoWhiteText.svg" ml="3.3%" cursor="pointer" alt="logo" />
            </Link>
            <SearchBar />
            <IconContainer />
        </NavBarContainer>
    );
};

export default NavBar;
