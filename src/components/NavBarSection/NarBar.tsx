import React from "react";
import NavBarContainer from "./NavBarContainer";
import { Input,InputGroup, InputRightElement, Image } from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import Hamburger from './Hamburger/Hamburger';
import { 
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react';

const NavBar = () => {

    return (
        <NavBarContainer>
            <Image src="JungleMeetLogoWhiteText.svg"/>
            <InputGroup w='525px' h='36px' >
                <Input
                    _placeholder={{ color: '#FFFFFF', fontSize: '16px', fontWeight: '400', lineHeight: '24px'}}
                    placeholder='What do you want to watch?'
                    borderRadius='6px'
                />
                <InputRightElement width='4.5rem'>
                    <SearchIcon color='#FFFFFF' boxSize='12px'/>
                </InputRightElement>
            </InputGroup>
            <Link color='#FFFFFF' fontSize='16px' fontWeight='700' lineHeight='24px'>Sign in</Link>
            <Hamburger/>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} border='none' bgColor='transparent' color='#FFFFFF'>
                EN
                </MenuButton>
                <MenuList>
                    <MenuItem>Chinese</MenuItem>
                </MenuList>
            </Menu>
        </NavBarContainer>
    )
}

export default NavBar;
