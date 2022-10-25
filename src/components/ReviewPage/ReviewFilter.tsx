import { Flex, Heading, Divider, Stack, Switch, Text } from "@chakra-ui/react";
import React from "react";
import DiscussionSort from "../DiscussionsPage/DiscussionSort";

const ReviewFilter = () => {
    return (
        <>
            <Flex alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
                    <Heading fontSize={"text1"}>Display Setting:</Heading>
                    <Stack align="center" direction="row">
                        <Switch size="md" pl="21px" />
                        <Text fontSize={"text2"}>Hide Reply</Text>
                    </Stack>
                    <Heading fontSize={"text1"} pl="30px">
            Total:
                    </Heading>
                    <Text fontSize={"text3"} pl="16px">
            231 Reviews
                    </Text>
                </Flex>
                <DiscussionSort />
            </Flex>
            <Divider orientation="horizontal" mt="13px" />
        </>
    );
};

export default ReviewFilter;
