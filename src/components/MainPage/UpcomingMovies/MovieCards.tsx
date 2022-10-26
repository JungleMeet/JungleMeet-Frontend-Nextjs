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
    src: string;
    title: string;
    id: number;
    imdb: string;
    type: string;
}

interface ImovieList {
    movieList: Array<ImovieListItem>;
}

const MovieCards = ({ movieList }: ImovieList) => {
    return (
        <CarouselContainer loop={true} slideSize="160px">
            {movieList.map(({ src, title, id, imdb, type }: ImovieListItem) => {
                return (
                    <Carousel.Slide gap={31} key={id}>
                        <MovieCardContainer>
                            <MovieCardThumbnail src={src} title={title} id={id} />
                            <MovieCardInfo title={title} imdb={imdb} type={type} />
                        </MovieCardContainer>
                    </Carousel.Slide>
                );
            })}
        </CarouselContainer>
    );
};

export default MovieCards;
