import { Flex, Text, Link, Spacer, Stack, Heading, Box, Divider, Avatar } from "@chakra-ui/react";
import { PostsContainer } from "./PostsContainer";
import React from "react";
import ExpandableTextComponent from "./ExpandableTextComponent";
import parser from "html-react-parser";

interface PostCardInfoProps {
    title: string;
    src: string;
    date: string;
    name: {
        _id: string;
        name: string;
        avatar: string;
    };
    like: number;
    views: number;
    comments: number;
    description: string;
}

const PostCardInfo: React.FC<PostCardInfoProps> = (props) => {
    return (
        <PostsContainer>
            <Box>
                <Flex flex="1" flexDirection="row" justifyContent="flex-start">
                    <Avatar name={props.name.name} src={props.name.avatar} borderRadius="10px" mr="10px" />
                    <Box w="100%">
                        <Stack pb="4px">
                            <Link textUnderlineOffset="5px">
                                <Heading fontSize="h6">{props.title}</Heading>
                            </Link>
                        </Stack>
                        <Box pb="13px" fontSize="text5" lineHeight="lh32" textColor="gray.400">
                            <Flex alignItems="center">
                                <Box display="flex">
                                    <Text id={props.name._id}>
                    By&nbsp;
                                        <Link _hover={{ textColor: "black" }} mr="5px">
                                            {props.name.name}
                                        </Link>
                                    </Text>

                                    <Text>{props.date}</Text>
                                </Box>
                                <Spacer />
                                <Box
                                    display="flex"
                                    justifyContent="flex-end"
                                    fontSize="text5"
                                    lineHeight="lh32"
                                    textColor="gray.400"
                                >
                                    <Text textColor="red.500"> {props.like} likes&nbsp; </Text>
                                    <Text> &bull; {props.views} views &bull;</Text>
                                    <Link _hover={{ textColor: "black" }} mr="5px">
                                        <Text> &nbsp;{props.comments} comments</Text>
                                    </Link>
                                </Box>
                            </Flex>
                        </Box>

                        <ExpandableTextComponent noOfLines={2}>
                            <Text fontSize="text5" lineHeight="lh32">
                                {parser(props.description)}
                            </Text>
                        </ExpandableTextComponent>
                    </Box>
                </Flex>
                <Divider marginTop="18px" />
            </Box>
        </PostsContainer>
    );
};

export default PostCardInfo;
