import { Tag, TagLabel, TagLeftIcon, HStack } from "@chakra-ui/react";
import { Flex, Text, Link, Spacer, Box, Divider, Image } from "@chakra-ui/react";
import { ReviewsContainer } from "./ReviewsContainer";
import React from "react";
import parser from "html-react-parser";
import { dateCreatedAt } from "@/utils/dateCreateAt";
import { ChatIcon } from "@chakra-ui/icons";

interface ReviewInfoProps {
    id: string;
    date: string;
    author: {
        _id: string;
        name: string;
        avatar: string;
    };
    likeCount: number;
    views: number;
    comments: number;
    description: string;
}

const ReviewInfo: React.FC<ReviewInfoProps> = (props) => {
    return (
        <ReviewsContainer>
            <Box>
                <Box pb="13px" lineHeight="lh32">
                    <Flex alignItems="center">
                        <Box display="flex">
                            <Text
                                textColor="blue.500"
                                mr="5px"
                                fontSize="18px"
                                fontWeight="600"
                                lineHeight="32px"
                            >
                                {props.author.name}
                                <Link />
                &nbsp;
                            </Text>
                            <Text textColor="gray.400" fontSize="16px" fontWeight="400">
                                <Text>{dateCreatedAt(props.date)}</Text>
                            </Text>
                        </Box>
                        <Spacer />
                        <Box
                            display="flex"
                            justifyContent="flex-end"
                            fontSize="text5"
                            lineHeight="lh32"
                            textColor="gray.400"
                        >
                            <Image
                                src="/thumpsUp.svg"
                                width="16px"
                                height="16px"
                                color="gray.900"
                                margin="8.76px 7px 7.15px"
                            ></Image>
                            <Text textColor="red.500"> {props.likeCount} Likes </Text>
                        </Box>
                    </Flex>
                    <Box fontSize="18px" lineHeight="24px" marginTop="20px">
                        <Text>{parser(props.description)}</Text>
                    </Box>
                    <Box display="flex" textColor="gray.600" marginTop="18.67px">
                        <Link _hover={{ textColor: "black" }} mr="5px">
                            <HStack spacing={4}>
                                {["md"].map((size) => (
                                    <Tag size={size} key={size} variant="subtle" colorScheme="white">
                                        <TagLeftIcon boxSize="12px" as={ChatIcon} />
                                        <TagLabel>Replies</TagLabel>
                                    </Tag>
                                ))}
                            </HStack>
                        </Link>
                    </Box>

                    <Divider marginTop="12px" />
                </Box>
            </Box>
        </ReviewsContainer>
    );
};

export default ReviewInfo;
