import { Flex, Image, Link, Box, Divider } from "@chakra-ui/react";
import React from "react";
import DiscussionExerpt from "../DiscussionExerpt";
import CreatedByTheAuthor from "./CreatedByTheAuthor";

interface IDiscussionProps {
    gap: string;
    color: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
    imageSize: string;
    likesColor: string;
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
    gap,
    color,
    fontSize,
    lineHeight,
    fontWeight,
    imageSize,
    likesColor,
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
                <CreatedByTheAuthor
                    gap={gap}
                    color={color}
                    fontSize={fontSize}
                    lineHeight={lineHeight}
                    fontWeight={fontWeight}
                    imageSize={imageSize}
                    likesColor={likesColor}
                    author={author}
                    createdAt={createdAt}
                    likes={likes}
                    views={views}
                    comments={comments}
                />
                <DiscussionExerpt content={content} />
            </Box>
            <Divider />
        </Flex>
    );
};

export default Discussion;
