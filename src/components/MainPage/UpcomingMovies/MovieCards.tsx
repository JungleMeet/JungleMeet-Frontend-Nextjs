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
    genreNames: {
        id: number;
        name: string;
    }[];
}

export interface ImovieListProps {
    movieList: {
        poster: string;
        title: string;
        resourceId: number;
        voteAverage: number;
        genreNames: {
            id: number;
            name: string;
        }[];
    }[];
}

const MovieCards = ({ movieList }: ImovieListProps) => {
    return (
        <CarouselContainer slideSize="222px" slidesToScroll={5}>
            {movieList?.map(({ poster, title, resourceId, voteAverage, genreNames }: ImovieListItem) => {
                return (
                    <Carousel.Slide gap={31} key={resourceId}>
                        <MovieCardContainer>
                            <MovieCardThumbnail src={poster} title={title} id={resourceId} />
                            <MovieCardInfo title={title} tmdb={voteAverage} type={genreNames} />
                        </MovieCardContainer>
                    </Carousel.Slide>
                );
            })}
        </CarouselContainer>
    );
};

export default MovieCards;
