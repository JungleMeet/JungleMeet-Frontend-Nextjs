// import axiosApi from "@/utils/axiosApi";
import { Box, Button, Image } from "@chakra-ui/react";

interface ITrailorsPlayButton {
    onClick?: () => void;
    value: number;
}

const TrailorsPlayButton = ({ onClick, value }: ITrailorsPlayButton): JSX.Element => {
    const handleMovieTrailer = async () => {
    // const { data } = await axiosApi.get(`/movies/trailers/${value}`);
    // document.location.href = `https://www.youtube.com/watch?v=${data}`;
    };

    return (
        <Box>
            <Button
                value={value}
                onClick={handleMovieTrailer}
                // width="169px"
                // height="36px"
                bg="transparent"
                // color="red"
                // fontSize="text"
                // fontFamily="secondary"
                _hover={{
                    background: "transparent",
                }}
            >
                <Image src="/redPlayIcon.svg" />
            </Button>
        </Box>
    );
};

export default TrailorsPlayButton;
