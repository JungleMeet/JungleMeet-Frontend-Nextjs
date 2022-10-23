import React from "react";
import NavBarContainer from "./NavBarContainer";
import { Input, InputGroup, InputRightElement, Image } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import IconContainer from "./IconContainer/IconContainer";

const NavBar = () => {
    return (
        <NavBarContainer>
            <Image src="JungleMeetLogoWhiteText.svg" ml="48px" />
            <InputGroup w="525px" h="36px">
                <Input
                    _placeholder={{
                        color: "#FFFFFF",
                        fontSize: "text4",
                        fontWeight: "400",
                        lineHeight: "lh24",
                    }}
                    placeholder="What do you want to watch?"
                    borderRadius="6px"
                    fontFamily="secondary"
                />
                <InputRightElement width="4.5rem">
                    <SearchIcon color="#FFFFFF" boxSize="12px" />
                </InputRightElement>
            </InputGroup>
            <IconContainer />
        </NavBarContainer>
    );
};

export default NavBar;
