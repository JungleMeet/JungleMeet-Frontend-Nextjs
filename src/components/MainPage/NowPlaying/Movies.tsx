import styled from "styled-components";
import Movie from "./MovieThumbnail";
import axiosApi from "@/utils/axiosApi";
import { useState, useEffect } from "react";

const MoviesContainer = styled.div`
  display: flex;
  gap: 20px;
`;
// const movieList = [
//     {
//         id: 1,
//         src: "/batmanbegins.jpg",
//         title: "Batman Begins",
//         voteAverage: "8.2",
//         watch: "Watch options",
//         icon: "/watchoptions.svg",
//     },
//     {
//         id: 2,
//         src: "/spiderman.jpg",
//         title: "Spider-Man: Into the Spider Verse",
//         voteAverage: "8.4",
//         watch: "Watch trailors",
//         icon: "/watchtrailors.svg",
//     },
//     {
//         id: 3,
//         src: "/dunkirk.jpg",
//         title: "Dunkirk",
//         voteAverage: "7.8",
//         watch: "Watch trailors",
//         icon: "/watchtrailors.svg",
//     },
//     {
//         id: 4,
//         src: "/dunkirk.jpg",
//         title: "Dunker",
//         voteAverage: "7.8",
//         watch: "Watch options",
//         icon: "/watchtrailors.svg",
//     },
// ];

interface ImovieList {
    resourceId: number;
    poster: string;
    title: string;
    voteAverage: number;
}
const Movies = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const { data } = await axiosApi.get("/movies/list?tag=now_playing");
                console.log(data);
                
                setMovieList(data.slice(0, 4));
            } catch (err) {
                console.log(err);
            }
        };
        fetchMovies();
    }, []);

    return (
        <MoviesContainer>
            {movieList.map(({ resourceId, poster, title, voteAverage }: ImovieList) => {
                return <Movie src={poster} title={title} tmdb={voteAverage} key={resourceId} />;
            })}
        </MoviesContainer>
    );
};

export default Movies;
