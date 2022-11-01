import CreatedByTheAuthor from "../CreatedByTheAuthor";
import React from "react";

interface IReviewAuthor {
    author: string;
    createdAt: string;
}

const RepliesAuthor = ({ author, createdAt }: IReviewAuthor) => {
    return (
        <CreatedByTheAuthor
            gap="17.25px"
            color="gray.500"
            fontSize="text4"
            lineHeight="lh24"
            fontWeight="500"
            imageSize="31.5px"
            author={author}
            createdAt={createdAt}
        />
    );
};

export default RepliesAuthor;
