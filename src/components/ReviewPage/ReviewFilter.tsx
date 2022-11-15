import { Flex, Heading, Divider, Stack, Switch, Text } from "@chakra-ui/react";
import React from "react";
import DiscussionSort from "../DiscussionsPage/DiscussionSort";

interface IReviewFilterProps {
    reviews: number;
}

const ReviewFilter = ({ reviews }: IReviewFilterProps) => {
    return (
        <>
            <Flex alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
                    <Heading fontSize={"text1"}>Display Setting:</Heading>
                    <Stack align="center" direction="row">
                        <Switch size="md" pl="21px" />
                        <Text fontSize={"text2"} fontWeight="400">
              Hide Reply
                        </Text>
                    </Stack>
                    <Heading fontSize={"text1"} pl="40px">
            Total:
                    </Heading>
                    <Text fontSize={"text3"} pl="16px">
                        {reviews} Reviews
                    </Text>
                </Flex>
                <DiscussionSort />
            </Flex>
            <Divider orientation="horizontal" mt="13px" mb="16.71px" borderColor="grey.200" />
        </>
    );
};

export default ReviewFilter;
