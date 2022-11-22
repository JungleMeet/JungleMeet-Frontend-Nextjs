import React from "react";
import { isEmpty } from "lodash";
import DiscussionsCommentTitle from "./DiscussionCommentTitle";
import { dateCreatedAt } from "@/utils/dateCreateAt";
import { Stack, Text, Button, Divider } from "@chakra-ui/react";
import parser from "html-react-parser";

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
}

function replyComments(item: any) {
    if (!isEmpty(item.children[0]?._id)) {
        return <DiscussionsCommentAvatar comments={item.children} />;
    } else {
        return null;
    }
}

const DiscussionsCommentAvatar = ({ comments }: { comments: ICommentProps[] }): JSX.Element => {
    return (
        <>
            {comments &&
        comments?.map((item: any) => {
            const {
                _id,
                content,
                // visible,
                //  postId,
                parentCommentId,
                createdAt,
                author,
                mentionedUserId,
            } = item;
            return (
                <>
                    <Stack mt="20px" key={_id}>
                        <DiscussionsCommentTitle
                            id={author?._id}
                            author={`${author?.name}`}
                            createdAt={dateCreatedAt(createdAt)}
                            avatar={author?.avatar}
                        />

                        <Stack pl="60px">
                            <Text fontSize={"text5"} fontWeight="500" mb="10px">
                                {parser(content)}
                            </Text>
                            <Button width="45px" fontSize="text6" lineHeight="lh24" variant="link">
                    REPLY
                            </Button>
                        </Stack>
                        <Stack pl="60px">
                            {mentionedUserId}
                            {replyComments(item)}
                        </Stack>
                        {parentCommentId ? "" : <Divider mb="20px" />}
                    </Stack>
                </>
            );
        })}
        </>
    );
};

export default DiscussionsCommentAvatar;
