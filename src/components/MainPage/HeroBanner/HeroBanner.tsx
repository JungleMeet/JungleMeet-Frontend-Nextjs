import heroImage from "@/assets/heroImage-Avengers.png";
import ButtonWatchTrailer from "./ButtonWatchTrailer";
import IMDBRanking from "../IMDBRanking";
import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";

const HeroBanner = () => {
    const heroBanners = [
        {
            title: "Avengers: End game",
            imdb: "8.4",
            thumbsUp: "95%",
            image: heroImage,
            info: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        },
        {
            title: "The Avengers",
            imdb: "8.5",
            thumbsUp: "98%",
            image: heroImage,
            info: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        },
        {
            title: "Avengers: Age of Ultron",
            imdb: "8.3",
            thumbsUp: "92%",
            image: heroImage,
            info: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        },
        {
            title: "Avengers: Infinity War",
            imdb: "8.2",
            thumbsUp: "90%",
            image: heroImage,
            info: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        },
    ];

    return (
        <Box w="1440px" pos="relative" m="auto">
            <Flex flexDir="column" gap="16px" pos="absolute" top="25%" left="5%" width="404px">
                <Heading as="h1" fontSize="h1" fontWeight="800" color="white" display="inline-block">
                    {heroBanners[0].title.split(":")[1]
                        ? `${heroBanners[1].title.split(":")[0]} :`
                        : heroBanners[1].title}
                    <br />
                    {heroBanners[0].title.split(":")[1]}
                </Heading>
                <IMDBRanking
                    gap="72.25px"
                    imdb={heroBanners[0].imdb}
                    thumbsUp={heroBanners[0].thumbsUp}
                    color="white"
                />
                <Text color="white" textStyle="myText">
                    {heroBanners[0].info}
                </Text>
                <ButtonWatchTrailer />
            </Flex>
            <Image src={heroBanners[0].image.src} boxSize="100%" objectFit="cover" alt="hero image" />
        </Box>
    );
};

export default HeroBanner;
