import styled from "styled-components";
import MovieThumbnail from "./MovieThumbnail";
// import axiosApi from "@/utils/axiosApi";
import { getNowPlaying } from "@/utils/axiosMovieApi";
import { useState, useEffect, useMemo } from "react";
import PlayingMovieTrailerModel from "@/components/PlayingMovieTrailerModel";
import { useSelector, useDispatch } from "react-redux";
import { closeMovieTrailerModel } from "@/app/reducer/modalSlice";
import CarouselContainer from "@/components/CarouselContainer";
import { Carousel } from "@mantine/carousel";

const MoviesContainer = styled.div`
  //   display: flex;
  //   gap: 20px;
`;
interface ImovieList {
    resourceId: number;
    poster: string;
    title: string;
    voteAverage: number;
    youtubeLink: string;
}
const Movies = () => {
    const dispatch = useDispatch();
    const videoLink = useSelector((state: any) => state.modal.videoLink);
    const isModalOpen = useSelector((state: any) => state.modal.isModalOpen);
    const [movieList, setMovieList] = useState([]);
    const nowPlayingMoviesMemo = useMemo(() => movieList, [movieList]);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const { data } = await getNowPlaying();

                setMovieList(data.slice(0, 4));
            } catch (err) {
                console.error(err);
            }
        };
        fetchMovies();
    }, []);

    return (
        <MoviesContainer>
            <CarouselContainer slideSize="160px">
                {nowPlayingMoviesMemo?.map(
                    ({ resourceId, poster, title, voteAverage, youtubeLink }: ImovieList) => {
                        return (
                            <Carousel.Slide gap={31} key={resourceId}>
                                <MovieThumbnail
                                    src={poster}
                                    title={title}
                                    tmdb={voteAverage}
                                    key={resourceId}
                                    id={resourceId}
                                    youtubeLink={youtubeLink}
                                />
                            </Carousel.Slide>
                        );
                    }
                )}
            </CarouselContainer>
            <PlayingMovieTrailerModel
                isOpen={isModalOpen}
                onClose={() => dispatch(closeMovieTrailerModel())}
                src={videoLink}
            />
        </MoviesContainer>
    );
};

export default Movies;
