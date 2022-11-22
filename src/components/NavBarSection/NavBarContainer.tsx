import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavBarContainerProps {
    children: ReactNode;
}
const NavBarContainer = ({ children }: NavBarContainerProps) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            gap='10px'
            w="100%"
            h="80px"
            maxW="1440px"
            m="auto"
            zIndex="999"
            position="fixed"
            backgroundColor="rgba(0,0,0,0.85)"
            backdropFilter="grayscale(0.5) opacity(0.8)"
        >
            {children}
        </Flex>
    );
};

export default NavBarContainer;
