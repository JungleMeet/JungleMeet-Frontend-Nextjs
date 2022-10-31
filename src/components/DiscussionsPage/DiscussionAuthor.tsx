import React from "react";
import CreatedByTheAuthor from "../CreatedByTheAuthor";

interface IDiscussionAuthor {
    author: string;
    createdAt: string;
}

const DiscussionAuthor = ({ author, createdAt }: IDiscussionAuthor) => {
    return (
        <CreatedByTheAuthor
            gap="10px"
            color="gray.400"
            fontSize="text4"
            lineHeight="lh24"
            fontWeight="400"
            imageSize="28px"
            author={`By ${author}`}
            createdAt={createdAt}
        />
    );
};

export default DiscussionAuthor;
