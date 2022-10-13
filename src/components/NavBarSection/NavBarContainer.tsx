import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavBarContainerProps {
    children: ReactNode;
    bgColor: string;
}
const NavBarContainer = ({ children, bgColor }: NavBarContainerProps) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            h="80px"
            bg="#0A0202"
            maxW="1440px"
            m="auto"
            zIndex="999"
            position="absolute"
            left="50%"
            transform="translate(-50%)"
            backgroundColor={bgColor}
        >
            {children}
        </Flex>
    );
};

export default NavBarContainer;
