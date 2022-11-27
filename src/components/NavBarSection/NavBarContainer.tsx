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
            gap={["14px", "14px", "60px"]}
            w="100%"
            h="80px"
            maxW="inherit"
            m="auto"
            zIndex="999"
            position="sticky"
            top="0"
            backgroundColor="rgba(0,0,0,0.85)"
            backdropFilter="grayscale(0.5) opacity(0.8)"
        >
            {children}
        </Flex>
    );
};

export default NavBarContainer;
