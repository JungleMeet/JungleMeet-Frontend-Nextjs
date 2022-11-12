import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const aboutPage = () => {
    return (
        <Flex gap="20px">
            <Flex flexDirection="column" width="945px" height="1544px" padding="none" bgColor="gray.100">
                <Box ml="28px" mt="34px" gap="30.13px">
                    <Image fill="black" src="/JungleMeetLogoBlackText.svg" alt="logo of jungle meet" />
                </Box>
                <Box ml="28px" mr="71px" mt="34px" height="86px">
                    <Text
                        color="#000"
                        fontFamily="Inter"
                        fontStyle="normal"
                        fontWeight="400"
                        fontSize="18px"
                        lineHeight="28px"
                    >
            Jungle Meet is a place for people to watch movie discussion, where people come together
            to share their opinion. We&apos;re also a community pushing for positive change for
            people.
                    </Text>
                </Box>
                <Box ml="28px">
                    <Text
                        color="#881337"
                        fontFamily="Inter"
                        fontStyle="normal"
                        fontWeight="700"
                        fontSize="24px"
                        lineHeight="32px"
                    >
            Team Member
                    </Text>
                    <Text
                        mt="20px"
                        color="#000"
                        fontFamily="Inter"
                        fontStyle="normal"
                        fontWeight="400"
                        fontSize="18px"
                        lineHeight="28px"
                    >
            Jungle Meet is designed and developed by group of 9 developers in two months and
            deployed by 4 Devops. Our vision is: {`"Have fun while sharing movies!"`}
                    </Text>
                </Box>
            </Flex>
            <Flex>
                <Box width="279px" height="271px" bgColor="gray.100">
                    <Text
                        mt="26px"
                        ml="18px"
                        color="#000"
                        fontFamily="Inter"
                        fontStyle="normal"
                        fontWeight="700"
                        fontSize="30px"
                        lineHeight="36px"
                        alignItems="center"
                        mb="35px"
                    >
            Credit
                    </Text>
                    <Image ml="18px" src="/TMDBLargeLogo.svg" alt="logo of TMDB" />
                    <Text
                        mt="30px"
                        ml="22px"
                        mr="18px"
                        mb="14px"
                        color="#000"
                        fontFamily="Inter"
                        fontStyle="normal"
                        fontWeight="400"
                        fontSize="14px"
                        lineHeight="32px"
                    >
            This product uses the TMDB API but is not endorsed or certified by TMDB.
                    </Text>
                </Box>
            </Flex>
        </Flex>
    );
};

export default aboutPage;
