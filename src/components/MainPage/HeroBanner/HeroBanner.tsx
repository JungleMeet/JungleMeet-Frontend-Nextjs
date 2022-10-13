import heroImage from "@/assets/heroImage-Avengers.png";
import ButtonWatchTrailer from "./ButtonWatchTrailer";
import IMDBRanking from "../IMDBRanking";
import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";
import { Carousel } from '@mantine/carousel';
import { createStyles } from '@mantine/core';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const useStyles = createStyles((_theme, _params, getRef) => ({
    controls: {
      ref: getRef('controls'),
      transition: 'opacity 150ms ease',
      opacity: 0,
    },
  
    root: {
      '&:hover': {
        [`& .${getRef('controls')}`]: {
          opacity: 1,
        },
      },
    },

    control: {
        ref: getRef('control'),
        background: "transparent",
        border:"none"
      },
    }
  ));

const HeroBanner = () => {
    const { classes } = useStyles();
    const heroBanners = [
        {
            title: "Avengers: End game",
            imdb: "8.4",
            thumbsUp: "95%",
            image: heroImage,
            about: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        },
        {
            title: "The Avengers",
            imdb: "8.5",
            thumbsUp: "98%",
            image: heroImage,
            about: "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
        },
        {
            title: "Avengers: Age of Ultron",
            imdb: "8.3",
            thumbsUp: "92%",
            image: heroImage,
            about: "Tony Stark builds an artificial intelligence system named Ultron with the help of Bruce Banner. When the sentient Ultron makes plans to wipe out the human race, the Avengers set out to stop him.",
        },
        {
            title: "Avengers: Infinity War",
            imdb: "8.2",
            thumbsUp: "90%",
            image: heroImage,
            about: "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.",
        },
    ];

    return (
        <Box w="100%" maxWidth="1440px" pos="relative" m="auto">
            <Carousel 
                withIndicators 
                loop
                classNames={classes}
                controlsOffset="lg" 
                nextControlIcon={<AiOutlineRight  fill="#ffffff" size="50"/>}
                previousControlIcon={<AiOutlineLeft fill="#ffffff" size="50"/>}
            >
            {heroBanners.map(({title, imdb, thumbsUp, image, about})=>(
                <Carousel.Slide key={title}>
                <Flex flexDir="column" gap="16px" pos="absolute" top="25%" left="7%" width="404px">
                    <Heading as="h1" fontSize="h1" fontWeight="800" color="white" display="inline-block">
                        {title.split(":")[1]
                            ? `${title.split(":")[0]} :`
                            : title}
                        <br />
                        {title.split(":")[1]}
                    </Heading>
                    <IMDBRanking
                        gap="72.25px"
                        imdb={imdb}
                        thumbsUp={thumbsUp}
                        color="white"
                    />
                    <Text color="white" textStyle="myText">
                        {about}
                    </Text>
                    <ButtonWatchTrailer />
                </Flex>
                <Image src={image.src} boxSize="100%" objectFit="cover" alt="hero image" />
                </Carousel.Slide>
                ))} 
            </Carousel>
        </Box>
    );
};

export default HeroBanner;
