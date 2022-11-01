/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import VideoThumbnail from "./VideoThumbnail";
import { IVideoThumbnailProps } from "./VideoThumbnail";
import React from "react";
import { Carousel } from "@mantine/carousel";
import CarouselContainer from "@/components/CarouselContainer";

const staticSrc = [
    { id: "1", src: "https://www.youtube.com/embed/DUnQcJz76Ck", title: "The Super Mario Bros" },
    { id: "2", src: "https://www.youtube.com/embed/szby7ZHLnkA", title: "Sonic the Hedgehog" },
    { id: "3", src: "https://www.youtube.com/embed/9kK86zmhpWc", title: "Pikachu's Cutest Moments" },
    { id: "4", src: "https://www.youtube.com/embed/szby7ZHLnkA", title: "Sonic the Hedgehog again" },
];
const Videos = () => {
    const [videoList, setVideoList] = useState<IVideoThumbnailProps[]>([]);

    useEffect(() => {
        setVideoList(staticSrc);
    }, []);

    return (
        <>
            {videoList.length > 0 && (
                <CarouselContainer slideSize="33.333%">
                    {videoList?.map(({ id, src, title }) => (
                        <Carousel.Slide gap={48} key={id}>
                            <VideoThumbnail src={src} title={title} />
                        </Carousel.Slide>
                    ))}
                </CarouselContainer>
            )}
        </>
    );
};

export default Videos;
