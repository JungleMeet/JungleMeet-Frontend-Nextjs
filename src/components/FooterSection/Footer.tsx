import { Box, Flex, Text, useColorModeValue, Image } from "@chakra-ui/react";
import FooterUpperPart from "@/components/FooterSection/FooterUpperPart";
import { FooterContainer } from "@/components/FooterSection/FooterContainer";

export const FooterContent = `© ${new Date().getFullYear()} Jungle Meet Forum. All rights reserved`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterUpperPart />
            <Box as="footer" opacity={0.9} py={1}>
                <Flex
                    align={"center"}
                    _before={{
                        content: '""',
                        borderBottom: "1px solid",
                        borderColor: useColorModeValue("gray.200", "gray.700"),
                        flexGrow: 1,
                        mr: 8,
                    }}
                    _after={{
                        content: '""',
                        borderBottom: "1px solid",
                        borderColor: useColorModeValue("gray.200", "gray.700"),
                        flexGrow: 1,
                        ml: 8,
                    }}
                    maxW="1440px"
                    margin="auto"
                >
                    <Image src="/footerLogo.svg" width="200" height="35" />
                </Flex>
                <Text pl="10px" pt={6} fontFamily={"secondary"} fontSize={"text5"} textAlign={"center"}>
                    {FooterContent}
                </Text>
            </Box>
        </FooterContainer>
    );
};

export default Footer;
