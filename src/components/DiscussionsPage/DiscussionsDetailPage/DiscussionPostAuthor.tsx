import { Flex, Text, Avatar } from "@chakra-ui/react";
import React from "react";

interface ITheAuthorProps {
    id: string;
    author: string;
    createdAt: string;
    avatar?: string;
}

const DiscussionPostAuthor = ({ id, author, createdAt, avatar }: ITheAuthorProps) => {
    return (
        <Flex id={id} margin="12px 0" alignItems="center">
            <Avatar
                name={author}
                src={avatar}
                borderRadius="10px"
                width="40px"
                height="40px"
                mr="10px"
            ></Avatar>

            <Text>
                {" "}
                {author} {createdAt}
            </Text>
        </Flex>
    );
};

export default DiscussionPostAuthor;
