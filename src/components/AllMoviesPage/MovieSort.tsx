import { Flex, Heading, Select, useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export interface IMovieSortProps {
    sortByFeatured: string;
    sortByFeaturedHandler: any;
}

const MovieSort = ({ sortByFeatured, sortByFeaturedHandler }: IMovieSortProps) => {
    const [isLargerThan1180] = useMediaQuery("(min-width: 1180px)");
    const [hideOnSmScreen, setHideOnSmScreen] = useState(false);
    useEffect(() => {
        setHideOnSmScreen(isLargerThan1180);
    }, [isLargerThan1180]);

    return (
        <Flex alignItems="center">
            {hideOnSmScreen ? (
                <label htmlFor="sort">
                    <Heading fontSize={"text1"} pr="17px">
            Sorted By:
                    </Heading>
                </label>
            ) : null}
            <Select
                height="53px"
                width="250px"
                variant="outline"
                fontSize={"text2"}
                value={sortByFeatured}
                onChange={(e) => sortByFeaturedHandler(e.target.value)}
            >
                <option value="release_date.desc">Release Date, Newest</option>
                <option value="vote_average.desc">Vote Average, Highest</option>
                <option value="popularity.desc">Popularity, Most</option>
                <option value="original_title.asc">Name, A to Z</option>
            </Select>
        </Flex>
    );
};

export default MovieSort;
