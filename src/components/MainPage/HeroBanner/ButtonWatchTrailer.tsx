import { Box, Button, Image, Spinner } from "@chakra-ui/react";
import {memo} from "react"
interface IButtonWatchTrailer {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    value: number;
    loading: boolean;
}

const ButtonWatchTrailer = ({ onClick, value, loading }: IButtonWatchTrailer): JSX.Element => {
    return (
        <Box>
            { !loading?<Button
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
                <Image src="/playIcon.svg" boxSize="16px" mr="8px" />WATCH TRAILER
            </Button>
                :<Button
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
                    <Spinner />
                </Button>}
        </Box>
    );
};

export default memo(ButtonWatchTrailer);
