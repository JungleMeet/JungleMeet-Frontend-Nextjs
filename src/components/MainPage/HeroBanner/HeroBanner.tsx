import { Box } from "@chakra-ui/react";
import { createStyles } from "@mantine/core";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { heroData } from "./bannerData";
import CarouselSlide from "./CarouselSlide";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import { default as autoPlay } from "embla-carousel-autoplay";

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
    const { classes } = useStyles();
    const autoplay = useRef(autoPlay({ delay: 4000 }));

    return (
        <Box w="100%" maxWidth="1440px" pos="relative" m="auto" paddingTop="76px">
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
};

export default HeroBanner;
