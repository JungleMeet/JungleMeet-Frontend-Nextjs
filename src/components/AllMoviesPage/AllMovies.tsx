import styled from "styled-components";
import { useState, useEffect, useMemo } from "react";
import { getUpcoming } from "@/utils/axiosMovieApi";
import { Grid } from "@chakra-ui/react";
import MovieCardThumbnail from "@/components/MainPage/UpcomingMovies/MovieCardThumbnail";
import MovieCardInfo from "@/components/MainPage/UpcomingMovies/MovieCardInfo";

const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 194px;
  height: 436px;
  background-color: rgba(0, 0, 0, 90%);
  color: #ffffff;
  border-radius: 5px;
`;

interface IMovieList {
    poster: string;
    title: string;
    resourceId: number;
    voteAverage: number;
    genreNames: {
        id: number;
        name: string;
    }[];
}

const AllMovies = () => {
    const [allMovies, setAllMovies] = useState([]);
    const allMoviesMemo = useMemo(() => allMovies, [allMovies]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const { data } = await getUpcoming();
                setAllMovies(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchMovies();
    }, []);

    return (
        <Grid gridTemplateColumns="repeat(5,20%)" gridGap="72px 4px">
            {allMoviesMemo?.map(({ poster, title, resourceId, voteAverage, genreNames }: IMovieList) => {
                return (
                    <>
                        <MovieCardContainer>
                            <MovieCardThumbnail src={poster} title={title} id={resourceId} />
                            <MovieCardInfo title={title} tmdb={voteAverage} type={genreNames} />
                        </MovieCardContainer>
                    </>
                );
            })}
        </Grid>
    );
};

export default AllMovies;
