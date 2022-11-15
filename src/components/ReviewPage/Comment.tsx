import React from "react";
import { isEmpty } from "lodash";
import ReviewAvatar from "./ReviewAvatar";
import { dateCreatedAt } from "@/utils/dateCreateAt";
import { Stack, Text, Button } from "@chakra-ui/react";

export interface ICommentProps {
    topComments:
    {_id: string;
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
        children: ICommentProps[];}
    // [key: string]: string | boolean | Array<any> | Object|null;
}
const Comment = ({ comments }: { comments: ICommentProps[] }): JSX.Element => {
    return (
        <>
            {comments?.map((item: any) => {
                const {
                    _id,
                    content,
                    // visible,
                    //  postId,
                    createdAt,
                    // like,
                    author,
                } = item;
                return (
                    <Stack pl="0px" mb="5px" pb="30px" key={_id} bg="rgba(243, 244, 246)">
                        <Stack pt="25px" pl="54.4px" pb="4.25px">
                            <ReviewAvatar
                                id={author?._id}
                                author={`${author?.name}`}
                                createdAt={dateCreatedAt(createdAt)}
                                avatar={author?.avatar}
                            />
                            <Text fontSize={"text4"} fontWeight="500">
                                {`${content}`}
                            </Text>
                            <Button
                                mt="15px"
                                size="sl"
                                color="blue.500"
                                fontSize={"text5"}
                                width="45px"
                                variant="unstyled"
                            >
                REPLY
                            </Button>
                            {!isEmpty(item.children[0]?._id) ? <Comment comments={item.children} /> : null}
                        </Stack>
                    </Stack>
                );
            })}
        </>
    );
};

export default Comment;
