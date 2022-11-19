import styled from "styled-components";
import { Text, Button } from "@chakra-ui/react";
import MessageItem from "./MessageItem";
import { useState, useEffect } from "react";
import { getNotifications } from "@/utils/axiosNotificationApi";
import { IformatNotificationData } from "@/utils/formatNotificationData";
import formatNotificationData from "@/utils/formatNotificationData";
import { useSelector } from "react-redux";
import { ItemProps } from "../NavBarSection/IconContainer/NotificationDropdownItem";

const MessageContainer = styled.div`
  background-color: #f3f4f6;
  margin-top: 14px;
  padding-top: 21px;
  padding-left: 31px;
  padding-right: 39.99px;
`;
interface IMessage {
    setIsLoading: (value: boolean) => void;
}

const Message = ({ setIsLoading }: IMessage) => {
    const [currentPageNotice, setCurrentPageNotice] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [pageNumber, setPageNumber] = useState(0);
    const [hasRead, setHasRead] = useState(false);
    const [totalLength, setTotalLength] = useState(0);
    const limit = 5;
    const hasNewMessage = useSelector((state: any) => state.notification.hasNewMessage);

    const handleClick = () => {
        const nextPage = pageNumber + 1;
        setPageNumber(nextPage);
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchNotifications = async () => {
            try {
                setIsLoading(true);
                const res = await getNotifications({ pageNumber, limit, token });
                setIsLoading(false);
                const { data } = res;
                setTotalLength(data.length);
                const formatData = data.notifications.map((item: IformatNotificationData) =>
                    formatNotificationData(item)
                );
                setCurrentPageNotice(formatData);
            } catch (err) {
                return err;
            }
        };
        fetchNotifications();
    }, [hasNewMessage, hasRead, pageNumber]);
    return (
        <MessageContainer>
            <Text
                fontSize="text5"
                lineHeight="lh32"
                fontWeight="500"
                position="relative"
                _after={{
                    content: '""',
                    width: "100%",
                    borderBottom: "solid 1px #E5E7EB",
                    left: 0,
                    top: "26px",
                    position: "absolute",
                }}
            >{`Total ${totalLength} messages`}</Text>
            {currentPageNotice.map(({ ...rest }: ItemProps) => (
                <MessageItem key={rest._id} {...rest} hasRead={hasRead} setHasRead={setHasRead} />
            ))}
            {currentPageNotice.length > 0 ? (
                <Button
                    onClick={handleClick}
                    color="gray.500"
                    lineHeight="lh16"
                    fontWeight="700"
                    fontFamily="secondary"
                    fontSize="text4"
                >
          Next
                </Button>
            ) : (
                <Text
                    color="gray.500"
                    lineHeight="lh16"
                    fontWeight="700"
                    fontFamily="secondary"
                    fontSize="text4"
                    pt="20px"
                    pb="30px"
                >
          No more notifications
                </Text>
            )}
        </MessageContainer>
    );
};

export default Message;
