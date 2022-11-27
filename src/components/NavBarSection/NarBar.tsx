import React from "react";
import NavBarContainer from "./NavBarContainer";
import { Image } from "@chakra-ui/react";
import IconContainer from "./IconContainer/IconContainer";
import Link from "next/link";
import SearchBar from "@components/SearchBar/SearchBar";
import { useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { SearchIcon } from "@chakra-ui/icons";

const NavBar = () => {
    const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
    const [isSmallerThan60em] = useMediaQuery("(max-width: 60em)");
    const [showSearchBar, setShowSearchBar] = useState(false);

    const handleClick = () => {
        setShowSearchBar(true);
    };

    useEffect(() => {
        if (isSmallerThan60em !== isMinWidthMedium) {
            setIsMinWidthMedium(isSmallerThan60em);
        }
        setShowSearchBar(false);
    }, [isSmallerThan60em]);

    return (
        <NavBarContainer>
            {!isMinWidthMedium ? (
                <>
                    <Link href="/">
                        <Image src="/JungleMeetLogoWhiteText.svg" ml="3.3%" cursor="pointer" alt="logo" />
                    </Link>
                    <SearchBar maxWidth="525px" />
                    <IconContainer showSearchBar={showSearchBar} />
                </>
            ) : (
                <>
                    <Link href="/">
                        <Image src="/JungleMeetLogoWhiteText.svg" ml="3.3%" cursor="pointer" alt="logo" />
                    </Link>
                    {showSearchBar ? (
                        <SearchBar maxWidth="100%" />
                    ) : (
                        <SearchIcon color="white" ml="auto" mr="-5px" onClick={handleClick} />
                    )}
                    <IconContainer showSearchBar={showSearchBar} />
                </>
            )}
            {/* {
                showSearchBar
                    ?
                    <Box ml='5%' mr='5%' w='100%'>
                        <SearchBar maxWidth='100%'/>
                    </Box>
                    
                    :
                    <>
                        <Link href="/">
                            <Image src="/JungleMeetLogoWhiteText.svg" ml="3.3%" cursor="pointer" alt="logo" />
                        </Link>
                        {!isMinWidthMedium && <SearchBar maxWidth='525px'/>}
                        {isMinWidthMedium && <SearchIcon color='white' ml= 'auto' mr='-50px' onClick={handleClick}/>}
                        
                        <IconContainer />
                    </>
            } */}
            {/* <Link href="/">
                <Image src="/JungleMeetLogoWhiteText.svg" ml="3.3%" cursor="pointer" alt="logo" />
            </Link>
            {!isMinWidthMedium && <SearchBar maxWidth='525px'/>}
            {isMinWidthMedium && <SearchIcon color='white' ml= 'auto' mr='-50px' onClick={handleClick}/>}
            <IconContainer /> */}
        </NavBarContainer>
    );
};

export default NavBar;
