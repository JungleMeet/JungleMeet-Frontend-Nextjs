import React, { useEffect, useState } from "react";
import VideoThumbnail from "./VideoThumbnail";
import { Carousel } from "@mantine/carousel";
import CarouselContainer from "@/components/CarouselContainer";

import { getHeroBannerMovies, getYoutubeLinkById } from "@/utils/axiosMovieApi";

export interface IVideoProps {
    id: number;
    title: string;
    youtubeLink: string;
}

const Videos = () => {
    const [videoList, setVideoList] = useState<IVideoProps[]>([]);
    const [secondFetch, setSecondFetch] = useState(false);

    useEffect(() => {
        const fetchMovieId = async () => {
            const { data } = await getHeroBannerMovies();
            setVideoList(data);
            setSecondFetch(false);
        };
        fetchMovieId();
    }, []);

    useEffect(() => {
        const fetchYoutubeVideo = async () => {
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
        };
        fetchYoutubeVideo();
    }, [secondFetch]);

    return (
        <>
            <CarouselContainer slideSize="33.333%">
                {videoList.length > 0 &&
          videoList.map((item) => {
              return (
                  <Carousel.Slide gap={48} key={item.id}>
                      {item.youtubeLink && (
                          <VideoThumbnail youtubeLink={item.youtubeLink} title={item.title} />
                      )}
                  </Carousel.Slide>
              );
          })}
            </CarouselContainer>
        </>
    );
};

export default Videos;
