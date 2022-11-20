import { Avatar, Box, Text } from "@chakra-ui/react";
import styled, { css } from "styled-components";
import { ItemProps } from "../NavBarSection/IconContainer/NotificationDropdownItem";
import { useEffect, useState } from "react";
import { readSingleNotifications } from "@/utils/axiosNotificationApi";

const viewedStyle = css`
  ::after {
    content: "·";
    position: absolute;
    top: -5px;
    right: -23px;
    font-size: 50px;
    color: red;
  }
`;

interface IMessageItemContainer {
    isViewed: boolean;
}
const MessageItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 10px;
  padding-top: 20px;
  position: relative;
  ${({ isViewed }: IMessageItemContainer) => !isViewed && viewedStyle}
`;
const MessageItem = ({
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
        <MessageItemContainer isViewed={viewed} onClick={handleClick}>
            <Avatar
                w="25px"
                h="25px"
                borderRadius="full"
                name={triggerUserName}
                src={triggerUserAvatar}
                mr="10px"
                fontSize="text6"
            />
            <Box
                noOfLines={1}
                fontSize="text6"
                fontFamily="secondary"
                lineHeight="lh16"
                fontWeight="400"
                mr="auto"
            >
                {content}
            </Box>
            <Text color="gray.400" fontSize="text7" fontWeight="400" fontFamily="secondary">
                {createTime}
            </Text>
        </MessageItemContainer>
    );
};

export default MessageItem;
