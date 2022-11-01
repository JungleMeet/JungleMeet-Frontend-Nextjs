import axiosApi from "@/utils/axiosMovieApi";
import { Box, Button, Image } from "@chakra-ui/react";

interface IButtonWatchTrailer {
    onClick?: () => void;
    value: number;
}

const ButtonWatchTrailer = ({ onClick, value }: IButtonWatchTrailer): JSX.Element => {
    const handleMovieTrailer = async () => {
        const { data } = await axiosApi.get(`trailers/${value}`);
        document.location.href = `https://www.youtube.com/watch?v=${data}`;
    };

    return (
        <Box>
            <Button
                value={value}
                onClick={handleMovieTrailer}
                width="169px"
                height="36px"
                bg="rose.700"
                color="white"
                fontSize="text"
                fontFamily="secondary"
                _hover={{
                    background: "rose.900",
                }}
            >
                <Image src="/playIcon.svg" boxSize="16px" mr="8px" />
        WATCH TRAILER
            </Button>
        </Box>
    );
};

export default ButtonWatchTrailer;
