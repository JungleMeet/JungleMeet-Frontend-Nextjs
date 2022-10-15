import { useEffect, useState } from "react";
import Video from "./VideoThumbnail";
import { IVideoThumbnailProps } from "./VideoThumbnail";
import React from "react";
import { Carousel } from "@mantine/carousel";
import CarouselContainer from "@/components/CarouselContainer";

const staticSrc = [
    { src: "https://www.youtube.com/embed/DUnQcJz76Ck", title: "The Super Mario Bros" },
    { src: "https://www.youtube.com/embed/szby7ZHLnkA", title: "Sonic the Hedgehog" },
    { src: "https://www.youtube.com/embed/9kK86zmhpWc", title: "Pikachu's Cutest Moments" },
    { src: "https://www.youtube.com/embed/szby7ZHLnkA", title: "Sonic the Hedgehog" },
];

const Videos = () => {
    const [videoList, setVideoList] = useState<IVideoThumbnailProps[]>([]); // 这里是否需要定义type？是不是有默认值就不需要type了？

    useEffect(() => {
        setVideoList(staticSrc);
    }, []);

    return (
        <CarouselContainer loop={false} slideSize="33.333%">
            {videoList.map(({ src, title }) => ( 
                <Carousel.Slide gap={48}>
                    <Video src={src} title={title} key={title} />
                </Carousel.Slide>
            ))}
        </CarouselContainer>
    );
};

export default Videos;
