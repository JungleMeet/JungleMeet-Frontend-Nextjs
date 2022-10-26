import { Box, Flex, Text, Image } from "@chakra-ui/react";

interface ITMDBRankingProps {
    gap: string;
    tmdb: string;
    thumbsUp?: string;
    color: string;
}

const TMDBRanking = ({ gap, tmdb, color }: ITMDBRankingProps): JSX.Element => {
    return (
        <Flex gap={gap} height="17px" m="0" width="100%">
            <Box display="flex">
                <Image src="/tmdb.svg" mr="9px" width="40px" />
                <Text fontSize="text5" lineHeight="17px" color={color} fontFamily="secondary">
                    {tmdb}
                </Text>
            </Box>
            {/* <Box display="flex">
                <Image src="/thumbsUp.svg" mr="7px" />
                <Text fontSize="text5" lineHeight="17px" color={color} fontFamily="secondary">
                    {thumbsUp}
                </Text>
            </Box> */}
        </Flex>
    );
};

export default TMDBRanking;
