import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Heading,
    Text,
    VisuallyHidden,
    Flex,
    Spacer,
    useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blackAlpha.400", "whiteAlpha.400"),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
            {children}
        </Text>
    );
};

export default function FooterUpper() {
    return (
        <Box>
            <Container
                as={Stack}
                maxW={"1244px"}
                py={4}
                direction={{ base: "column", md: "row" }}
                spacing={5}
                align={{ base: "center", md: "center" }}
                p="0"
                justifyContent="space-between"
            >
                <Flex mt={"50px"}  >
                    <Stack maxW="355px" spacing={6}>
                        <Heading fontSize={"text3"}>About Jungle Meet</Heading>
                        <Text fontSize={"text5"} lineHeight={"lh32"}>
              Jungle Meet is a place for people to make Movie disscusion, where people come together
              to share their opinion. We’re also a community pushing for positive change for people.
                        </Text>
                    </Stack>
                    <Spacer w="90px" />
                    <Stack justify={"center"} align={"center"} maxW="342px" spacing={6}>
                        <Stack direction={"row"} spacing={10}>
                            <SocialButton label={"Twitter"} href={"#"}>
                                <FaTwitter />
                            </SocialButton>
                            <SocialButton label={"YouTube"} href={"#"}>
                                <FaYoutube />
                            </SocialButton>
                            <SocialButton label={"Instagram"} href={"#"}>
                                <FaInstagram />
                            </SocialButton>
                        </Stack>
                        <Stack
                            fontFamily={"secondary"}
                            fontWeight={"600"}
                            fontSize={"h5"}
                            direction={"row"}
                            spacing={5}
                        >
                            <Link href={"#"}>Conditions of Use</Link>
                            <Link href={"#"}>Privacy & Policy</Link>
                        </Stack>
                    </Stack>
                    <Spacer w="120px" />
                    <Stack fontFamily={"secondary"} maxW="345px" align={"start"}>
                        <ListHeader>Useful Links</ListHeader>
                        <Link fontSize={"text4"} href={"#"}>
              Feature Movie
                        </Link>
                        <Link fontSize={"text4"} href={"#"}>
              New Arrival
                        </Link>
                        <Link fontSize={"text4"} href={"#"}>
              Disscusion
                        </Link>
                        <Link fontSize={"text4"} href={"#"}>
              Contact Us
                        </Link>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    );
}
