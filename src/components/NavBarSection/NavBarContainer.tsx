import { Flex } from "@chakra-ui/react";
import { ReactNode } from 'react';

interface NavBarContainerProps {
    children: ReactNode;
}
const NavBarContainer = ({ children } : NavBarContainerProps) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            h="80px"
            bg='#0A0202'
            maxW='1440px'
            m='auto'

        >
            {children}
        </Flex>
    )
}

export default NavBarContainer;
