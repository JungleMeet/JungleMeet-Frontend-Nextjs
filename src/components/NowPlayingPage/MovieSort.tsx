import { Flex, Heading, Select } from "@chakra-ui/react";

const MovieSort = () => {
    return (
        <Flex alignItems="center">
            <label htmlFor="sort">
                <Heading fontSize={"text1"} pr="17px">
          Sorted By:
                </Heading>
            </label>
            <Select
                placeholder="Release Date"
                height="53px"
                width="176px"
                variant="outline"
                fontSize={"text2"}
            >
                <option value="releaseDateAsc">releaseDateAsc</option>
                <option value="voteAverageDes">voteAverageDes</option>
            </Select>
        </Flex>
    );
};

export default MovieSort;
