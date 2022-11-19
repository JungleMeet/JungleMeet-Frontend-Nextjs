import React from "react";
import { isEmpty } from "lodash";
import ReviewAvatar from "./ReviewAvatar";
import { dateCreatedAt } from "@/utils/dateCreateAt";
import { Text, Button, Box } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { toggleHideChildrenComment } from "@/app/reducer/commentSlice";

export interface ICommentProps {
    topComments: {
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
    };
    // [key: string]: string | boolean | Array<any> | Object|null;
}

function replyComments(item: any) {
    if (!isEmpty(item.children[0]?._id)) {
        return <Comment comments={item.children} />;
    } else {
        return null;
    }
}

const Comment = ({ comments }: { comments: ICommentProps[] }): JSX.Element => {
    const hiddenIdArray = useSelector((state: any) => state.comments.hiddenIdArray);
    const dispatch = useDispatch();

    const toggleHide = (id: string) => {
        dispatch(toggleHideChildrenComment(id));
    };

    return (
        <>
            {comments &&
        comments?.map((item: any) => {
            const {
                _id,
                content,
                // visible,
                //  postId,
                createdAt,
                // like,
                author,
            // mentionedUserId,
            } = item;
            return (
            // <Stack
            // // mb="5px"
            // // pb="30px"
            //     bg="#F9FAFB" key={_id}>
                <Box pt="25px" pl="54.4px" position={"relative"} key={_id}>
                    <>
                        <ReviewAvatar
                            id={author?._id}
                            author={`${author?.name}`}
                            createdAt={dateCreatedAt(createdAt)}
                            avatar={author?.avatar}
                        />
                        <div className="before-content" onClick={() => toggleHide(_id)}></div>

                        {/* <div className="pre-comment-content"> hello</div> */}
                        <Box pl="63px" className="comment-content">
                            <Text fontSize={"text4"} fontWeight="500" mb="15px">
                                {`${content}`}
                            </Text>
                            <Button
                                size="sl"
                                color="blue.500"
                                fontSize={"text5"}
                                width="45px"
                                variant="unstyled"
                            >
                    REPLY
                            </Button>
                        </Box>
                        {/* {mentionedUserId}
                    {replyComments(item)} */}
                        {hiddenIdArray.includes(_id) ? null : replyComments(item)}
                    </>
                </Box>
            // </Stack>
            );
        })}
        </>
    );
};

export default Comment;
