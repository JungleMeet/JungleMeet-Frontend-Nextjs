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
            <Flex
                flexDir="column"
                gap="16px"
                pos="absolute"
                bottom="50px"
                left="80px"
                width="40%"
                padding="30px 50px"
                backgroundColor="rgba(0,0,0,0.4)"
                borderRadius="20px"
            >
                <Heading as="h1" fontSize="h1" fontWeight="800" color="white" display="inline-block">
                    {title}
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
