import { Box, Flex, Text, Image } from "@chakra-ui/react";

interface IIMDBRankingProps {
    gap: string;
    imdb: string;
    thumbsUp: string;
    color: string;
}

const IMDBRanking = ({ gap, imdb, thumbsUp, color }: IIMDBRankingProps): JSX.Element => {
    return (
        <Flex gap={gap} height="17px" m="0" width="100%">
            <Box display="flex">
                <Image src="/Imdb.svg" mr="9px" />
                <Text fontSize="text5" lineHeight="17px" color={color} fontFamily="secondary">
                    {imdb}
                </Text>
            </Box>
            <Box display="flex">
                <Image src="/thumbsUp.svg" mr="7px" />
                <Text fontSize="text5" lineHeight="17px" color={color} fontFamily="secondary">
                    {thumbsUp}
                </Text>
            </Box>
        </Flex>
    );
};

export default IMDBRanking;
