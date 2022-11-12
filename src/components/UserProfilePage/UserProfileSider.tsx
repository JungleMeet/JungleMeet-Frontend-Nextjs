import { Flex, Box, Text, Button, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";

interface UserProfileSiderProps {
    siderName: string;
    count: number;
    icon: any;
    children: ReactNode;
}
const UserProfileSider = (props: UserProfileSiderProps) => {
    return (
        <Box h="202px" w="403px" backgroundColor="gray.100" border-radius="5px" overflow="hidden">
            <Flex
                mr={0}
                h="58px"
                w="100%"
                flexDirection="row"
                font-weight={600}
                backgroundColor="gray.100"
                alignItems="center"
            >
                <Icon ml="10%" w={5} h={5} as={props.icon} />
                <Text ml={3} lineHeight="lh32" fontSize="text2" color="black">
                    {props.siderName}
                </Text>
                <Text pl={2} lineHeight="lh32" fontSize="text3" color="gray.500">
                    {props.count}
                </Text>
                <Button right="10%" ml="auto">
                    {" "}
                    <Text lineHeight="lh32" fontSize="text3" color="rose.600">
            More {">"}
                    </Text>{" "}
                </Button>
            </Flex>
            <Box w={8} borderColor="gray.400" borderWidth={1} width="80%" margin="auto" />
            {props.children}
        </Box>
    );
};

export default UserProfileSider;
