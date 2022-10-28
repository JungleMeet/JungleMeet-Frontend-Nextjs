import styled from "styled-components";
import Hamburger from "../Hamburger/Hamburger";
import {
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import LoginModal from "../../Login/LoginModal";

const IconContainerStyles = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-right: 84.75px;
`;

const IconContainer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <IconContainerStyles>
            <Link
                color="#FFFFFF"
                fontSize="text4"
                fontWeight="700"
                lineHeight="lh24"
                fontFamily="secondary"
                onClick={onOpen}
            >
        Log in/ Sign up
            </Link>
            <LoginModal isOpen={isOpen} onClose={onClose} />
            <Hamburger />
            <Menu offset={[-30, 10]}>
                <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    border="none"
                    bgColor="transparent"
                    color="#FFFFFF"
                    w="42px"
                    h="24px"
                    fontSize="text4"
                    fontFamily="secondary"
                    p="0"
                    _focus={{ border: "none" }}
                    _hover={{ backgroundColor: "none" }}
                    _active={{ backgroundColor: "none" }}
                >
          EN
                </MenuButton>
                <MenuList w="100%" minW="100px">
                    <MenuItem h="20px" justifyContent="center">
            Chinese
                    </MenuItem>
                </MenuList>
            </Menu>
        </IconContainerStyles>
    );
};

export default IconContainer;
