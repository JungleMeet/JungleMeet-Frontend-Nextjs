import { MenuItem, Avatar, Box, Text } from "@chakra-ui/react";

interface ItemProps {
    triggerUserName: string;
    triggerUserAvatar: string;
    content: string;
    viewed: boolean;
    createTime: string;
}

const NotificationDropdownItem = ({
    triggerUserName,
    triggerUserAvatar,
    content,
    viewed,
    createTime,
}: ItemProps) => {
    return (
        <MenuItem mb="18px" p="0">
            <Avatar
                w="25px"
                h="25px"
                borderRadius="full"
                name={triggerUserName}
                src={triggerUserAvatar}
                mr="12px"
                fontSize="text6"
            />
            <div>
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
            </div>
        </MenuItem>
    );
};

export default NotificationDropdownItem;
