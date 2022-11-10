import React from "react";
import { Box, Flex, Text, Image, Center, Spacer} from "@chakra-ui/react";

const aboutPage = () => {
    return (
        < Flex flexDirection="column">
            <Flex>
                <Box>
                    <Image src="/JungleMeetLogoWhiteText.svg" alt="logo of jungle meet" />
                </Box>
                <Box>
                    <Text fontSize="32px" fontWeight="700" lineHeight="24px" fontFamily="DM Sans">Jungle Meet</Text>
                </Box>
            </Flex>
            <Spacer/>
            <Box>
                <Text>Jungle Meet is a place for people to watch movie discussion, where people come together to share their opinion. We're also a community pushing for positive change for people. </Text>
            </Box>
        </Flex>
    );
};

export default aboutPage;