import styled from "styled-components";
import Movie from "./MovieThumbnail";
// import axiosApi from "@/utils/axiosApi";
import { getNowPlaying } from "@/utils/axiosApi";
import { useState, useEffect, useMemo } from "react";

const MoviesContainer = styled.div`
  display: flex;
  gap: 20px;
`;
interface ImovieList {
    resourceId: number;
    poster: string;
    title: string;
    voteAverage: number;
}
const Movies = () => {
    const [movieList, setMovieList] = useState([]);
    const nowPlayingMoviesMemo = useMemo(() => movieList, [movieList]);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const { data } = await getNowPlaying();
                // console.log(data);

                setMovieList(data.slice(0, 4));
            } catch (err) {
                console.log(err);
            }
        };
        fetchMovies();
    }, []);
    // console.log(nowPlayingMoviesMemo);
    return (
        <MoviesContainer>
            {nowPlayingMoviesMemo?.map(({ resourceId, poster, title, voteAverage }: ImovieList) => {
                return <Movie src={poster} title={title} tmdb={voteAverage} key={resourceId} />;
            })}
        </MoviesContainer>
    );
};

export default Movies;
