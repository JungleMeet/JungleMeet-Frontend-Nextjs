import styled from "styled-components";
import MovieCardThumbnail from "./MovieCardThumbnail";
import MovieCardInfo from "./MovieCardInfo";
import CarouselContainer from "@/components/CarouselContainer";
import { Carousel } from "@mantine/carousel";

const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 222px;
  height: 454px;
  background-color: rgba(0, 0, 0, 90%);
  color: #ffffff;
  border-radius: 5px;
`;

interface ImovieListItem {
    poster: string;
    title: string;
    resourceId: number;
    voteAverage: number;
    genres: string;
}

interface ImovieList {
    movieList: {
        poster: string;
        title: string;
        resourceId: number;
        voteAverage: number;
        genres: string;
    }[];
}

const MovieCards = ({ movieList }: ImovieList) => {
    return (
        <CarouselContainer loop={true} slideSize="160px">
            {movieList?.map(({ poster, title, resourceId, voteAverage, genres }: ImovieListItem) => {
                return (
                    <Carousel.Slide gap={31} key={resourceId}>
                        <>
                            {console.log("in movie cards", movieList)}
                            <MovieCardContainer>
                                <MovieCardThumbnail src={poster} title={title} id={resourceId} />
                                <MovieCardInfo title={title} tmdb={voteAverage} type={genres} />
                            </MovieCardContainer>
                        </>
                    </Carousel.Slide>
                );
            })}
        </CarouselContainer>
    );
};

export default MovieCards;