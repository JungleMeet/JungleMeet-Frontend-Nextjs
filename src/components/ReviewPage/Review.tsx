import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ReviewAuthor from "./ReviewAuthor";
import ReviewLikeReplies from "./ReviewLikeReplies";

interface IReviewProps {
    author: string;
    createdAt: string;
    comment: string;
    likes: number;
    repliesCount: number;
}

const Review = ({ author, createdAt, comment, likes, repliesCount }: IReviewProps) => {
    return (
        <>
            <Flex justify="space-between" align="center">
                <ReviewAuthor author={author} createdAt={createdAt} />
                <ReviewLikeReplies likes={likes} repliesCount={repliesCount} />
            </Flex>
            <Stack pl="100px" pb="32px">
                <Text>{comment}</Text>
                <Text color="blue.500" fontSize={"text5"}>
          REPLY
                </Text>
            </Stack>
        </>
    );
};
export default Review;
