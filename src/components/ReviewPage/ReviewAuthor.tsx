import CreatedByTheAuthor from "../CreatedByTheAuthor";
import React from "react";

interface IReviewAuthor {
    author: string;
    createdAt: string;
}

const ReviewAuthor = ({ author, createdAt }: IReviewAuthor) => {
    return (
        <CreatedByTheAuthor
            gap="24.26px"
            color="gray.400"
            fontSize="text4"
            lineHeight="lh24"
            fontWeight="400"
            imageSize="76px"
            author={author}
            createdAt={createdAt}
        />
    );
};

export default ReviewAuthor;
