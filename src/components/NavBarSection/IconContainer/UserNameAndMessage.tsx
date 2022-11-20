import { Image } from "@chakra-ui/react";
import styled from "styled-components";
import { Menu, MenuButton, Button, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import HamburgerDropdown from "../Hamburger/HamburgerDropdown";
import { CgProfile } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { io, Socket } from "socket.io-client";
import { useEffect, useState } from "react";
import { GoSignOut } from "react-icons/go";
import { logout } from "@/app/reducer/loginSlice";
import { newMessage } from "@/app/reducer/notificationSlice";
import { getNotifications } from "@/utils/axiosNotificationApi";
import formatNotificationData from "@/utils/formatNotificationData";
import NotificationDropdown from "./NotificationDropdown";
import { IformatNotificationData } from "@/utils/formatNotificationData";

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
  top: -11px;
  right: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ServerToClientEvents {
    message: (callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
    roomsatu: (value: {}) => void;
}

let socket: Socket<ServerToClientEvents, ClientToServerEvents>;

const UserNameAndMessage = () => {
    const userInfo = useSelector((state: any) => state.login.userInfo);
    const { userName, userRole, userId } = userInfo;
    // eslint-disable-next-line no-unused-vars
    const [pageNumber, setPageNumber] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const limit = 5;
    const [unReadMessageLength, setUnReadMessageLength] = useState(0);
    const [currentPageNotice, setCurrentPageNotice] = useState([]);
    const [hasRead, setHasRead] = useState(false);
    const firstName = userName.split(" ")[0];
    const hasNewMessage = useSelector((state: any) => state.notification.hasNewMessage);

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("userInfo");
        localStorage.removeItem("token");
    };

    const MENU_ITEMS = [
        {
            itemIcon: CgProfile,
            command: "",
            content: "My Profile",
            href: "/userprofile/" + userInfo.userId,
        },
        {
            itemIcon: FiEdit,
            command: "",
            content: "Write a Post",
            href: "",
        },
        {
            itemIcon: GoSignOut,
            command: "",
            content: "Log out",
            color: "red",
            onClick: handleLogout,
        },
    ];

    useEffect(() => {
        socket = io("http://localhost:3000", { query: { userId: userId }, transports: ["websocket"] });
        socket.on("connect", () => {
            console.log("connect client");
        });
        socket.on("message", (data) => {
            console.log(data);
            dispatch(newMessage());
            // setHasNewMessage(!hasNewMessage);
        });
        return () => {
            socket.off("connect");
        };
    }, [hasNewMessage, hasRead]);

    useEffect(() => {
    // console.log('hasnewmessage',hasNewMessage);
        const token = localStorage.getItem("token");
        const fetchNotifications = async () => {
            try {
                const res = await getNotifications({ pageNumber, limit, token });
                const { data } = res;
                const formatData = data.notifications.map((item: IformatNotificationData) =>
                    formatNotificationData(item)
                );
                setUnReadMessageLength(data.lengthOfUnread);
                setCurrentPageNotice(formatData);
            } catch (err) {
                return err;
            }
        };
        fetchNotifications();
    }, [hasNewMessage, hasRead]);

    return (
        <>
            <Menu offset={[-225, 10]}>
                <MenuButton
                    as={Button}
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
                    <MessageContainer>
                        <Image src="/message.svg" />
                        {unReadMessageLength > 0 && <BadgeContainer>{unReadMessageLength}</BadgeContainer>}
                    </MessageContainer>
                </MenuButton>
                <NotificationDropdown
                    menuList={currentPageNotice}
                    menuTitle="Notification"
                    setHasRead={setHasRead}
                    hasRead={hasRead}
                ></NotificationDropdown>
            </Menu>

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
