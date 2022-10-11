import { Flex, useColorModeValue } from "@chakra-ui/react";
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
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg={useColorModeValue("gray.100", "gray.900")}
        >
            {children}
        </Flex>
    );
};

export default NavBarContainer;
