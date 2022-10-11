import { Box, Flex, Text, Image } from "@chakra-ui/react";

interface IIMDBRankingProps {
  gap: string;
  imdb: string;
  thumbsUp: string;
}

const IMDBRanking = ({ gap, imdb, thumbsUp }: IIMDBRankingProps): JSX.Element => {
  return (
    <Flex gap={gap} height="17px" m="0" width="100%">
      <Box display="flex">
        <Image src="/Imdb.svg" mr="8px" />
        <Text fontSize="text5" lineHeight="15px" color="white">
          {imdb}
        </Text>
      </Box>
      <Box display="flex">
        <Image src="/thumbsUp.svg" mr="8px" />
        <Text fontSize="text5" lineHeight="15px" color="white">
          {thumbsUp}
        </Text>
      </Box>
    </Flex>
  );
};

export default IMDBRanking;
