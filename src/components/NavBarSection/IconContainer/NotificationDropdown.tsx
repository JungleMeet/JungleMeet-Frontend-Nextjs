import styled from "styled-components";
import { MenuList, Icon } from "@chakra-ui/react";
import { MenuListTitle } from "../Hamburger/HamburgerDropdown";
import NotificationDropdownItem from "./NotificationDropdownItem";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const NotificationTitle = styled(MenuListTitle)``;
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
}
const NotificationDropdown = ({ menuList, menuTitle }: INotificationDropdown) => {
    return (
        <>
            <MenuList
                minW="180px"
                p="0"
                pl="21px"
                pr="21px"
                maxW="224px"
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
                {menuList.map(({ _id, ...rest }) => (
                    <NotificationDropdownItem key={_id} {...rest} />
                ))}
                <div>
                    <Icon as={ArrowLeftIcon}></Icon>
                    <Icon as={ArrowRightIcon}></Icon>
                </div>
            </MenuList>
        </>
    );
};

export default NotificationDropdown;
