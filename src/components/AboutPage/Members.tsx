import { Box, Center, Divider, Flex } from "@chakra-ui/react";
import TeamMember from "./TeamMember";
import { membersData, devopsData } from "./MembersData";

const Members = () => {
    return (
        <Flex pb="50px">
            <Box>
                {membersData.map(({ memberName, title, email, linkedin }) => {
                    return (
                        <TeamMember
                            key={memberName}
                            memberName={memberName}
                            title={title}
                            email={email}
                            linkedin={linkedin}
                        />
                    );
                })}
            </Box>
            <Center>
                <Divider
                    mt="55px"
                    left="569px"
                    border="2px solid"
                    color="gray.200"
                    height="1260px"
                    orientation="vertical"
                />
            </Center>
            <Box>
                {devopsData.map(({ memberName, title, email, linkedin }) => {
                    return (
                        <TeamMember
                            key={memberName}
                            memberName={memberName}
                            title={title}
                            email={email}
                            linkedin={linkedin}
                        />
                    );
                })}
            </Box>
        </Flex>
    );
};

export default Members;
