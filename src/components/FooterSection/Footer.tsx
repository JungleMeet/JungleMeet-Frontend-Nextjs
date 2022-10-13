import { Box, Flex, Text, useColorModeValue,Image } from "@chakra-ui/react";
import FooterUpper from "@/components/FooterSection/FooterUpper";
import { FooterContainer } from "@/components/FooterSection/FooterContainer";

export const FooterContent = `© ${new Date().getFullYear()} Jungle Meet Forum. All rights reserved`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterUpper />
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
                >
                    <Image src="/footerLogo.svg" width="201" height="35" />
                </Flex>
                <Text pt={6} fontFamily={"secondary"} fontSize={"text5"} textAlign={"center"}>
                    {FooterContent}
                </Text>
            </Box>
        </FooterContainer>
    );
    
};

export default Footer;
