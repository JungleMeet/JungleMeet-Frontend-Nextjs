import React from "react";
import CreatedBy from "../CreatedBy";

interface IReviewAvatar {
    id: string;
    author: string;
    createdAt: string;
    avatar: string;
}

const ReviewAvatar = ({ author, createdAt, avatar, id }: IReviewAvatar) => {
    return (
        <CreatedBy
            id={id}
            gap="15px"
            fontSize="text4"
            lineHeight="lh28"
            fontWeight="700"
            imageSize="35px"
            author={author}
            createdAt={createdAt}
            avatar={avatar}
        />
    );
};
export default ReviewAvatar;
