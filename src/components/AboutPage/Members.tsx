import { Box, Center, Divider, Flex } from "@chakra-ui/react";
import TeamMember from "./TeamMember";

function Members() {
    const membersData = [
        {
            memberName: "Rachel Fang",
            title: "Developer & Team Leader",
            email: "yanhanfang828@gmail.com",
            linkedin: "https://www.linkedn.com/in/rachel-fang",
        },
        {
            memberName: "Justin Lin",
            title: "Developer & UI/UX Designer",
            email: "mingyingl233@gmail.com",
            linkedin: "https://www.linkedn.com/in/mydev",
        },
        {
            memberName: "Eric Li",
            title: "Developer",
            email: "zheceyong666@gmail.com",
            linkedin: "https://www.linkedn.com/in/eric-li-5692941a3",
        },
        {
            memberName: "Stephen Feng",
            title: "Developer",
            email: "fhxniepan@gmail.com",
            linkedin: "https://www.linkedn.com/in/haoxuan-feng-stephen",
        },
        {
            memberName: "Ting Huang",
            title: "Developer",
            email: "tinghuang.dev@gmail.com",
            linkedin: "https://www.linkedn.com/in/tinghuang-dev",
        },
        {
            memberName: "Tom Zhong",
            title: "Developer",
            email: "xxxxxxx@gmail.com",
            linkedin: "xxxxxxxxxxxxxxx",
        },
        {
            memberName: "Eden Cheng",
            title: "Developer",
            email: "cljeden@gmail.com",
            linkedin: "https://www.linkedn.com/in/eden-cheng",
        },
        {
            memberName: "Haoran Jin",
            title: "Developer",
            email: "asdjhr666@gmail.com",
            linkedin: "https://www.linkedn.com/in/haoran-jin",
        },
        {
            memberName: "Sebrina Xian",
            title: "Developer",
            email: "swxt1980@gmail.com",
            linkedin: "https://www.linkedn.com/in/sebrinax2021",
        },
    ];

    const devopsData = [
        {
            memberName: "XXX",
            title: "Devops & Leader",
            email: "xxxxxx@gmail.com",
            linkedin: "https://www.linkedn.com/in/xxxxxxx",
        },
        {
            memberName: "XXX",
            title: "Devops",
            email: "xxxxxx@gmail.com",
            linkedin: "https://www.linkedn.com/in/xxxxxxx",
        },
        {
            memberName: "XXX",
            title: "Devops",
            email: "xxxxxx@gmail.com",
            linkedin: "https://www.linkedn.com/in/xxxxxxx",
        },
        {
            memberName: "XXX",
            title: "Devops",
            email: "xxxxxx@gmail.com",
            linkedin: "https://www.linkedn.com/in/xxxxxxx",
        },
    ];

    return (
        <Flex pb="50px">
            <Box>
                <TeamMember
                    memberName={membersData[0].memberName}
                    title={membersData[0].title}
                    Email={membersData[0].email}
                    LinkedIn={membersData[0].linkedin}
                />
                <TeamMember
                    memberName={membersData[1].memberName}
                    title={membersData[1].title}
                    Email={membersData[1].email}
                    LinkedIn={membersData[1].linkedin}
                />
                <TeamMember
                    memberName={membersData[2].memberName}
                    title={membersData[2].title}
                    Email={membersData[2].email}
                    LinkedIn={membersData[2].linkedin}
                />
                <TeamMember
                    memberName={membersData[3].memberName}
                    title={membersData[3].title}
                    Email={membersData[3].email}
                    LinkedIn={membersData[3].linkedin}
                />
                <TeamMember
                    memberName={membersData[4].memberName}
                    title={membersData[4].title}
                    Email={membersData[4].email}
                    LinkedIn={membersData[4].linkedin}
                />
                <TeamMember
                    memberName={membersData[5].memberName}
                    title={membersData[5].title}
                    Email={membersData[5].email}
                    LinkedIn={membersData[5].linkedin}
                />
                <TeamMember
                    memberName={membersData[6].memberName}
                    title={membersData[6].title}
                    Email={membersData[6].email}
                    LinkedIn={membersData[6].linkedin}
                />
                <TeamMember
                    memberName={membersData[7].memberName}
                    title={membersData[7].title}
                    Email={membersData[7].email}
                    LinkedIn={membersData[7].linkedin}
                />
                <TeamMember
                    memberName={membersData[8].memberName}
                    title={membersData[8].title}
                    Email={membersData[8].email}
                    LinkedIn={membersData[8].linkedin}
                />
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
                <TeamMember
                    memberName={devopsData[0].memberName}
                    title={devopsData[0].title}
                    Email={devopsData[0].email}
                    LinkedIn={devopsData[0].linkedin}
                />
                <TeamMember
                    memberName={devopsData[1].memberName}
                    title={devopsData[1].title}
                    Email={devopsData[1].email}
                    LinkedIn={devopsData[1].linkedin}
                />
                <TeamMember
                    memberName={devopsData[2].memberName}
                    title={devopsData[2].title}
                    Email={devopsData[2].email}
                    LinkedIn={devopsData[2].linkedin}
                />
                <TeamMember
                    memberName={devopsData[3].memberName}
                    title={devopsData[3].title}
                    Email={devopsData[3].email}
                    LinkedIn={devopsData[3].linkedin}
                />
            </Box>
        </Flex>
    );
}

export default Members;
