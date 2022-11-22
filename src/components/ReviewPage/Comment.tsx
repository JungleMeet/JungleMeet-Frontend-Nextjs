import React from "react";
import { isEmpty } from "lodash";
import { Stack } from "@chakra-ui/react";
import CommentItem from "./CommentItem";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleHideChildrenComment } from "@/app/reducer/commentSlice";

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
    // function replyComments(item: any) {
    //     if (!isEmpty(item.children[0]?._id)) {
    //         return <Comment comments={item.children} />;
    //     } else {
    //         return null;
    //     }
    // }

    // const hiddenIdArray = useSelector((state: any) => state.comments.hiddenIdArray);
    // const dispatch = useDispatch();

    // const toggleHide = (id: string) => {
    //     dispatch(toggleHideChildrenComment(id));
    // };

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
            return (
                <Stack mb="5px" bg="#F9FAFB" key={_id}>
                    <Stack pt="10px" pl="54.4px" pb="4.25px">
                        <CommentItem
                            _id={_id}
                            content={content}
                            postId={postId}
                            createdAt={createdAt}
                            author={author}
                            setNewComment={setNewComment}
                        />
                        {!isEmpty(item.children[0]?._id) ? (
                            <Comment comments={item.children} setNewComment={setNewComment} />
                        ) : null}
                    </Stack>
                </Stack>
            );
        })}
        </>
    );
};

export default Comment;
