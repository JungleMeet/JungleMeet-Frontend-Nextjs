import { Icon, Text, Flex, Button } from "@chakra-ui/react";
import { HiPencilAlt, HiOutlineSpeakerphone } from "react-icons/hi";
import MessageSVG from "@/assets/MessageSVG";
const UserProfileContent = () => {
    return (
        <Flex color="gray.100" w="100%" h="97px" backgroundColor="gray.100">
            <Button h="100%" _focus={{ border: "none" }} _active={{ backgroundColor: "none" }}>
                <Flex
                    pos="relative"
                    flexDirection="row"
                    pl={3}
                    pr={3}
                    color="black"
                    fontSize="text2"
                    lineHeight="lh32"
                >
                    <Icon as={HiPencilAlt} mt={0} w={"25px"} h={"25px"} />
                    <Text pl={2}> My Posts </Text>
                </Flex>
            </Button>

            <Button
                h="100%"
                border={0}
                outline="none"
                _focus={{ border: "none" }}
                _active={{ backgroundColor: "none" }}
            >
                <Flex
                    pos="relative"
                    flexDirection="row"
                    pl={3}
                    pr={3}
                    color="black"
                    fontSize="text2"
                    lineHeight="lh32"
                >
                    <Icon mt={3} as={MessageSVG} />
                    <Text pl={2}> Message </Text>
                </Flex>
            </Button>

            <Button h="100%" _focus={{ border: "none" }} _active={{ backgroundColor: "none" }}>
                <Flex
                    pos="relative"
                    flexDirection="row"
                    pl={3}
                    pr={3}
                    color="black"
                    fontSize="text2"
                    lineHeight="lh32"
                >
                    <Icon mt={0} as={HiOutlineSpeakerphone} w={"25px"} h={"25px"} />
                    <Text pl={2}> Notification </Text>
                </Flex>
            </Button>
        </Flex>
    );
};

export default UserProfileContent;
