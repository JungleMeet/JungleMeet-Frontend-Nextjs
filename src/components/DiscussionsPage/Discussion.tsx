import { Flex, Image, Link, Box, Divider, Text } from "@chakra-ui/react";
import React from "react";
import ExpandableTextComponent from "../MainPage/PopularDisscusion/ExpandableTextComponent";
import DiscussionAuthor from "./DiscussionAuthor";

interface IDiscussionProps {
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
    postId: string;
}

const Discussion = ({
    title,
    hashtag,
    src,
    name,
    date,
    like,
    views,
    comments,
    description,
    postId,
}: IDiscussionProps) => {
    return (
        <Flex direction={"column"} id={postId}>
            <Image src={src} paddingTop="45px" />
            <Box padding="19px">
                <Link fontSize="text3" color="blue.500" fontWeight="700" lineHeight="lh28">
                    {title}
                </Link>
                <Flex alignItems="center" justifyContent="space-between">
                    <DiscussionAuthor
                        id={name?._id}
                        author={name?.name}
                        createdAt={date}
                        avatar={name?.avatar}
                    />
                    <Flex>
                        <Text color="red">{like} liked</Text>
                        <Text color="gray.400">&nbsp; &bull; {views} views </Text>
                        <Text color="gray.400">&nbsp; &bull; {comments} comments</Text>
                    </Flex>
                </Flex>
                <ExpandableTextComponent noOfLines={2}>
                    <Text fontSize="text5" lineHeight="lh32">
                        {description}
                    </Text>
                </ExpandableTextComponent>
                <Text as="i" color="blue.500" fontSize="text4" lineHeight="lh28">
                    {hashtag}
                </Text>
            </Box>
            <Divider />
        </Flex>
    );
};

export default Discussion;
