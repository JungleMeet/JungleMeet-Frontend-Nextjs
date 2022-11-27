import { Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import MovieYearFilter, { IMovieYearFilterProps } from "./MovieYearFilter";
import MovieTypeFilter, { IMovieTypeFilterProps } from "./MovieTypeFilter";
import MovieSort, { IMovieSortProps } from "./MovieSort";
import { useState, useEffect, } from "react";

const AllMoviesHeader = ({
    filterByYear,
    filterByYearHandler,
    filterByType,
    filterByTypeHandler,
    sortByFeatured,
    sortByFeaturedHandler,
}: IMovieYearFilterProps & IMovieTypeFilterProps & IMovieSortProps) => {
    const [isLargerThan960] = useMediaQuery('(min-width: 960px)');
    const [isLargerThan1180] = useMediaQuery('(min-width: 1180px)');
    const [sortOnNewLine, setSortOnNewLine] = useState(false);
    const [filterSortOnNewLine, setFilterSortOnNewLine] = useState(false);
    useEffect(() => {
        setSortOnNewLine(isLargerThan960);
    }, [isLargerThan960]);
    useEffect(() => {
        setFilterSortOnNewLine(isLargerThan1180);
    }, [isLargerThan1180]);
    return (
        <>
            {filterSortOnNewLine ?
                <Flex alignItems="center" justifyContent="space-between" marginTop="70px" marginBottom="76px">
                    <Heading fontSize={"h1"} fontFamily="heading">
                        All Movies
                    </Heading>
                    <Flex alignItems="center" gap="25px">
                        <MovieYearFilter filterByYear={filterByYear} filterByYearHandler={filterByYearHandler} />
                        <MovieTypeFilter filterByType={filterByType} filterByTypeHandler={filterByTypeHandler} />
                    </Flex>
                    <MovieSort sortByFeatured={sortByFeatured} sortByFeaturedHandler={sortByFeaturedHandler} />
                </Flex> :
                <>
                    <Heading fontSize={{ sm: 'h2', md: 'h1' }} fontFamily="heading" marginTop="70px">
                        All Movies
                    </Heading>
                    {sortOnNewLine ?
                        <Flex alignItems="center" justifyContent="end" marginTop="20px" marginBottom="76px" gap="25px">
                            <Flex alignItems="center" gap="25px">
                                <MovieYearFilter filterByYear={filterByYear} filterByYearHandler={filterByYearHandler} />
                                <MovieTypeFilter filterByType={filterByType} filterByTypeHandler={filterByTypeHandler} />
                            </Flex>
                            <MovieSort sortByFeatured={sortByFeatured} sortByFeaturedHandler={sortByFeaturedHandler} />
                        </Flex> :
                        <Flex flexDirection="column" alignItems="end" justifyContent="end" marginTop="20px" marginBottom="50px" gap="20px">
                            <Flex alignItems="center" gap="25px">
                                <MovieYearFilter filterByYear={filterByYear} filterByYearHandler={filterByYearHandler} />
                                <MovieTypeFilter filterByType={filterByType} filterByTypeHandler={filterByTypeHandler} />
                            </Flex>
                            <MovieSort sortByFeatured={sortByFeatured} sortByFeaturedHandler={sortByFeaturedHandler} />
                        </Flex>
                    }
                </>
            }
        </>
    );
};

export default AllMoviesHeader;
