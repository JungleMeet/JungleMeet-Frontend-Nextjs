import { useState, useEffect, useMemo } from "react";
import { getMoviesByCondition } from "@/utils/axiosMovieApi";
import { Grid, Flex, Text } from "@chakra-ui/react";
import MovieCardThumbnail from "@/components/MainPage/UpcomingMovies/MovieCardThumbnail";
import MovieCardInfo from "@/components/MainPage/UpcomingMovies/MovieCardInfo";
import AllMoviesHeader from "./AllMoviesHeader";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";

interface IMovieList {
    poster: string;
    title: string;
    resourceId: number;
    voteAverage: number;
    genreNames: {
        id: number;
        name: string;
    }[];
}

const AllMovies = () => {
    const [allMovies, setAllMovies] = useState([]);
    const [moviePage, setMoviePage] = useState(1);
    const [filterByYear, setFilterByYear] = useState("");
    const [filterByType, setFilterByType] = useState("");
    const [sortByFeatured, setSortByFeatured] = useState("release_date.desc");
    const allMoviesMemo = useMemo(() => allMovies, [allMovies]);

    const router = useRouter();
    const { genre } = router.query;

    useEffect(() => {
        setFilterByType(genre as string);
        getMoviesByCondition(filterByYear, filterByType, sortByFeatured, moviePage).then(({ data }) => {
            setAllMovies(data);
        });
    }, []);

    useEffect(() => {
        getMoviesByCondition(filterByYear, filterByType, sortByFeatured, moviePage).then(({ data }) => {
            setAllMovies(data);
        });
    }, []);

    const filterByYearHandler = (filterByYear: string) => {
        setFilterByYear(filterByYear);
    };
    const filterByTypeHandler = (filterByType: string) => {
        setFilterByType(filterByType);
    };
    const sortByFeaturedHandler = (sortByFeatured: string) => {
        setSortByFeatured(sortByFeatured);
    };
    useEffect(() => {
        getMoviesByCondition(filterByYear, filterByType, sortByFeatured, moviePage).then(({ data }) => {
            setAllMovies(data);
        });
        setMoviePage(1);
    }, [filterByYear, filterByType, sortByFeatured]);

    const loadMore = () => {
        setMoviePage((currentPage) => currentPage + 1);
    };
    useEffect(() => {
        if (moviePage !== 1) {
            getMoviesByCondition(filterByYear, filterByType, sortByFeatured, moviePage).then(
                ({ data }) => {
                    setAllMovies((currentData) => currentData.concat(data));
                }
            );
        }
    }, [moviePage]);

    return (
        <>
            <AllMoviesHeader
                filterByYear={filterByYear}
                filterByYearHandler={filterByYearHandler}
                filterByType={filterByType}
                filterByTypeHandler={filterByTypeHandler}
                sortByFeatured={sortByFeatured}
                sortByFeaturedHandler={sortByFeaturedHandler}
            />
            <InfiniteScroll
                dataLength={allMovies.length}
                next={loadMore}
                hasMore={true}
                loader={
                    <Text
                        fontFamily={"body"}
                        fontWeight={"700"}
                        fontSize={"h3"}
                        lineHeight={"40px"}
                        textAlign={"center"}
                        marginTop={"105px"}
                    >
            loading...
                    </Text>
                }
                endMessage={
                    <Text
                        fontFamily={"body"}
                        fontWeight={"700"}
                        fontSize={"h3"}
                        lineHeight={"40px"}
                        textAlign={"center"}
                        marginTop={"105px"}
                    >
            The end
                    </Text>
                }
            >
                <Grid gridTemplateColumns={"repeat(auto-fit, minmax(194px, 1fr))"} gridGap={"72px 20px"}>
                    {allMoviesMemo?.map(
                        ({ poster, title, resourceId, voteAverage, genreNames }: IMovieList) => {
                            return (
                                <Flex
                                    flexDirection={"column"}
                                    width={"194px"}
                                    min-height={"436px"}
                                    backgroundColor={"rgba(0, 0, 0, 90%)"}
                                    color={"#ffffff"}
                                    borderRadius={"5px"}
                                    key={resourceId}
                                    _hover={{
                                        boxShadow:
                      "5px 5px 5px #ebb513, -5px -5px 5px #ebb513, 5px -5px 5px #ebb513, -5px 5px 5px #ebb513",
                                    }}
                                >
                                    <MovieCardThumbnail src={poster} title={title} id={resourceId} />
                                    <MovieCardInfo title={title} tmdb={voteAverage} type={genreNames} />
                                </Flex>
                            );
                        }
                    )}
                </Grid>
            </InfiniteScroll>
        </>
    );
};

export default AllMovies;
