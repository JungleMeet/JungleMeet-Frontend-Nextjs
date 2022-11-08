import { Flex, Heading, Box, Text, Grid, HStack } from "@chakra-ui/react";
import React from "react";
import DiscussionsFollowButton from "./DiscussionsFollowButton";
import { DiscussionsLikeButton } from "./DiscussionsFollowButton";
import DiscussionPostAuthor from "./DiscussionPostAuthor";

interface IDetailProps {
    name: {
        _id: string;
        name: string;
        avatar: string;
    };
    title: string;
    postId: string;
    date: string;
    like: number;
}

const DiscussionsDetailHeader = ({ postId, name, title, date, like }: IDetailProps) => {
    return (
        <Grid>
            <Flex key={postId} direction={"column"}>
                <Box mt="100px">
                    <Heading fontSize="h2" color="gray.900" fontWeight="700" lineHeight="h2">
                        {title}
                    </Heading>
                    <Flex alignItems="center" mt="40px">
                        <DiscussionPostAuthor
                            id={name?._id}
                            avatar={name?.avatar}
                            author={name?.name}
                            createdAt={date}
                        />
                        <HStack ml="15px" align="center" textColor="blue.500" _hover={{ color: "gray.50" }}>
                            <DiscussionsFollowButton>
                                <Text>Follow this post</Text>
                            </DiscussionsFollowButton>
                        </HStack>

                        <Flex alignItems="center" justifyContent="flex-end" flex="1">
                            <Text color="red">{like} liked</Text>
                            <HStack align="center" textColor="red.500" _hover={{ color: "gray.50" }}>
                                <DiscussionsLikeButton>
                                    <Text>Like this post</Text>
                                </DiscussionsLikeButton>
                            </HStack>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Grid>
    );
};

export default DiscussionsDetailHeader;
