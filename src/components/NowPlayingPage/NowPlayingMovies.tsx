import { useState, useEffect, useMemo } from "react";
import { getNowPlaying } from "@/utils/axiosApi";
import { Grid } from "@chakra-ui/react";
import Movie from "@/components/MainPage/NowPlaying/MovieThumbnail";

interface ImovieList {
    resourceId: number;
    poster: string;
    title: string;
    voteAverage: number;
}
const NowPlayingMovies = () => {
    const [movieList, setMovieList] = useState([]);
    const nowPlayingMoviesMemo = useMemo(() => movieList, [movieList]);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const { data } = await getNowPlaying();
                setMovieList(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchMovies();
    }, []);

    return (
        <Grid gridTemplateColumns="repeat(5,20%)" gridGap="72px 11px">
            {nowPlayingMoviesMemo?.map(({ resourceId, poster, title, voteAverage }: ImovieList) => {
                return <Movie src={poster} title={title} tmdb={voteAverage} key={resourceId} />;
            })}
        </Grid>
    );
};

export default NowPlayingMovies;
