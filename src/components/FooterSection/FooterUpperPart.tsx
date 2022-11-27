import {
    chakra,
    Link,
    Stack,
    Heading,
    Text,
    VisuallyHidden,
    Flex,
    Hide,
    useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaEnvelope, FaGithub, FaYoutube } from "react-icons/fa";

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

export default function FooterUpperPart() {
    return (
    // <Box
    //     // as={Stack}
    //     // maxW={"100%"}
    //     // py={4}
    //     margin="auto"
    //     // direction={{ md: "row", sm: "column" }}
    //     // spacing={4}
    //     // align={{ md: "center", sm: "center" }}
    //     // justify={{ md: "center", sm: "center" }}
    // >
        <Flex
            flexWrap={{ md: "wrap", sm: "wrap" }}
            justifyContent={{ sm: "center", md: "space-between" }}
            alignItems="center"
            flexDirection={{ sm: "column", md: "row" }}
            gap={{ sm: "40px", md: "40px" }}
            mt={{ sm: "0px", md: "50px" }}
            mr={{ sm: "0px" }}
            w={"100%"}
            margin="auto"
            pl="80px"
            pr="80px"
            pb="20px"
            // spacing={4}
        >
            <Stack
                maxW={["326px", "326px", "238px"]}
                textAlign={{ sm: "center", md: "left" }}
                spacing={6}
            >
                <Heading fontSize={"text3"}>About Jungle Meet</Heading>
                <Text fontSize={"text5"} lineHeight={"lh32"}>
          Jungle Meet is a place for people to make Movie discussion, where people come together to
          share their opinion. We’re also a community pushing for positive change for people.
                </Text>
            </Stack>

            <Stack
                justify="center"
                align={"center"}
                maxW="342px"
                // mx={{ md: "50px", sm: "0px" }}
                spacing={6}
                margin="0"
            >
                <Stack direction={"row"} spacing={10}>
                    <SocialButton label={"Github"} href={"https://github.com/JungleMeet"}>
                        <FaGithub />
                    </SocialButton>
                    <SocialButton label={"YouTube"} href={"#"}>
                        <FaYoutube />
                    </SocialButton>
                    <SocialButton label={"Email"} href={"#"}>
                        <FaEnvelope />
                    </SocialButton>
                </Stack>
                <Stack
                    fontFamily={"secondary"}
                    fontWeight={"600"}
                    fontSize={"h5"}
                    direction={"row"}
                    spacing={5}
                >
                    <Link fontSize={"text3"} href={"/about"}>
            Contact Us
                    </Link>
                    <Link href={"/about"}>Jungle Meet</Link>
                </Stack>
            </Stack>

            <Hide below="md">
                <Stack align={"flex-start"} display="flex" fontFamily={"secondary"} gap="10px" minW="180px">
                    <ListHeader>Useful Links</ListHeader>
                    <Link fontSize={"text4"} href={"/allmovies"}>
            More Movies
                    </Link>
                    <Link fontSize={"text4"} href={"/nowplaying"}>
            Now Playing
                    </Link>
                    <Link fontSize={"text4"} href={"/discussions"}>
            Discussion
                    </Link>
                </Stack>
            </Hide>
        </Flex>
    // </Box>
    );
}
