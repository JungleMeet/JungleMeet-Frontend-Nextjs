import styled from "styled-components";
import { MenuList, MenuDivider, Text } from "@chakra-ui/react";
import { MenuListTitle } from "../Hamburger/HamburgerDropdown";
import NotificationDropdownItem from "./NotificationDropdownItem";

const NotificationTitle = styled(MenuListTitle)`
  padding-left: 21px;
  padding-right: 21px;
`;
interface INotificationDropdown {
    menuList: {
        _id: string;
        triggerUserName: string;
        triggerUserAvatar: string;
        content: string;
        viewed: boolean;
        createTime: string;
    }[];
    menuTitle: string;
    hasRead: boolean;
    setHasRead: (value: boolean) => void;
}
const NotificationDropdown = ({
    menuList,
    menuTitle,
    hasRead,
    setHasRead,
}: INotificationDropdown) => {
    return (
        <>
            <MenuList
                minW="180px"
                p="0"
                maxW="260px"
                _before={{
                    position: "absolute",
                    content: "''",
                    width: "0",
                    height: "0px",
                    borderBottom: "15px solid white",
                    borderRight: " 15px solid transparent",
                    borderLeft: "15px solid transparent",
                    top: "-5px",
                    right: "5px",
                }}
            >
                <NotificationTitle>{menuTitle}</NotificationTitle>
                {menuList.map(({ ...rest }) => (
                    <NotificationDropdownItem
                        key={rest._id}
                        {...rest}
                        hasRead={hasRead}
                        setHasRead={setHasRead}
                    />
                ))}
                <MenuDivider />
                <Text
                    color="blue.500"
                    fontSize="text5"
                    textAlign="center"
                    mt="10px"
                    mb="10px"
                    fontWeight="400"
                    lineHeight="lh24"
                >
          See all recent activity
                </Text>
            </MenuList>
        </>
    );
};

export default NotificationDropdown;
