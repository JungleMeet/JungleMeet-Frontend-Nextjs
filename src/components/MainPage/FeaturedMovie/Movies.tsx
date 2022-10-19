import styled from "styled-components";
import Movie from "./MovieThumbnail";

const MoviesContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const movieList = [
    {
        src: "/batmanbegins.jpg",
        title: "Batman Begins",
        imdb: "8.2",
        thumbsUp: "70%",
        watch: "Watch options",
    },
    {
        src: "/spiderman.jpg",
        title: "Spider-Man: Into the Spider Verse",
        imdb: "8.4",
        thumbsUp: "87%",
        watch: "Watch trailors",
    },
    { src: "/dunkirk.jpg", title: "Dunkirk", imdb: "7.8", thumbsUp: "94%", watch: "Watch trailors" },
    { src: "/dunkirk.jpg", title: "Dunker", imdb: "7.8", thumbsUp: "94%", watch: "Watch options" },
];

const Movies = () => {
    return (
        <MoviesContainer>
            {movieList.map(({ src, title, imdb, thumbsUp, watch }) => {
                return (
                    <Movie
                        src={src}
                        title={title}
                        imdb={imdb}
                        thumbsUp={thumbsUp}
                        watch={watch}
                        key={title}
                    />
                );
            })}
        </MoviesContainer>
    );
};

export default Movies;
