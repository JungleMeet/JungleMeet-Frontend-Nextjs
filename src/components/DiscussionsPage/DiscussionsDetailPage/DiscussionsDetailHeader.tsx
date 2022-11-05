import { Flex, Heading, Box, Text, Grid, HStack } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect, useMemo } from "react";
import DiscussionsFollowButton from "./DiscussionsFollowButton";
import { DiscussionsLikeButton } from "./DiscussionsFollowButton";
import { getPosts } from "@/utils/axiosPostApi";
import DiscussionPostAuthor from "./DiscussionPostAuthor";

interface IDetailProps {
    name: {
        _id: string;
        name: string;
    };
    title: string;
    _id: string;
    avatar: string;
    releaseDateRightFormat: string;
    likeCount: number;
}

const DiscussionsDetailHeader = () => {
    const [postDetail, setPostDetail] = useState([]);
    const [postAuthor, setPostAuthor] = useState("");

    const postDetailMemo = useMemo(() => postDetail, [postDetail]);

    useEffect(() => {
        const getPostsDetail = async () => {
            try {
                const { data } = await getPosts();

                const allPost = data.data;
                const name = allPost.slice(0, 1).map((item) => {
                    return item.author.name;
                });

                setPostAuthor(name.toString());
                setPostDetail(allPost.slice(0, 1));
            } catch (err) {
                console.log(err);
            }
        };
        getPostsDetail();
    }, []);
    return (
        <Grid>
            {postDetailMemo?.map(
                ({ _id, name, title, likeCount, releaseDateRightFormat }: IDetailProps) => {
                    return (
                        <Flex key={_id} direction={"column"}>
                            <Box mt="100px">
                                <Heading fontSize="h2" color="gray.900" fontWeight="700" lineHeight="h2">
                                    {title}
                                </Heading>
                                <Flex alignItems="center" mt="40px">
                                    <DiscussionPostAuthor
                                        id={name?._id}
                                        author={postAuthor}
                                        createdAt={releaseDateRightFormat}
                                    />
                                    <HStack
                                        ml="15px"
                                        align="center"
                                        textColor="blue.500"
                                        _hover={{ color: "gray.50" }}
                                    >
                                        <DiscussionsFollowButton>
                                            <Text>Follow this post</Text>
                                        </DiscussionsFollowButton>
                                    </HStack>

                                    <Flex alignItems="center" justifyContent="flex-end" flex="1">
                                        <Text color="red">{likeCount} liked</Text>
                                        <HStack align="center" textColor="red.500" _hover={{ color: "gray.50" }}>
                                            <DiscussionsLikeButton>
                                                <Text>Like this post</Text>
                                            </DiscussionsLikeButton>
                                        </HStack>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Flex>
                    );
                }
            )}
        </Grid>
    );
};

export default DiscussionsDetailHeader;
