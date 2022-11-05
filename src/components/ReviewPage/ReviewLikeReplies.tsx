import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface IReviewLikeRepliesProps {
    likes: number;
    repliesCount: number;
}

const ReviewLikeReplies = ({ likes, repliesCount }: IReviewLikeRepliesProps) => {
    return (
        <>
            <Flex pr="34px">
                <Text color="#EF4444" fontSize={"text5"}>
                    {likes} Liked&nbsp;
                </Text>
                <Text fontSize={"text5"}>&#x2022;&nbsp;{repliesCount} Replies</Text>
            </Flex>
        </>
    );
};

export default ReviewLikeReplies;
