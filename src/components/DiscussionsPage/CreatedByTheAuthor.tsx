import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { dateCreatedAt } from "../../utils/dateCreateAt";

interface ICreatedByTheAuthorProps {
    gap: string;
    color: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
    imageSize: string;
    likesColor: string;
    author: string;
    createdAt: string;
    likes: number;
    views: number;
    comments: number;
}

const CreatedByTheAuthor = ({
    gap,
    color,
    fontSize,
    lineHeight,
    fontWeight,
    imageSize,
    likesColor,
    author,
    createdAt,
    likes,
    views,
    comments,
}: ICreatedByTheAuthorProps) => {
    return (
        <Flex alignItems="center" justifyContent="space-between">
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
          By {author} {dateCreatedAt({ createdAt })}
                </Text>
            </Flex>
            <Flex>
                <Text color="red">{likes} liked</Text>
                <Text color={likesColor}>&nbsp; &bull; {views} views </Text>
                <Text color={likesColor}>&nbsp; &bull; {comments} comments</Text>
            </Flex>
        </Flex>
    );
};

export default CreatedByTheAuthor;
