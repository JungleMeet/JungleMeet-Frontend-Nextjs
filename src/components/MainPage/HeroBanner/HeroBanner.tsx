import { Box } from "@chakra-ui/react";
import { createStyles } from "@mantine/core";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import CarouselSlide from "./CarouselSlide";
import { Carousel } from "@mantine/carousel";
import { useState, useEffect, useRef, useMemo } from "react";
import { default as autoPlay } from "embla-carousel-autoplay";
import axiosApi from "@/utils/axiosMovieApi";

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
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            const { data } = await axiosApi.get("/tops");
            setTopRatedMovies(data);
        };
        fetchMovies();
    }, []);

    const { classes } = useStyles();
    const autoplay = useRef(autoPlay({ delay: 4000 }));

    const topRatedMoviesMemo = useMemo(() => topRatedMovies, [topRatedMovies]);

    return (
        <Box w="100%" maxWidth="1440px" pos="relative" m="auto" paddingTop="76px">
            <Carousel
                withIndicators
                // loop
                classNames={classes}
                controlsOffset="lg"
                nextControlIcon={<AiOutlineRight fill="#ffffff" size="50" />}
                previousControlIcon={<AiOutlineLeft fill="#ffffff" size="50" />}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
                {topRatedMoviesMemo?.map(({ id, title, voteAverage, overview, heroBanner }) => (
                    <CarouselSlide
                        key={id}
                        title={title}
                        voteAverage={voteAverage}
                        overview={overview}
                        heroBanner={heroBanner}
                        id={id}
                    />
                ))}
            </Carousel>
        </Box>
    );
};

export default HeroBanner;
