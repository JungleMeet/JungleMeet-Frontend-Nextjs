import { Flex, Switch, Stack, Heading, Divider, Text } from "@chakra-ui/react";
import React from "react";
import DiscussionSort from "./DiscussionSort";

const DiscussionFilter = () => {
    return (
        <>
            <Flex alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
                    <Heading fontSize={"text1"}>Display Setting:</Heading>
                    <Stack align="center" direction="row">
                        <Switch size="md" pl="44px" />
                        <Text fontSize={"text2"}>Cover</Text>
                        <Switch size="md" pl="47px" />
                        <Text fontSize={"text2"}>Abstract</Text>
                    </Stack>
                </Flex>
                <DiscussionSort />
            </Flex>
            <Divider orientation="horizontal" mt="13px" borderColor="grey.200" />
        </>
    );
};

export default DiscussionFilter;
