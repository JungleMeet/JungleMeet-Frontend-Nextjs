import { Flex, Text, Link, Box, Divider, Image, Button } from "@chakra-ui/react";
import React from "react";
import { dateCreatedAt } from "@/utils/dateCreateAt";
import parse from "html-react-parser";

export interface IReviewInfoProps {
    _id: string;
    createdAt: string;
    author: {
        _id: string;
        name: string;
        avatar: string;
    };
    likeCount: number;
    content: string;
}

const ReviewInfo = ({ _id, createdAt, author, likeCount, content }: IReviewInfoProps) => {
    return (
        <Box pb="13px" lineHeight="lh32" key={_id}>
            <Flex alignItems="center" justifyContent="space-between">
                <Flex justifyContent="flex-start" alignItems="center" gap="13px">
                    <Link
                        href={"/userprofile/" + author._id}
                        textColor="blue.500"
                        mr="5px"
                        fontSize="18px"
                        fontWeight="600"
                        lineHeight="32px"
                    >
                        {author.name}
                    </Link>
                    <Text textColor="gray.400" fontSize="16px" fontWeight="400">
                        {dateCreatedAt(createdAt)}
                    </Text>
                </Flex>
                <Box pr="30px">
                    <Button
                        display="flex"
                        justifyContent="flex-end"
                        fontSize="text5"
                        lineHeight="lh32"
                        textColor="gray.400"
                        colorScheme="#ffffff"
                    >
                        <Image
                            src="/thumpsUp.svg"
                            width="16px"
                            height="16px"
                            color="gray.900"
                            margin="8.76px 7px 7.15px"
                        />
                        <Text textColor="red.500"> {likeCount} Likes </Text>
                    </Button>
                </Box>
            </Flex>
            <Box mt="20px">
                <Box fontSize="18px" lineHeight="24px">
                    {parse(content)}
                </Box>
            </Box>
            <Divider mt="21px" mb="0px" />
        </Box>
    );
};

export default ReviewInfo;
