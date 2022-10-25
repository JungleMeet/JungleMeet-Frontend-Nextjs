import { Flex, Image, Link, Box, Divider, Text } from "@chakra-ui/react";
import React from "react";
import ExpandableTextComponent from "../MainPage/PopularDisscusion/ExpandableTextComponent";
import DiscussionAuthor from "./DiscussionAuthor";

interface IDiscussionProps {
    title: string;
    image: string;
    alt: string;
    author: string;
    createdAt: string;
    likes: number;
    views: number;
    comments: number;
    content: string;
}

const Discussion = ({
    title,
    image,
    alt,
    author,
    createdAt,
    likes,
    views,
    comments,
    content,
}: IDiscussionProps) => {
    return (
        <Flex direction={"column"}>
            <Image src={image} alt={alt} paddingTop="45px" />
            <Box padding="19px">
                <Link fontSize="text3" color="blue.500" fontWeight="700" lineHeight="lh28">
                    {title}
                </Link>
                <Flex alignItems="center" justifyContent="space-between">
                    <DiscussionAuthor author={author} createdAt={createdAt} />
                    <Flex>
                        <Text color="red">{likes} liked</Text>
                        <Text color="gray.400">&nbsp; &bull; {views} views </Text>
                        <Text color="gray.400">&nbsp; &bull; {comments} comments</Text>
                    </Flex>
                </Flex>
                <ExpandableTextComponent noOfLines={2}>
                    <Text fontSize="text5" lineHeight="lh32">
                        {content}
                    </Text>
                </ExpandableTextComponent>
            </Box>
            <Divider />
        </Flex>
    );
};

export default Discussion;
