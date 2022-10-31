import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { dateCreatedAt } from "../utils/dateCreateAt";

interface ICreatedByTheAuthorProps {
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
    gap,
    color,
    fontSize,
    lineHeight,
    fontWeight,
    imageSize,
    author,
    createdAt,
}: ICreatedByTheAuthorProps) => {
    return (
        <Flex
            gap={gap}
            color={color}
            fontSize={fontSize}
            lineHeight={lineHeight}
            fontWeight={fontWeight}
            margin="12px 0"
            alignItems="center"
        >
            <Image src="/noun-user-circle-1918168.svg" width={imageSize} />
            <Text>
                {" "}
                {author} {dateCreatedAt(createdAt)}
            </Text>
        </Flex>
    );
};

export default CreatedByTheAuthor;
