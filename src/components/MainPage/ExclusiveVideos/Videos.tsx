import React, { useEffect, useState } from "react";
import VideoThumbnail from "./VideoThumbnail";
import { Carousel } from "@mantine/carousel";
import CarouselContainer from "@/components/CarouselContainer";
import { Spinner, Box } from "@chakra-ui/react";

import { getHeroBannerMovies, getYoutubeLinkById } from "@/utils/axiosMovieApi";

export interface IVideoProps {
    id: number;
    title: string;
    youtubeLink: string;
}

const Videos = () => {
    const [videoList, setVideoList] = useState<IVideoProps[]>([]);
    const [secondFetch, setSecondFetch] = useState(false);
    const [loading, setLoading] = useState(false);

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
        <>
            <CarouselContainer slideSize="33.333%">
                {videoList.length > 0 &&
          videoList.map(({ id, title, youtubeLink }: IVideoProps) => {
              return (
                  <>
                      {!loading ? (
                          <Carousel.Slide gap={48} key={id}>
                              <VideoThumbnail youtubeLink={youtubeLink} title={title} />
                          </Carousel.Slide>
                      ) : (
                          <Box
                              width="450px"
                              height="253px"
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                          >
                              <Spinner size="xl" color="blue.500" thickness="4px" emptyColor="gray.200" />
                          </Box>
                      )}
                  </>
              );
          })}
            </CarouselContainer>
        </>
    );
};

export default Videos;
