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
        imdb: "8.2",
        watch: "Watch options",
        icon: "/watchoptions.svg",
    },
    {
        id: 2,
        src: "/spiderman.jpg",
        title: "Spider-Man: Into the Spider Verse",
        imdb: "8.4",
        watch: "Watch trailors",
        icon: "/watchtrailors.svg",
    },
    {
        id: 3,
        src: "/dunkirk.jpg",
        title: "Dunkirk",
        imdb: "7.8",
        watch: "Watch trailors",
        icon: "/watchtrailors.svg",
    },
    {
        id: 4,
        src: "/dunkirk.jpg",
        title: "Dunker",
        imdb: "7.8",
        watch: "Watch trailors",
        icon: "/watchtrailors.svg",
    },
];

const Movies = () => {
    return (
        <MoviesContainer>
            {movieList.map(({ id, src, title, imdb, watch, icon }) => {
                return (
                    <Movie
                        src={src}
                        title={title}
                        imdb={imdb}
                        watch={watch}
                        icon={icon}
                        key={id}
                    />
                );
            })}
        </MoviesContainer>
    );
};

export default Movies;
