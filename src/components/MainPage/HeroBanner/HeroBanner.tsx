import { Box } from "@chakra-ui/react";
import { createStyles } from "@mantine/core";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import CarouselSlide, { ICarouselSlideProps } from "./CarouselSlide";
import { Carousel } from "@mantine/carousel";
import { useState, useEffect, useRef } from "react";
import { default as autoPlay } from "embla-carousel-autoplay";
import { getHeroBannerMovies } from "@/utils/axiosMovieApi";

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
    const [topRatedMovies, setTopRatedMovies] = useState<ICarouselSlideProps[]>([]);
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            const { data } = await getHeroBannerMovies();
            setTopRatedMovies(data);
        };
        fetchMovies();
    }, []);

    const { classes } = useStyles();
    const autoplay = useRef(autoPlay({ delay: 4000 }));

    return (
        <Box w="100%" maxWidth="1440px" pos="relative" m="auto" paddingTop="76px">
            {topRatedMovies.length > 0 && (
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
                    {topRatedMovies?.map(({ id, ...rest }) => (
                        <CarouselSlide key={id} id={id} {...rest} />
                    ))}
                </Carousel>
            )}
        </Box>
    );
};

export default HeroBanner;
