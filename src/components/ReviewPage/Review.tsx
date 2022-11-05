import { Flex, Grid, Stack, Text, Button, Divider } from "@chakra-ui/react";
import React, { useState, useEffect, useMemo } from "react";
import CreatedByTheAuthor from "../CreatedByTheAuthor";
import ReviewLikeReplies from "./ReviewLikeReplies";
import { getComments } from "@/utils/axiosCommentApi";

interface IReviewProps {
    _id: string;
    author: string;
    createdAt: string;
    content: string;
    likeCount: number;
    repliesCount: number;
    mentionedUserId: string;
}

const Review = () => {
    const [comments, setComments] = useState([]);
    const commentsMemo = useMemo(() => comments, [comments]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const { data } = await getComments();
                setComments(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchComments();
    }, []);

    return (
        <Grid>
            {commentsMemo?.map(
                ({ _id, author, createdAt, content, likeCount, mentionedUserId }: IReviewProps) => {
                    return (
                        <>
                            <Stack bg="gray.200" pb="46px" mb="32px" key={_id}>
                                <Flex justify="space-between" align="center">
                                    <CreatedByTheAuthor
                                        gap="24.26px"
                                        color="blue.500"
                                        fontSize="text3"
                                        lineHeight="lh28"
                                        fontWeight="700"
                                        imageSize="75.58px"
                                        author={author}
                                        createdAt={createdAt}
                                    />
                                    <ReviewLikeReplies likes={likeCount} repliesCount={99} />
                                </Flex>
                                <Stack pl="100px" pt="-50px">
                                    <Text>{content}</Text>
                                    <Button
                                        size="sl"
                                        color="blue.500"
                                        fontSize={"text5"}
                                        width="50px"
                                        variant="unstyled"
                                    >
                    REPLY
                                    </Button>
                                </Stack>
                                <Stack pl="106px" pb="32px">
                                    <CreatedByTheAuthor
                                        gap="17.25px"
                                        color="gray.500"
                                        fontSize="text4"
                                        lineHeight="lh24"
                                        fontWeight="500"
                                        imageSize="31.5px"
                                        author={author}
                                        createdAt={createdAt}
                                    />
                                    <Stack pl="48.75px" key={mentionedUserId}>
                                        <Text fontSize={"text4"} fontWeight="500">
                      @{mentionedUserId}
                                        </Text>
                                        <Button
                                            size="sl"
                                            color="blue.500"
                                            fontSize={"text5"}
                                            width="70px"
                                            variant="unstyled"
                                        >
                      REPLY
                                        </Button>
                                        <Button
                                            size="sl"
                                            color="blue.500"
                                            fontSize={"text5"}
                                            width="250px"
                                            variant="unstyled"
                                            pt="15px"
                                        >
                      See more replies (3 Replies)
                                        </Button>
                                    </Stack>
                                    <Divider borderColor="grey.200" pt="30px" />
                                </Stack>
                            </Stack>
                        </>
                    );
                }
            )}
        </Grid>
    );
};

export default Review;
