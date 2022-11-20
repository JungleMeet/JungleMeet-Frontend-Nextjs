import { Flex, Text, Avatar } from "@chakra-ui/react";
import React from "react";

interface ICreatedByTheAuthorProps {
    id: string;
    gap: string;
    fontSize: string;
    lineHeight: string;
    margin: string;
    fontWeight: string;
    imageSize: string;
    author: string;
    createdAt: string;
    avatar?: string;
}

const CreatedByTheAuthor = ({
    id,
    gap,
    margin,
    fontSize,
    lineHeight,
    fontWeight,
    imageSize,
    author,
    createdAt,
    avatar,
}: ICreatedByTheAuthorProps) => {
    return (
        <Flex
            id={id}
            gap={gap}
            fontSize={fontSize}
            lineHeight={lineHeight}
            fontWeight={fontWeight}
            margin={margin}
            alignItems="center"
        >
            <Avatar name={author} src={avatar} borderRadius="10px" width="32px" height="32px"></Avatar>

            <Text textColor="blue.500">{author}</Text>
            <Text textColor="gray.500">{createdAt}</Text>
        </Flex>
    );
};

export default CreatedByTheAuthor;
