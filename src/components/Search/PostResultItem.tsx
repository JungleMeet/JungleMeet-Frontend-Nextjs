import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import DiscussionAuthor from "../DiscussionsPage/DiscussionAuthor";
import parser from "html-react-parser";

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
    viewNumber: number;
    commentCount: number;
    keyword: string;
}

const PostResultItem: React.FC<IPostResultItemProps> = ({
    _id,
    title,
    author: { _id: authorId, name, avatar },
    createdAt,
    likeCount,
    viewNumber,
    commentCount,
    keyword,
}) => {
    const regExp = new RegExp(keyword, "gi");
    const markedTitle = String(title).replace(regExp, "<mark>$&</mark>");
    return (
        <Box>
            <Box color="blue.500" fontWeight="700" fontSize="text3">
                <a href={`/discussions/${_id}`}> {parser(markedTitle)} </a>
            </Box>
            <Flex alignItems="center" justifyContent="space-between" pl={"20px"} pr={"20px"}>
                <DiscussionAuthor author={name} createdAt={createdAt} id={authorId} avatar={avatar} />
                <Flex>
                    <Text color="red">{likeCount} liked</Text>
                    <Text color="gray.400">&nbsp; &bull; {viewNumber} views </Text>
                    <Text color="gray.400">&nbsp; &bull; {commentCount} comments</Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export default PostResultItem;
