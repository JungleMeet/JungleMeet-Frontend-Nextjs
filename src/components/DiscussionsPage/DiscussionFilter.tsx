import { Flex, Switch, Stack, Heading, Divider, Text, Select } from "@chakra-ui/react";
import React from "react";

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
                <Flex alignItems="center">
                    <label htmlFor="sort">
                        <Heading fontSize={"text1"} pr="17px">
              Sorted By:
                        </Heading>
                    </label>
                    <Select placeholder="views count" height="53px" width="176px" variant="outline">
                        <option>liked count</option>
                        <option>comments count</option>
                    </Select>
                </Flex>
            </Flex>
            <Divider orientation="horizontal" mt="13px" />
        </>
    );
};

export default DiscussionFilter;
