import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import DiscussionAuthor from "../DiscussionsPage/DiscussionAuthor";

export interface IPostResultItemProps {
    _id: string;
    title: string;
    author: {
        _id: string;
        name: string;
        avatar?: string;
    };
    createdAt: string;
    likeCount: number;
    viewCount: number;
    commentCount: number;
}

const PostResultItem: React.FC<IPostResultItemProps> = ({
    _id,
    title,
    author: { _id: authorId, name, avatar },
    createdAt,
    likeCount,
    viewCount,
    commentCount,
}) => {
    return (
        <Box>
            <Box color="blue.500" fontWeight="700" fontSize="text3">
                {title}
            </Box>
            <Flex alignItems="center" justifyContent="space-between" pl={"20px"} pr={"20px"}>
                <DiscussionAuthor author={name} createdAt={createdAt} authorId={authorId} avatar={avatar} />
                <Flex>
                    <Text color="red">{likeCount} liked</Text>
                    <Text color="gray.400">&nbsp; &bull; {viewCount} views </Text>
                    <Text color="gray.400">&nbsp; &bull; {commentCount} comments</Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export default PostResultItem;
