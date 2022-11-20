import { Flex, Heading, Select } from "@chakra-ui/react";

export interface IMovieSortProps {
    sortByFeatured: string;
    sortByFeaturedHandler: any;
}

const MovieSort = ({ sortByFeatured, sortByFeaturedHandler }: IMovieSortProps) => {
    return (
        <Flex alignItems="center">
            <label htmlFor="sort">
                <Heading fontSize={"text1"} pr="17px">
          Sorted By:
                </Heading>
            </label>
            <Select
                placeholder="Featured"
                height="53px"
                width="176px"
                variant="outline"
                fontSize={"text2"}
                value={sortByFeatured}
                onChange={(e) => sortByFeaturedHandler(e.target.value)}
            >
                <option value="release_date.desc">Release Date, New to Old</option>
                <option value="release_date.asc">Release Date, Old to New</option>
                <option value="vote_average.desc">Vote Average, High to Low</option>
                <option value="original_title.asc">Name, A to Z</option>
            </Select>
        </Flex>
    );
};

export default MovieSort;
