import { useState, useEffect, useMemo } from "react";
import { getAllMovies } from "@/utils/axiosMovieApi";
import { Grid, Flex, Center, Button, Text } from "@chakra-ui/react";
import MovieCardThumbnail from "@/components/MainPage/UpcomingMovies/MovieCardThumbnail";
import MovieCardInfo from "@/components/MainPage/UpcomingMovies/MovieCardInfo";

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
    const allMoviesMemo = useMemo(() => allMovies, [allMovies]);
    const loadMoreMovies = () => {
        setMoviePage((currentPage) => currentPage + 1);
    };

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const { data } = await getAllMovies();
                setAllMovies(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchMovies();
    }, []);
    useEffect(() => {
        if (moviePage !== 1) {
            getAllMovies(moviePage).then(({ data }) => {
                setAllMovies((currentData) => currentData.concat(data));
            });
            console.log(moviePage)
        }
    }, [moviePage]);

    return (
        <>
            <Grid gridTemplateColumns={"repeat(5,20%)"} gridGap={"72px 4px"}>
                {allMoviesMemo?.map(({ poster, title, resourceId, voteAverage, genreNames }: IMovieList) => {
                    return (
                        <>
                            <Flex
                                flexDirection={"column"}
                                width={"194px"}
                                height={"436px"}
                                backgroundColor={"rgba(0, 0, 0, 90%)"}
                                color={"#ffffff"}
                                borderRadius={"5px"}
                            >
                                <MovieCardThumbnail src={poster} title={title} id={resourceId} />
                                <MovieCardInfo title={title} tmdb={voteAverage} type={genreNames} />
                            </Flex>
                        </>
                    );
                })}
            </Grid>
            <Center marginTop={"105px"}>
                <Button
                    border={"none"}
                    bg={"transparent"}
                    _active={"none"}
                    _hover={"none"}
                    _focus={"none"}
                    onClick={loadMoreMovies}
                >
                    <Text
                        fontFamily={"body"}
                        fontWeight={"700"}
                        fontSize={"h3"}
                        lineHeight={"40px"}
                    >
                        Load More
                    </Text>
                </Button>
            </Center>
        </>
    );
};

export default AllMovies;
