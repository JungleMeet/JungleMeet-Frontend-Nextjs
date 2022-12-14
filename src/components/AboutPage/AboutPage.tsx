import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Members from "./Members";

const aboutPage = () => {
    return (
        <Flex gap="20px">
            <Flex
                flexDirection="column"
                width="945px"
                height="auto"
                padding="none"
                bgColor="gray.100"
                zIndex="2"
            >
                <Box ml="28px" mt="34px">
                    <Image fill="black" src="/JungleMeetLogoBlackText.svg" alt="logo of jungle meet" />
                </Box>
                <Box ml="28px" mr="71px" mt="30px">
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
            people.{" "}
                    </Text>
                </Box>
                <Box ml="28px" mr="10px" mt="40px">
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
            deployed by 4 Devops. <br /> Our vision is: &quot;Have fun while sharing movies!&quot;
                    </Text>
                </Box>
                <Members />
            </Flex>
            <Flex flexDirection="column" position="relative">
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
                <Box top="740px" left="-182px" position="absolute" width="679px">
                    <Image src="/movieaction.png" alt="movie action image" />
                </Box>
            </Flex>
        </Flex>
    );
};

export default aboutPage;
