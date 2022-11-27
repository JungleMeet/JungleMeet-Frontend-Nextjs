import React, { useEffect, useState, useMemo } from "react";
import VideoThumbnail from "./VideoThumbnail";
import { Carousel } from "@mantine/carousel";
import CarouselContainer from "@/components/CarouselContainer";

import { getHeroBannerMovies, getYoutubeLinkById } from "@/utils/axiosMovieApi";
import LoadingSpinner from "../LoadingSpinner";

export interface IVideoProps {
    id: number;
    title: string;
    youtubeLink: string;
}

const Videos = () => {
    const [videoList, setVideoList] = useState<IVideoProps[]>([]);
    const [secondFetch, setSecondFetch] = useState(false);
    const [loading, setLoading] = useState(false);
    const allMoviesMemo = useMemo(() => videoList, [videoList]);

    useEffect(() => {
        const fetchMovieId = async () => {
            setLoading(true);
            const { data } = await getHeroBannerMovies();
            setVideoList(data);
            setSecondFetch(false);
        };
        fetchMovieId();
    }, []);

    useEffect(() => {
        const fetchYoutubeVideo = async () => {
            setLoading(true);
            setSecondFetch(true);
            const youtubeLink = await Promise.all(
                videoList.map(async ({ id, ...rest }) => {
                    return {
                        id,
                        ...rest,
                        youtubeLink: (await getYoutubeLinkById(id)).data,
                    };
                })
            );
            setVideoList(youtubeLink);
            setLoading(false);
        };
        fetchYoutubeVideo();
    }, [secondFetch]);

    return (
        <CarouselContainer slideSize="33.333%">
            {videoList.length > 0 &&
        allMoviesMemo.map(({ id, title, youtubeLink }: IVideoProps) => {
            return (
                <Carousel.Slide gap={48} key={id}>
                    {!loading ? 
                        <VideoThumbnail youtubeLink={youtubeLink} title={title} />
                        : <LoadingSpinner size="xl" width="450px" height="253px"/>}
                </Carousel.Slide>
            );
        })}
        </CarouselContainer>
    );
};

export default Videos;
