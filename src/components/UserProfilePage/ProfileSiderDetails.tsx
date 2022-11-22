import { Avatar, Flex, Text, Icon, Link } from "@chakra-ui/react";
import { HiLightBulb } from "react-icons/hi";

const ProfileSiderDetails = (follower: {
    name: string;
    role: string;
    avatar?: string;
    userId: string;
}) => {
    return (
        <Flex w="100%" h="70px" flexDir={"row"}>
            <Avatar
                name={follower.name.split(" ")[0]}
                src={follower?.avatar}
                borderRadius="full"
                mt="18px"
                mr="18px"
                w="38px"
                h="38px"
            ></Avatar>
            <Flex flexDir={"column"} ml="18px" margin="auto" gap="5px">
                <Text
                    color="blue.500"
                    fontWeight={500}
                    fontStyle="normal"
                    maxWidth="90px"
                    fontSize="text5"
                    overflow="hidden"
                    lineHeight="lh20"
                >
                    <Link href={"/userprofile/" + follower.userId}>{follower.name}</Link>
                </Text>
                <Flex flexDir={"row"} mt="1px" h="23px">
                    <Icon as={HiLightBulb} h={4} color="gray.500" mr="7px" />
                    <Text mt="4px" color="gray.500" fontSize={"text6"} fontWeight="400" lineHeight="12px">
                        {follower.role === "admin" ? "Admin_User" : "General_User"}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ProfileSiderDetails;
