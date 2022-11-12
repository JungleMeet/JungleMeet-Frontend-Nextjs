import { Icon, Text, Flex, Button } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { AiOutlineMessage, AiOutlineNotification } from "react-icons/ai";

const UserProfileContent = () => {
    return (
        <Flex color="gray.100" w="816px" h="97px" backgroundColor="gray.100">
            <Button h="100%">
                <Flex
                    pos="relative"
                    flexDirection="row"
                    pl={5}
                    color="black"
                    fontSize="text2"
                    lineHeight="lh32"
                >
                    <EditIcon mt={2} w={4} h={4} />
                    <Text pl={2}> My Posts </Text>
                </Flex>
            </Button>

            <Button h="100%">
                <Flex
                    pos="relative"
                    flexDirection="row"
                    pl={5}
                    color="black"
                    fontSize="text2"
                    lineHeight="lh32"
                >
                    <Icon mt={2} as={AiOutlineMessage} w={4} h={4} />
                    <Text pl={2}> Message </Text>
                </Flex>
            </Button>

            <Button h="100%">
                <Flex
                    pos="relative"
                    flexDirection="row"
                    pl={5}
                    color="black"
                    fontSize="text2"
                    lineHeight="lh32"
                >
                    <Icon mt={2} as={AiOutlineNotification} w={5} h={5} />
                    <Text pl={2}> Notification </Text>
                </Flex>
            </Button>
        </Flex>
    );
};

export default UserProfileContent;
