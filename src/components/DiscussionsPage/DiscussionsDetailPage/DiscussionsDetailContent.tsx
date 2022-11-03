import { Flex, Divider, Image, Box, Text, Grid, HStack } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect, useMemo } from "react";
import DiscussionsFollowButton from "./DiscussionsFollowButton";
import { DiscussionsLikeButton } from "./DiscussionsFollowButton";
import { getPosts } from "@/utils/axiosPostApi";

interface IContentProps {
    _id: string;
    content: string;
    bgImg: string;
}

const DiscussionsDetailContent = () => {
    const [postContent, setPostContent] = useState([]);
    const postContentMemo = useMemo(() => postContent, [postContent]);

    useEffect(() => {
        const getContentDetail = async () => {
            try {
                const { data } = await getPosts();

                const currentPosts = data.slice(1, 2);

                // Post did not connect with user id
                // const { name } = await getUsers(data[0]._id);
                // console.log(name);
                setPostContent(currentPosts);
            } catch (err) {
                console.log(err);
            }
        };
        getContentDetail();
    }, []);
    return (
        <Grid>
            {postContentMemo?.map(({ _id, content, bgImg }: IContentProps) => {
                return (
                    <Flex key={_id} direction={"column"}>
                        <Box mt="70px">
                            <Image src={bgImg}></Image>
                            <Text mt="40px">{content}</Text>
                            <Flex alignItems="center" mt="40px">
                                <HStack align="center" textColor="blue.500" _hover={{ color: "gray.50" }}>
                                    <DiscussionsFollowButton>
                                        <Text>Follow this post</Text>
                                    </DiscussionsFollowButton>
                                </HStack>

                                <Flex alignItems="center">
                                    <HStack align="center" textColor="red.500" _hover={{ color: "gray.50" }}>
                                        <DiscussionsLikeButton>
                                            <Text>Like this post</Text>
                                        </DiscussionsLikeButton>
                                    </HStack>
                                </Flex>
                            </Flex>
                            <Divider mt="30px" color="gray.200" />
                        </Box>
                    </Flex>
                );
            })}
        </Grid>
    );
};

export default DiscussionsDetailContent;
