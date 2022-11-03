import React from "react";
import CreatedByTheAuthor from "../../CreatedByTheAuthor";

interface IDiscussionsCommentAuthor {
    author: string;
    createdAt: string;
}

const DiscussionsCommentAuthor = ({ author, createdAt }: IDiscussionsCommentAuthor) => {
    return (
        <CreatedByTheAuthor
            gap="20px"
            color="gray.400"
            fontSize="text4"
            lineHeight="lh24"
            fontWeight="400"
            imageSize="28px"
            author={author}
            createdAt={createdAt}
        />
    );
};

export default DiscussionsCommentAuthor;
