import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";

interface ITeamMemberProps {
    memberName: string;
    title: string;
    email: string;
    linkedin: string;
}

function TeamMember({ memberName, title, email, linkedin }: ITeamMemberProps) {
    return (
        <Box mt="55px" ml="28px" mr="2px" alignItems="center" mb="40px">
            <Flex gap="5px">
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
            </Flex>
            <Text
                mt="25"
                color="#000"
                fontFamily="Inter"
                fontStyle="normal"
                fontWeight="400"
                fontSize="16px"
                lineHeight="20px"
            >
        Email: {email}
                <br />
        LinkedIn: {linkedin}
                {/* How to make it a link? */}
            </Text>
        </Box>
    );
}

export default TeamMember;
