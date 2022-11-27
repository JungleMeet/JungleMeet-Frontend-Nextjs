import { Box, Button, Image } from "@chakra-ui/react";

interface IButtonWatchTrailer {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    value: number;
}

const ButtonWatchTrailer = ({ onClick, value }: IButtonWatchTrailer): JSX.Element => {
    return (
        <Box>
            <Button
                value={value}
                onClick={onClick}
                width={["", "", "169px"]}
                height={["30px", "30px", "36px"]}
                bg="rose.700"
                color="white"
                fontSize={["text6", "text6", "text5"]}
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
