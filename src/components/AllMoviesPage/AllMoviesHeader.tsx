import { Flex, Heading } from "@chakra-ui/react";
import MovieYearFilter, { IMovieYearFilterProps } from "./MovieYearFilter";
import MovieTypeFilter, { IMovieTypeFilterProps } from "./MovieTypeFilter";
import MovieSort, { IMovieSortProps } from "./MovieSort";

const AllMoviesHeader = ({
    filterByYear,
    filterByYearHandler,
    filterByType,
    filterByTypeHandler,
    sortByFeatured,
    sortByFeaturedHandler,
}: IMovieYearFilterProps & IMovieTypeFilterProps & IMovieSortProps) => {
    return (
        <Flex alignItems="center" justifyContent="space-between" marginTop="70px" marginBottom="76px">
            <Heading fontSize={"h1"} fontFamily="heading">
        All Movies
            </Heading>
            <Flex alignItems="center" gap="25px">
                <MovieYearFilter filterByYear={filterByYear} filterByYearHandler={filterByYearHandler} />
                <MovieTypeFilter filterByType={filterByType} filterByTypeHandler={filterByTypeHandler} />
            </Flex>
            <MovieSort sortByFeatured={sortByFeatured} sortByFeaturedHandler={sortByFeaturedHandler} />
        </Flex>
    );
};

export default AllMoviesHeader;
