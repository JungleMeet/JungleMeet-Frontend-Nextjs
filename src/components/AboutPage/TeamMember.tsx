import { Box, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";

interface ITeamMemberProps {
    memberName: string;
    avatar: string;
    title: string;
    email: string;
    linkedin: string;
}

function TeamMember({ memberName, avatar, title, email, linkedin }: ITeamMemberProps) {
    return (
        <Flex mb="40px" flexDirection="column" alignContent="center">
            <Flex>
                <Image
                    boxSize="60px"
                    borderRadius="full"
                    src="Avatar.jpg"
                    alt="avatar image"
                    marginRight="10px"
                />
                <Box>
                    <Text
                        color="#000"
                        fontFamily="Inter"
                        fontStyle="normal"
                        fontWeight="700"
                        fontSize="20px"
                        lineHeight="28px"
                    >
                        {memberName} -
                    </Text>
                    <Text
                        color="rose.900"
                        fontFamily="Inter"
                        fontStyle="normal"
                        fontWeight="700"
                        fontSize="20px"
                        lineHeight="28px"
                    >
                        {title}
                    </Text>
                </Box>
            </Flex>
            <Box>
                <Text
                    mt="25px"
                    color="#000"
                    fontFamily="Inter"
                    fontStyle="normal"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="20px"
                >
          Email: {email}
                </Text>
                <Text
                    color="#000"
                    fontFamily="Inter"
                    fontStyle="normal"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="20px"
                >
          LinkedIn: {linkedin}
                </Text>
            </Box>
        </Flex>
    );
}

export default TeamMember;
