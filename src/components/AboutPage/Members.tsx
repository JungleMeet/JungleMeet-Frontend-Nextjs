import { Box, Divider, Flex } from "@chakra-ui/react";
import TeamMember from "./TeamMember";
import { membersData, devopsData } from "./MembersData";

const Members = () => {
    return (
        <Flex width="889px" ml="28px" padding="55px 0 40px 0">
            <Box width="100%" alignItems="center">
                {membersData.map(({ memberName, avatar, title, email, linkedin }) => {
                    return (
                        <TeamMember
                            key={memberName}
                            memberName={memberName}
                            avatar={avatar}
                            title={title}
                            email={email}
                            linkedin={linkedin}
                        />
                    );
                })}
            </Box>
            <Divider
                ml="10px"
                mr="15px"
                border="2px solid"
                border-style="solid"
                color="gray.200"
                height="95%"
                orientation="vertical"
                opacity="0.9"
            />
            <Box width="100%" alignItems="center">
                {devopsData.map(({ memberName, avatar, title, email, linkedin }) => {
                    return (
                        <TeamMember
                            key={memberName}
                            avatar={avatar}
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