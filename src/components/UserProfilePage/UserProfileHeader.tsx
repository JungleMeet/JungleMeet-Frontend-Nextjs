import { Flex, Box, Image, Text, Button, Icon, Avatar } from "@chakra-ui/react";
import { HiUpload, HiCamera, HiLightBulb } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import React from "react";
interface UserProfileHeaderInfoProps {
    userRole: string;
    userName: string;
    userBgImg: string;
    userAvatar: string;
}

const UserProfileHeader = ({
    userAvatar,
    userBgImg,
    userRole,
    userName,
}: UserProfileHeaderInfoProps) => {
    return (
        <Box pos="relative" m="auto" w="100%" height="245px" background="rgba(79, 79, 79, 0.8)">
            <Image
                opacity="0.5"
                src={userBgImg}
                boxSize="100%"
                objectFit="cover"
                fallbackSrc="/defaultUserImage.svg"
            />
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
                    zIndex={5}
                />

                <Flex flexDir="row">
                    <Avatar
                        key={userName}
                        name={userName}
                        src={userAvatar}
                        borderRadius="full"
                        width="120px"
                        height="120px"
                    ></Avatar>
                    <Flex flexDir="column" pl="41.5px" mt={6} width="200px">
                        <Flex flexDir="row" p="0" w="90px">
                            <Icon as={HiLightBulb} w={6} h={6} opacity="1" color="white" mr="9.5px" />
                            <Text
                                color="white"
                                ml={1}
                                fontSize="text4"
                                lineHeight="lh28"
                                fontFamily="body"
                                bottom="0"
                                fontWeight="500"
                            >
                                {userRole === "admin" ? "Admin" : "General User"}
                            </Text>
                        </Flex>
                        <Text
                            mt="10px"
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
                        mt={6}
                        width="140px"
                        height="50px"
                        color="white"
                        fontSize="text4"
                    >
                        <Icon as={IoPersonOutline} w={5} h={5} /> Edit Profile
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
