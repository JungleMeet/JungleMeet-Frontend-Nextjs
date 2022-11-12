import { Flex, Box, Image, Text, Button, Icon } from "@chakra-ui/react";
import { HiUpload, HiCamera, HiLightBulb } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import React from "react";
interface UserProfileHeaderInfoProps {
    userRole: string;
    userName: string;
}

const UserProfileHeader = ({ userRole, userName }: UserProfileHeaderInfoProps) => {
    return (
        <Box pos="relative" m="auto" w="100%" height="245px">
            <Image src="/a.jpg" boxSize="100%" objectFit="cover" opacity="0.8" />
            <Box pos="absolute" bottom="15px" left="15px">
                <Icon
                    pos="absolute"
                    bottom="5px"
                    left="90px"
                    as={HiCamera}
                    w={9}
                    h={9}
                    opacity="1"
                    color="lightBlue.600"
                    p="0"
                />
                <Flex flexDir="row">
                    <Image boxSize="120px" borderRadius="full" src="/a.jpg" alt="" />
                    <Flex flexDir="column" pl={10} mt={6}>
                        <Flex flexDir="row" p="0">
                            <Icon as={HiLightBulb} w={6} h={6} opacity="1" color="white" p="0" />
                            <Text
                                color="white"
                                ml={1}
                                fontSize="text4"
                                lineHeight="lh28"
                                fontFamily="body"
                                bottom="0"
                                fontWeight="500"
                            >
                                {userRole}
                            </Text>
                        </Flex>
                        <Text
                            color="white"
                            fontSize="text1"
                            lineHeight="lh28"
                            h="50%"
                            top="0"
                            text-align="center"
                            fontFamily="body"
                            fontWeight="700"
                        >
                            {userName}
                        </Text>
                    </Flex>
                    <Button
                        backgroundColor="lightBlue.600"
                        ml={2}
                        mt={6}
                        width="140px"
                        height="50px"
                        color="white"
                        fontSize="text4"
                    >
                        <Icon as={IoPerson} w={5} h={5} p="0" /> Edit Profile
                    </Button>
                </Flex>
            </Box>

            <Button
                pos="absolute"
                height="38px"
                bottom="15px"
                right="15px"
                background="transparent"
                background-color="transparent"
                _hover={{}}
                _focus={{}}
            >
                <Icon as={HiUpload} w={6} h={6} opacity="1" color="white" />
                <Text color="white" opacity="1" pl={2}>
                    {" "}
          Edit your background
                </Text>
            </Button>
        </Box>
    );
};

export default UserProfileHeader;
