import { Box } from "@chakra-ui/react";
import { createStyles } from "@mantine/core";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import CarouselSlide, { ICarouselSlideProps } from "./CarouselSlide";
import { Carousel } from "@mantine/carousel";
import { useState, useEffect, useRef } from "react";
import { default as autoPlay } from "embla-carousel-autoplay";
import { getHeroBannerMovies, getYoutubeLinkById } from "@/utils/axiosMovieApi";

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
    const [secondfetch, setSecondfetch] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            const { data } = await getHeroBannerMovies();
            setTopRatedMovies(data);
            setSecondfetch(true);
        };
        fetchMovies();
    }, []);

    useEffect(() => {
        const fetchYoutubeLinks = async () => {
            const youtubeLinks = await Promise.all(
                topRatedMovies.map(async ({ id, ...rest }) => {
                    return {
                        id,
                        ...rest,
                        youtubeLink: (await getYoutubeLinkById(id)).data,
                    };
                })
            );
            setTopRatedMovies(youtubeLinks);
        };
        fetchYoutubeLinks();
    }, [secondfetch]);

    const { classes } = useStyles();
    const autoplay = useRef(autoPlay({ delay: 4000 }));

    return (
        <Box w="100%" maxWidth="1440px" pos="relative" m="auto">
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
                    {topRatedMovies?.map(({ id, title, voteAverage, overview, heroBanner, youtubeLink }) => (
                        <CarouselSlide
                            key={id}
                            title={title}
                            voteAverage={voteAverage}
                            overview={overview}
                            heroBanner={heroBanner}
                            id={id}
                            youtubeLink={youtubeLink}
                        />
                    ))}
                </Carousel>
            )}
        </Box>
    );
};

export default HeroBanner;
