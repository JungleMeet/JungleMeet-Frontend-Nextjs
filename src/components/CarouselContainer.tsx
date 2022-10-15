import React from "react";
import { Carousel } from "@mantine/carousel";
import { createStyles } from "@mantine/core";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

interface ICarouselContainerProps {
    children: React.ReactNode;
    loop: boolean;
    slideSize: string;
}

const useStyles = createStyles((_theme, _params, getRef) => ({
    controls: {
        ref: getRef("controls"),
        width: "110%",
        padding: "0",
        left: "50%",
        transform: "translate(-50%)"
    },

    control: {
        ref: getRef("control"),
        background: "transparent",
        border: "none",
    },
}));

const CarouselContainer = ({ children, slideSize, loop }: ICarouselContainerProps): JSX.Element => {
    const { classes } = useStyles();

    return (
        <Carousel
            loop={loop}
            classNames={classes}
            controlsOffset="xl"
            nextControlIcon={<AiOutlineRight fill="gray.900" size="40" />}
            previousControlIcon={<AiOutlineLeft fill="gray.900" size="40"/>}
            height="100%"
            slideSize={slideSize}
            align="start"
        >
            {children}
         </Carousel>
    );
};

export default CarouselContainer;

