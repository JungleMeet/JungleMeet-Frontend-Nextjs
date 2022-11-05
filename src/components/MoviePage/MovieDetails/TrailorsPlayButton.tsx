import { Box, Button, Image } from "@chakra-ui/react";

interface ITrailorsPlayButton {
    onClick?: () => void;
    value: number;
}

const TrailorsPlayButton = ({ onClick, value }: ITrailorsPlayButton): JSX.Element => {
    return (
        <Box>
            <Button
                value={value}
                onClick={onClick}
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
