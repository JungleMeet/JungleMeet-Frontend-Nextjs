import React from "react";
import ButtonWatchTrailer from "./ButtonWatchTrailer";
import IMDBRanking from "../IMDBRanking";
import { Heading, Text, Flex, Image } from "@chakra-ui/react";
import { Carousel } from "@mantine/carousel";
import { StaticImageData } from "next/image";

interface IAboutProps {
    title: string;
    imdb: string;
    thumbsUp: string;
    about: string;
    image: StaticImageData;
}

const CarouselSlide = ({ title, imdb, thumbsUp, about, image }: IAboutProps): JSX.Element => {
    return (
        <Carousel.Slide key={title}>
            <Flex flexDir="column" gap="16px" pos="absolute" top="25%" left="7%" width="404px">
                <Heading as="h1" fontSize="h1" fontWeight="800" color="white" display="inline-block">
                    {title.split(":")[1] ? `${title.split(":")[0]} :` : title}
                    <br />
                    {title.split(":")[1]}
                </Heading>
                <IMDBRanking gap="72.25px" imdb={imdb} thumbsUp={thumbsUp} color="white" />
                <Text color="white" textStyle="myText">
                    {about}
                </Text>
                <ButtonWatchTrailer />
            </Flex>
            <Image src={image.src} boxSize="100%" objectFit="cover" alt="hero image" />
        </Carousel.Slide>
    );
};

export default CarouselSlide;
