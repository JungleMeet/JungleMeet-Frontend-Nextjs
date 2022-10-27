import styled from "styled-components";
import Movie from "./MovieThumbnail";

const MoviesContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const movieList = [
    {
        id: 1,
        src: "/batmanbegins.jpg",
        title: "Batman Begins",
        voteAverage: "8.2",
        watch: "Watch options",
        icon: "/watchoptions.svg",
    },
    {
        id: 2,
        src: "/spiderman.jpg",
        title: "Spider-Man: Into the Spider Verse",
        voteAverage: "8.4",
        watch: "Watch trailors",
        icon: "/watchtrailors.svg",
    },
    {
        id: 3,
        src: "/dunkirk.jpg",
        title: "Dunkirk",
        voteAverage: "7.8",
        watch: "Watch trailors",
        icon: "/watchtrailors.svg",
    },
    {
        id: 4,
        src: "/dunkirk.jpg",
        title: "Dunker",
        voteAverage: "7.8",
        watch: "Watch options",
        icon: "/watchtrailors.svg",
    },
];

const Movies = () => {
    return (
        <MoviesContainer>
            {movieList.map(({ id, src, title, voteAverage, watch, icon }) => {
                return <Movie src={src} title={title} tmdb={voteAverage} watch={watch} icon={icon} key={id} />;
            })}
        </MoviesContainer>
    );
};

export default Movies;
