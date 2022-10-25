import { Flex, Heading, Select } from "@chakra-ui/react";
import React from "react";

const DiscussionSort = () => {
    return (
        <Flex alignItems="center">
            <label htmlFor="sort">
                <Heading fontSize={"text1"} pr="17px">
          Sorted By:
                </Heading>
            </label>
            <Select
                placeholder="Most Viewed"
                height="53px"
                width="176px"
                variant="outline"
                fontSize={"text2"}
            >
                <option>Most Recent</option>
            </Select>
        </Flex>
    );
};

export default DiscussionSort;
