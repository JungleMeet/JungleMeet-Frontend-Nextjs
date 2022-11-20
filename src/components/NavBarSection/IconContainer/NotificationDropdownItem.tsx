import { MenuItem, Avatar, Box, Text } from "@chakra-ui/react";
import styled, { css } from "styled-components";
import { readSingleNotifications } from "@/utils/axiosNotificationApi";
import { useEffect, useState } from "react";
export interface ItemProps {
    _id: string;
    triggerUserName: string;
    triggerUserAvatar: string;
    content: string;
    viewed: boolean;
    createTime: string;
    hasRead: boolean;
    setHasRead: (value: boolean) => void;
}

const viewedStyle = css`
  ::after {
    content: "·";
    position: absolute;
    top: -21px;
    right: 13px;
    font-size: 50px;
    color: red;
  }
`;
interface INotificationsContent {
    isViewed: boolean;
}

const NotificationsContent = styled.div`
  ${({ isViewed }: INotificationsContent) => !isViewed && viewedStyle}
`;

const NotificationDropdownItem = ({
    _id,
    triggerUserName,
    triggerUserAvatar,
    content,
    viewed,
    createTime,
    hasRead,
    setHasRead,
}: ItemProps) => {
    const [stateToken, setStateToken] = useState<string | null>("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        setStateToken(token);
    }, []);

    const handleClick = async () => {
        try {
            await readSingleNotifications(_id, stateToken);
            setHasRead(!hasRead);
        } catch (error) {
            return error;
        }
    };
    return (
        <MenuItem mb="18px" p="0" pl="15px" pr="27px" position="relative" onClick={handleClick}>
            <Avatar
                w="25px"
                h="25px"
                borderRadius="full"
                name={triggerUserName}
                src={triggerUserAvatar}
                mr="12px"
                fontSize="text6"
            />
            <NotificationsContent isViewed={viewed}>
                <Box
                    noOfLines={2}
                    fontSize="text6"
                    fontFamily="secondary"
                    lineHeight="lh16"
                    fontWeight="400"
                >
                    {content}
                </Box>
                <Text color="gray.400" fontSize="text7" fontWeight="400" fontFamily="secondary">
                    {createTime}
                </Text>
            </NotificationsContent>
        </MenuItem>
    );
};

export default NotificationDropdownItem;
