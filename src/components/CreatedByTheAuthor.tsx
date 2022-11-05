import { Flex, Text, Avatar } from "@chakra-ui/react";
import React from "react";

interface ICreatedByTheAuthorProps {
    id: string;
    gap: string;
    color: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
    imageSize: string;
    author: string;
    createdAt: string;
}

const CreatedByTheAuthor = ({
    id,
    gap,
    color,
    fontSize,
    lineHeight,
    fontWeight,
    author,
    createdAt,
}: ICreatedByTheAuthorProps) => {
    const authorName = author.split(" ")[1];

    return (
        <Flex
            id={id}
            gap={gap}
            color={color}
            fontSize={fontSize}
            lineHeight={lineHeight}
            fontWeight={fontWeight}
            margin="12px 0"
            alignItems="center"
        >
            <Avatar
                name={authorName}
                src={authorName}
                borderRadius="10px"
                width="40px"
                height="40px"
            ></Avatar>
            <Text>
                {" "}
                {author} {createdAt}
            </Text>
        </Flex>
    );
};

export default CreatedByTheAuthor;
