import { Box, Flex, Text, Image } from "@chakra-ui/react";

interface IFireRankingProps {
    gap: string;
    fire: string;
}

const FireRanking = ({ gap, fire }: IFireRankingProps): JSX.Element => {
    return (
        <Flex gap={gap} height="17px" m="0" width="100%">
            <Box display="flex">
                <Image src="/Fire.svg" alignItems="end" />
                <Text fontSize="text5" lineHeight="17px" fontFamily="secondary">
                    {fire}
                </Text>
            </Box>
        </Flex>
    );
};

export default FireRanking;
