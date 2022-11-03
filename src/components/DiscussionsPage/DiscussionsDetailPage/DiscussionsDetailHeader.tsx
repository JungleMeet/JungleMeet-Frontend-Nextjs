import { Flex, Heading, Box, Text, Grid, HStack } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect, useMemo } from "react";
import DiscussionAuthor from "../DiscussionAuthor";
import DiscussionsFollowButton from "./DiscussionsFollowButton";
import { DiscussionsLikeButton } from "./DiscussionsFollowButton";
import { getPosts } from "@/utils/axiosPostApi";
import { getUserById } from "@/utils/axiosUserApi";
import { AxiosResponse } from "axios";

interface IDetailProps {
    _id: string;
    title: string;
    alt: string;
    createdAt: string;
    like: number;
}

const DiscussionsDetailHeader = () => {
    const [postDetail, setPostDetail] = useState([]);
    const [postAuthor, setPostAuthor] = useState("");

    const postDetailMemo = useMemo(() => postDetail, [postDetail]);

    useEffect(() => {
        const getPostsDetail = async () => {
            try {
                const { data } = await getPosts();

                const currentPosts = data.slice(1, 2);

                const name = currentPosts.map((item: any) => {
                    return item.author;
                });

                const author: AxiosResponse<any> = await getUserById(name);

                setPostAuthor(author.data.name);
                setPostDetail(currentPosts);
            } catch (err) {
                console.log(err);
            }
        };
        getPostsDetail();
    }, []);
    return (
        <Grid>
            {postDetailMemo?.map(({ _id, title, like, createdAt }: IDetailProps) => {
                return (
                    <Flex key={_id} direction={"column"}>
                        <Box mt="100px">
                            <Heading fontSize="h2" color="gray.900" fontWeight="700" lineHeight="h2">
                                {title}
                            </Heading>
                            <Flex alignItems="center" mt="40px">
                                <DiscussionAuthor author={postAuthor} createdAt={createdAt} />
                                <HStack ml="15px" align="center" textColor="blue.500" _hover={{ color: "gray.50" }}>
                                    <DiscussionsFollowButton>
                                        <Text>Follow this post</Text>
                                    </DiscussionsFollowButton>
                                </HStack>

                                <Flex alignItems="center" justifyContent="flex-end" flex="1">
                                    <Text color="red">{like.length} liked</Text>
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
            })}
        </Grid>
    );
};

export default DiscussionsDetailHeader;
