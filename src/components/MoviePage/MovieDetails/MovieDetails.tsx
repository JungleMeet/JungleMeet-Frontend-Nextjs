import { getMovieDetails, getYoutubeLinkById } from "@/utils/axiosMovieApi";
import { useRouter } from "next/router";
import MovieInfoDetail from "./MovieInfoDetail";
import React, { useState, useEffect } from "react";

export interface MovieDetailsProps {
    genresName: [];
    resourceId: number;
    poster: string;
    releaseDateRightFormat: string;
    title: string;
    voteAverage: number;
    voteCount: number;
    length: string;
    languages: [];
    overview: string;
    country: [];
    majorCasts: [];
    director: [];
    writer: [];
    video: string;
}

const MovieDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [secondfetch, setSecondfetch] = useState(false);
    const [moviesInfo, setMoviesInfo] = useState<MovieDetailsProps>({
        genresName: [],
        resourceId: 0,
        poster: "",
        releaseDateRightFormat: "",
        title: "",
        voteAverage: 0,
        voteCount: 0,
        length: "",
        languages: [],
        overview: "",
        country: [],
        majorCasts: [],
        director: [],
        writer: [],
        video: "",
    });
    const [moviesVideo, setMoviesVideo] = useState("");

    useEffect(() => {
        const fetchMovieData = async () => {
            const { data } = await getMovieDetails(id);
            setSecondfetch(true);
            setMoviesInfo(data);
        };
        fetchMovieData();
    }, []);
    useEffect(() => {
        const fetchVideoData = async () => {
            const { data } = await getYoutubeLinkById(moviesInfo.resourceId);
            if (data.length > 0) {
                setMoviesVideo(data);
            } else {
                setMoviesVideo("");
            }
        };
        fetchVideoData();
    }, [secondfetch]);

    return (
        <>
            <MovieInfoDetail
                genresName={moviesInfo.genresName}
                resourceId={moviesInfo.resourceId}
                poster={moviesInfo.poster}
                releaseDateRightFormat={moviesInfo.releaseDateRightFormat}
                title={moviesInfo.title}
                voteAverage={moviesInfo.voteAverage}
                voteCount={moviesInfo.voteCount}
                length={moviesInfo.length}
                languages={moviesInfo.languages}
                overview={moviesInfo.overview}
                country={moviesInfo.country}
                majorCasts={moviesInfo.majorCasts}
                director={moviesInfo.director}
                writer={moviesInfo.writer}
                video={moviesVideo}
            />
        </>
    );
};

export default MovieDetails;
