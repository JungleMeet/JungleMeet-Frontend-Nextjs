import { Box } from "@chakra-ui/react";
import { createStyles } from "@mantine/core";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { heroData } from "./bannerData";
import CarouselSlide from "./CarouselSlide";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const useStyles = createStyles((_theme, _params, getRef) => ({
    controls: {
        ref: getRef("controls"),
        transition: "opacity 150ms ease",
        opacity: 0,
    },

    root: {
        "&:hover": {
            [`& .${getRef("controls")}`]: {
                opacity: 1,
            },
        },
    },

    control: {
        ref: getRef("control"),
        background: "transparent",
        border: "none",
    },
}));

const HeroBanner = () => {
<<<<<<< HEAD
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
||||||| 8850e32
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
=======
    const { classes } = useStyles();
    const autoplay = useRef(Autoplay({ delay: 4000 }));
>>>>>>> c82736b322d3629103b38d9d28bf52fec281b7e0

<<<<<<< HEAD
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
||||||| 8850e32
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
=======
    return (
        <Box w="100%" maxWidth="1440px" pos="relative" m="auto">
            <Carousel
                withIndicators
                loop
                classNames={classes}
                controlsOffset="lg"
                nextControlIcon={<AiOutlineRight fill="#ffffff" size="50" />}
                previousControlIcon={<AiOutlineLeft fill="#ffffff" size="50" />}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
                {heroData.map((item) => (
                    <CarouselSlide key={item.title} {...item} />
                ))}
            </Carousel>
        </Box>
    );
>>>>>>> c82736b322d3629103b38d9d28bf52fec281b7e0
};

export default HeroBanner;
