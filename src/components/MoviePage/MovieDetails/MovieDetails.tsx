import { getMovieDetails } from "@/utils/axiosMovieApi";
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
}

const MovieDetails = ({
    genresName,
    resourceId,
    poster,
    releaseDateRightFormat,
    title,
    voteAverage,
    voteCount,
    length,
    languages,
    overview,
    country,
    majorCasts,
    director,
    writer,
}: MovieDetailsProps) => {
    const router = useRouter();
    const { id } = router.query;
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
    });
    useEffect(() => {
        const fetchMovieData = async () => {
            const { data } = await getMovieDetails(id);
            setMoviesInfo(data);
        };
        fetchMovieData();
    }, []);
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
            />
        </>
    );
};

export default MovieDetails;
