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
            color="blue.500"
            fontSize="text3"
            lineHeight="lh28"
            fontWeight="700"
            imageSize="75.58px"
            author={author}
            createdAt={createdAt}
        />
    );
};

export default ReviewAuthor;
