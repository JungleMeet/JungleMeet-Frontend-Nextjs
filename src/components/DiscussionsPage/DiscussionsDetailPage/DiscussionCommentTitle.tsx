import React from "react";
import CreatedBy from "../../CreatedBy";

interface ICommentTitle {
    id: string;
    author: string;
    createdAt: string;
    avatar: string;
}

const DiscussionsCommentTitle = ({ author, createdAt, avatar, id }: ICommentTitle) => {
    return (
        <CreatedBy
            id={id}
            gap="20px"
            fontSize="text5"
            margin="0px 0px"
            lineHeight="lh28"
            fontWeight="600"
            imageSize="35px"
            author={author}
            createdAt={createdAt}
            avatar={avatar}
        />
    );
};
export default DiscussionsCommentTitle;
