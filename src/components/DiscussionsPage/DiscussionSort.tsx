import { Flex, Heading, Select } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { setSortBy } from "@/app/reducer/pageSlice";

const DiscussionSort = () => {
    const dispatch = useDispatch();
    return (
        <Flex alignItems="center">
            <label htmlFor="sort">
                <Heading fontSize={"text1"} pr="17px">
          Sorted By:
                </Heading>
            </label>
            <Select
                // placeholder="Most Recent"
                height="53px"
                width="176px"
                variant="outline"
                fontSize={"text2"}
                borderColor="grey.300"
                defaultValue={"Most Recent"}
                onChange={(e) => dispatch(setSortBy(e.target.value))}
            >
                <option value="createdAt">Most Recent</option>
                <option value="views">Most Viewed</option>
            </Select>
        </Flex>
    );
};

export default DiscussionSort;
