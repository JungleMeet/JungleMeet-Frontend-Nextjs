import { Divider, Text } from "@chakra-ui/react";
import React from "react";
import ReviewAuthor from "./ReviewAuthor";

interface IReviewProps {
    author: string;
    createdAt: string;
}

const Review = ({ author, createdAt }: IReviewProps) => {
    return (
        <>
            <ReviewAuthor author={author} createdAt={createdAt} />
            <Text>{`I often don't understand the common people definition of epic.`}</Text>
            <Divider />
        </>
    );
};
export default Review;
