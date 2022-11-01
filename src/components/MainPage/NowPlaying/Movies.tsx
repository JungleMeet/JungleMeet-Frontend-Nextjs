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
    youtubeLink: string;
}
const Movies = () => {
    const [movieList, setMovieList] = useState([]);
    const nowPlayingMoviesMemo = useMemo(() => movieList, [movieList]);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const { data } = await getNowPlaying();

                setMovieList(data.slice(0, 4));
            } catch (err) {
                console.log(err);
            }
        };
        fetchMovies();
    }, []);

    return (
        <MoviesContainer>
            {nowPlayingMoviesMemo?.map(
                ({ resourceId, poster, title, voteAverage, youtubeLink }: ImovieList) => {
                    return (
                        <Movie
                            src={poster}
                            title={title}
                            tmdb={voteAverage}
                            key={resourceId}
                            youtubeLink={youtubeLink}
                        />
                    );
                }
            )}
        </MoviesContainer>
    );
};

export default Movies;
