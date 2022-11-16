import React from "react";
import CreatedByTheAuthor from "../CreatedByTheAuthor";

interface IReviewAvatar {
    id: string;
    author: string;
    createdAt: string;
    avatar: string;
}

const ReviewAvatar = ({ author, createdAt, avatar, id }: IReviewAvatar) => {
    return (
        <CreatedByTheAuthor
            id={id}
            gap="19.61px"
            color="blue.500"
            fontSize="text3"
            lineHeight="lh28"
            fontWeight="700"
            imageSize="61.69px"
            author={author}
            createdAt={createdAt}
            avatar={avatar}
        />
    );
};
export default ReviewAvatar;
