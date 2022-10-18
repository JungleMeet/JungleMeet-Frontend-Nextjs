import { Box, Flex, Text, Image } from "@chakra-ui/react";

interface IIMDBRankingProps {
	gap: string;
	imdb: string;
	thumbsUp: string;
	color: string;
}

const IMDBRanking = ({ gap, imdb, thumbsUp, color }: IIMDBRankingProps): JSX.Element => {
<<<<<<< HEAD
	return (
		<Flex gap={gap} height="17px" m="0" width="100%">
			<Box display="flex">
				<Image src="/Imdb.svg" mr="9px" />
				<Text fontSize="text5" lineHeight="17px" color={color || "white"} fontFamily="secondary">
					{imdb}
				</Text>
			</Box>
			<Box display="flex">
				<Image src="/thumbsUp.svg" mr="7px" />
				<Text fontSize="text5" lineHeight="17px" color={color || "white"} fontFamily="secondary">
					{thumbsUp}
				</Text>
			</Box>
		</Flex>
	);
||||||| 8850e32
    return (
        <Flex gap={gap} height="17px" m="0" width="100%">
            <Box display="flex">
                <Image src="/Imdb.svg" mr="9px" />
                <Text fontSize="text5" lineHeight="17px" color={color || "white"} fontFamily="secondary">
                    {imdb}
                </Text>
            </Box>
            <Box display="flex">
                <Image src="/thumbsUp.svg" mr="7px" />
                <Text fontSize="text5" lineHeight="17px" color={color || "white"} fontFamily="secondary">
                    {thumbsUp}
                </Text>
            </Box>
        </Flex>
    );
=======
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
>>>>>>> c82736b322d3629103b38d9d28bf52fec281b7e0
};

export default IMDBRanking;
