import { Image } from "@chakra-ui/react";
import styled from "styled-components";
import { Menu, MenuButton, Button, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import HamburgerDropdown from "../Hamburger/HamburgerDropdown";
import { CgProfile } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { useSelector } from "react-redux";

const MessageContainer = styled.div`
  position: relative;
`;
const BadgeContainer = styled.div`
  position: absolute;
  background-color: #ff0000;
  border-radius: 50%;
  width: 21px;
  height: 21px;
  font-family: "DM Sans";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
  top: -12px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserNameAndMessage = () => {
    const userInfo = useSelector((state: any) => state.login.userInfo);
    const { userName, userRole } = userInfo;
    const firstName = userName.split(" ")[0];

    const MENU_ITEMS = [
        {
            itemIcon: CgProfile,
            command: "",
            content: "My Profile",
        },
        {
            itemIcon: FiEdit,
            command: "",
            content: "Write a Post",
        },
        
    ];
    return (
        <>
            <MessageContainer>
                <Image src="/message.svg" />
                <BadgeContainer>1</BadgeContainer>
            </MessageContainer>
            <Menu offset={[-91, 10]}>
                <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    border="none"
                    bgColor="transparent"
                    color="#FFFFFF"
                    w="auto"
                    h="24px"
                    fontSize="text4"
                    fontFamily="secondary"
                    p="0"
                    _focus={{ border: "none" }}
                    _hover={{ backgroundColor: "none" }}
                    _active={{ backgroundColor: "none" }}
                >
                    <Text>{firstName}</Text>
                </MenuButton>
                <HamburgerDropdown
                    menuList={MENU_ITEMS}
                    menuTitle={userRole === "user" ? "General_User" : "Admin"}
                ></HamburgerDropdown>
            </Menu>
        </>
    );
};

export default UserNameAndMessage;
