import { FaPen } from "react-icons/fa";
import { TriangleUpIcon } from "@chakra-ui/icons";
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
}

const DiscussionsDetailContent = ({
    postId,
    content,
    bgImg,
    toggleShowEditor,
    isEditorVisible,
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
                                <Text>Follow</Text>
                            </DiscussionsFollowButton>
                        </HStack>

                        <Flex alignItems="center">
                            <HStack align="center" textColor="red.500" _hover={{ color: "gray.50" }}>
                                <DiscussionsLikeButton>
                                    <Text>Like</Text>
                                </DiscussionsLikeButton>
                            </HStack>
                        </Flex>
                    </Flex>
                    <Button
                        onClick={toggleShowEditor}
                        colorScheme="blue"
                        leftIcon={isEditorVisible ? <TriangleUpIcon /> : <FaPen />}
                        position={"absolute"}
                        bottom="60px"
                        right={"0"}
                    >
                        {isEditorVisible ? "Hide input" : " Comment"}
                    </Button>
                    <Divider mt="30px" color="gray.200" />
                </Box>
            </Flex>
        </Grid>
    );
};

export default DiscussionsDetailContent;
