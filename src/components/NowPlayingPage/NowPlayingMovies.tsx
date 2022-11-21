import { useState, useEffect } from "react";
import { getNowPlaying } from "@/utils/axiosMovieApi";
import { Grid, Text } from "@chakra-ui/react";
import Movie from "@/components/MainPage/NowPlaying/MovieThumbnail";
import InfiniteScroll from "react-infinite-scroll-component";

interface ImovieList {
    resourceId: number;
    poster: string;
    title: string;
    voteAverage: number;
}

const NowPlayingMovies = () => {
    const [movieList, setMovieList] = useState([]);
    const [moviePage, setMoviePage] = useState(2);
    const [noMore, setNoMore] = useState(true);
    // const nowPlayingMoviesMemo = useMemo(() => movieList, [movieList]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const { data } = await getNowPlaying(1);
                setMovieList(data);
            } catch (err) {
                return err;
            }
        };
        fetchMovies();
    }, []);

    useEffect(() => {
        return () => {
            setMoviePage(2);
            setMovieList([]);
        };
    }, [setMovieList, setMoviePage]);

    // const loadMore = () => {
    //    setMoviePage((currentPage) => currentPage + 1);
    // };

    // useEffect(() => {

    //    if (moviePage !== 1) {
    //        getNowPlaying(moviePage).then(({ data }) => {
    //            setMovieList((currentData) => currentData.concat(data));
    //        });
    //    }
    // }, [moviePage]);

    const fetchMovies = async () => {
        try {
            const { data } = await getNowPlaying(moviePage);
            return data;
        } catch (err) {
            return err;
        }
    };

    const loadMore = async () => {
        const fetchMoreMovie = await fetchMovies();
        // setMovieList([...movieList, ...fetchMoreMovie])
        setMovieList((currentData) => currentData.concat(fetchMoreMovie));
        if (fetchMoreMovie.length === 0 || fetchMoreMovie.length < 20) {
            setNoMore(false);
        }
        setMoviePage(moviePage + 1);
    };

    return (
        <InfiniteScroll
            dataLength={movieList.length}
            next={loadMore}
            hasMore={noMore}
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
            <Grid gridTemplateColumns={"repeat(5,20%)"} gridGap={"72px 4px"}>
                {movieList.map(({ resourceId, poster, title, voteAverage }: ImovieList) => {
                    return (
                        <Movie id={resourceId} src={poster} title={title} tmdb={voteAverage} key={resourceId} />
                    );
                })}
            </Grid>
        </InfiniteScroll>
    );
};

export default NowPlayingMovies;
