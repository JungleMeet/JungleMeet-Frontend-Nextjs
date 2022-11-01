import React from "react";
import Review from "./Review";
import Replies from "./Replies";
import { Box, Stack, Text } from "@chakra-ui/react";

const ReviewNReplies = () => {
    return (
        <Box bg="gray.200" mb="20px">
            <Review
                author="Melissatz Funny"
                createdAt="12/02/2022"
                comment="this is testing"
                likes={9}
                repliesCount={109}
            />
            <Replies
                author="Not so Funny"
                createdAt="12/02/2022"
                parent="Melissatz Funny"
                reply="this is testing"
            />
            <Stack pl="100px" pb="46px">
                <Text color="blue.500" fontSize={"text5"}>
          See more replies (23 Replies)
                </Text>
            </Stack>
        </Box>
    );
};

export default ReviewNReplies;
