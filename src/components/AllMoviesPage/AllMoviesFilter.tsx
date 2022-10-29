import { Flex, Select } from "@chakra-ui/react";

const AllMoviesFilter = () => {
    return (
        <Flex alignItems="center" gap="25px">
            <Select placeholder="Year" height="53px" width="110px" variant="outline" fontSize={"text2"}>
                <option value="releaseDateAsc">2022</option>
                <option value="voteAverageDes">2021</option>
                <option value="voteAverageDes">2020</option>
                <option value="voteAverageDes">2019</option>
            </Select>
            <Select
                placeholder="Movie Type"
                height="53px"
                width="176px"
                variant="outline"
                fontSize={"text2"}
            >
                <option value="voteAverageDes">Adventure</option>
                <option value="releaseDateAsc">Action</option>
                <option value="voteAverageDes">Drama</option>
                <option value="voteAverageDes">Horror</option>
            </Select>
        </Flex>
    );
};

export default AllMoviesFilter;
