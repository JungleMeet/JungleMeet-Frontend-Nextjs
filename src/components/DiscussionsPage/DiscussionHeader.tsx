import { Flex, Heading, Divider, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import React from "react";
// import AddDiscussionBtn from "./AddDiscussionBtn";

const DiscussionHeader = () => {
    return (
        <>
            <Flex alignItems="center" justifyContent="space-between" pt="100px">
                <Heading fontSize={"h1"} fontFamily="heading">
          Discussions
                </Heading>
                <Flex alignItems="center" pt="10px">
                    <Heading fontSize="h4" pr="11px">
            Create Discussion
                    </Heading>
                    <IconButton
                        variant="outline"
                        colorScheme="teal"
                        aria-label="create discussion"
                        size="sm"
                        icon={<AddIcon />}
                    />
                </Flex>
            </Flex>
            <Divider orientation="horizontal" mb="12px" mt="44px" />
        </>
    );
};

export default DiscussionHeader;
