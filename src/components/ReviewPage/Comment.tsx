import React from "react";
import { isEmpty } from "lodash";
import MemoizeCommentItem from "./CommentItem";
import { useDispatch, useSelector } from "react-redux";
import { CommentContainer, CommentThread } from "./styles";
import { toggleHideChildrenComment } from "@/app/reducer/commentSlice";

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

    const dispatch = useDispatch();
    const toggleHide = (id: string) => {
        dispatch(toggleHideChildrenComment(id));
    };

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
            const isThreadSelected = hiddenIdArray.includes(_id);

            return (
            // <Stack mb="0px" bg="#8abbeb" key={_id}>
                <CommentContainer key={_id}>
                    <CommentThread
                        onClick={() => toggleHide(_id)}
                        isCollapsed={hasChildren && isThreadSelected}
                        hasChildren={hasChildren}
                    />
                    <MemoizeCommentItem
                        _id={_id}
                        content={content}
                        postId={postId}
                        createdAt={createdAt}
                        author={author}
                        setNewComment={setNewComment}
                    />
                    {
                        // if no children or is hidden, display nothing. otherwise, display nested comment
                        !hasChildren || isThreadSelected ? null : (
                            <Comment comments={item.children} setNewComment={setNewComment} />
                        )
                    }
                </CommentContainer>
            // </Stack>
            );
        })}
        </>
    );
};

export default Comment;
