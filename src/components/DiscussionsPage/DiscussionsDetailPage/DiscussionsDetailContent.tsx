import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Flex, Divider, Image, Box, Text, Grid, HStack, Button } from "@chakra-ui/react";
import React from "react";
import DiscussionsFollowButton from "./DiscussionsFollowButton";
import { DiscussionsLikeButton } from "./DiscussionsFollowButton";

interface IContentProps {
    postId: string;
    content: string;
    bgImg: string;
    toggleShowEditor: () => void;
    isEditorVisible: boolean;
    isLogged: boolean;
}

const DiscussionsDetailContent = ({
    postId,
    content,
    bgImg,
    toggleShowEditor,
    isEditorVisible,
    isLogged,
}: IContentProps) => {
    return (
        <Grid>
            <Flex key={postId} direction={"column"}>
                <Box mt="70px" position="relative">
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
                    <Button
                        onClick={toggleShowEditor}
                        colorScheme="blue"
                        leftIcon={isEditorVisible ? <TriangleUpIcon /> : <TriangleDownIcon />}
                        position={"absolute"}
                        bottom="60px"
                        right={"0"}
                    >
                        {isEditorVisible ? "Hide Editor" : "Add Comment"}
                    </Button>
                    <Divider mt="30px" color="gray.200" />
                </Box>
            </Flex>
        </Grid>
    );
};

export default DiscussionsDetailContent;
