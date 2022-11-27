import { Flex, Text, Link, Spacer, Stack, Heading, Box, Divider, Avatar } from "@chakra-ui/react";
import { PostsContainer } from "./PostsContainer";
import React from "react";
import ExpandableTextComponent from "./ExpandableTextComponent";
import parser from "html-react-parser";

interface PostCardInfoProps {
    postId: string;
    title: string;
    hashtag: string;
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
                    {/* <Image
                        src={props.src}
                        alt="Post Thumbnail"
                        width="89px"
                        height="129px"
                        mr="17px"
                        transform="scale(1.0)"
                        transition="0.3s ease-in-out"
                        _hover={{
                            transform: "scale(1.05)",
                        }}
                    /> */}
                    <Avatar
                        name={props.name.name}
                        src={props.name.avatar}
                        borderRadius="10px"
                        mr="10px"
                    ></Avatar>
                    <Box w="100%">
                        <Stack pb="4px">

                            {/* <Link textUnderlineOffset="5px"> */}
                            <Link href={"/discussions/" + props.postId}>
                                <Heading fontSize="h6">{props.title}</Heading>
                            </Link>
                            {/* </Link> */}
                        </Stack>
                        <Box pb="13px" fontSize="text5" lineHeight="lh32" textColor="gray.400">
                            <Flex alignItems="center" flexWrap="wrap">
                                <Box display="flex">
                                    <Text id={props.name._id}>
                    By&nbsp;
                                        <Link
                                            _hover={{ textColor: "black" }}
                                            mr="5px"
                                            href={"/userprofile/" + props.name._id}
                                        >
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
                        <Text as="i" color="blue.500" fontSize="text4" lineHeight="lh28">
                            {props.hashtag}
                        </Text>
                    </Box>
                </Flex>
                <Divider marginTop="18px" />
            </Box>
        </PostsContainer>
    );
};

export default PostCardInfo;
