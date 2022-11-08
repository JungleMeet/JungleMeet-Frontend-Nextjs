import { Flex, Divider, Box, Text, Grid, Button, HStack } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect, useMemo } from "react";
import { getComments } from "@/utils/axiosCommentApi";
import { dateCreatedAt } from "../../../utils/dateCreateAt";
import { getUserById } from "@/utils/axiosUserApi";
import DiscussionsCommentAvatar from "./DiscussionsCommentAvatar";

interface ICommentProps {
    postId: string;
    content: string;

    createdAt: string;
    author: string;
    _id: string;
}

const DiscussionsDetailComments = ({ postId }: any) => {
    const [postComment, setPostComment] = useState([]);
    const [commentAuthor, setCommentAuthor] = useState("");

    const postCommentMemo = useMemo(() => postComment, [postComment]);

    useEffect(() => {
        const getCommentDetail = async () => {
            try {
                const { data } = await getComments(postId);

                const name = postComment.map((item: any) => {
                    return item.author;
                });

                const user = await getUserById(name.toString());

                setCommentAuthor(user.data.name);
                setPostComment(data);
            } catch (err) {
                console.log(err);
            }
        };
        getCommentDetail();
    }, [commentAuthor]);

    return (
        <Grid>
            {postCommentMemo?.map(({ _id, content, createdAt, author }: ICommentProps) => {
                return (
                    <Flex key={_id} direction={"column"}>
                        <Box mt="56px">
                            <Flex alignContent="center">
                                <DiscussionsCommentAvatar authorId={author} />
                                <Flex flexDirection="column">
                                    <HStack lineHeight="lh20" fontSize="text5">
                                        <Text color="blue.500" mt="0px">
                                            {commentAuthor}
                                        </Text>
                                        <Text color="gray.400" mt="0px">
                                            {dateCreatedAt(createdAt)}
                                        </Text>
                                    </HStack>
                                    <Text lineHeight="lh24" mt="5px">
                                        {content}
                                    </Text>
                                </Flex>
                            </Flex>
                            <Text>
                                <Button fontSize="text5" lineHeight="lh24" variant="link" ml="55px" mt="15px">
                  REPLY
                                </Button>
                            </Text>
                            <Divider mt="30px" color="gray.200" />
                        </Box>
                    </Flex>
                );
            })}
        </Grid>
    );
};

export default DiscussionsDetailComments;
