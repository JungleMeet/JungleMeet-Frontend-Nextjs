import React from "react";
import { isEmpty } from "lodash";
import CommentItem from "./CommentItem";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CommentContainer = styled.div`
  padding: 5px 0px 5px 54.5px;
  margin-bottom: 0px;
  background-color: #f9fafb;
  position: relative;
`;

export interface ICommentProps {
    _id: string;
    content: string;
    visible: boolean;
    author: {
        _id: string;
        name: string;
        avatar: string;
    };
    mentionedUserId: string[];
    postId: string;
    parentCommentId: string;
    like: string[];
    createdAt: string;
    updatedAt: string;
    level: number;
    __V: number;
    children: ICommentProps[];
}

const Comment = ({
    comments,
    setNewComment,
}: {
    comments: ICommentProps[];
    setNewComment: React.Dispatch<React.SetStateAction<any>>;
}): JSX.Element => {
    const hiddenIdArray = useSelector((state: any) => state.comments.hiddenIdArray);

    return (
        <>
            {comments &&
        comments?.map((item) => {
            const {
                _id,
                content,
                postId,
                createdAt,
                author,
            // like,
            // visible,
            // mentionedUserId,
            } = item;
            const hasChildren = !isEmpty(item.children[0]?._id);
            return (
            // <Stack mb="5px" bg="#F9FAFB" key={_id}>
            // <Stack pt="5px" pl="54.4px" pb="5px" mb="5px" bg="#F9FAFB" key={_id}>
                <CommentContainer key={_id}>
                    <CommentItem
                        _id={_id}
                        content={content}
                        postId={postId}
                        createdAt={createdAt}
                        author={author}
                        setNewComment={setNewComment}
                        hasChildren={hasChildren}
                    />
                    {
                        // if no children or is hidden, display nothing. otherwise, display nested comment
                        !hasChildren || hiddenIdArray.includes(_id) ? null : (
                            <Comment comments={item.children} setNewComment={setNewComment} />
                        )
                    }
                </CommentContainer>
            // </Stack>
            // </Stack>
            );
        })}
        </>
    );
};

export default Comment;
