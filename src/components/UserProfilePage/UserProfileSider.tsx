import { Flex, Box, Text, Button, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";

interface UserProfileSiderProps {
    siderName: string;
    count: number;
    icon: any;
    children: ReactNode;
    width: string;
    marginTop: string;
}
const UserProfileSider = (props: UserProfileSiderProps) => {
    return (
        <Box
            w={props.width}
            backgroundColor="gray.100"
            border-radius="5px"
            overflow="hidden"
            marginTop={props.marginTop}
        >
            <Flex
                mr={0}
                h="58px"
                w="100%"
                flexDirection="row"
                fontWeight={600}
                backgroundColor="gray.100"
                alignItems="center"
            >
                <Icon ml="5%" w={5} h={5} as={props.icon} />
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
            <Box
                w={8}
                h="4px"
                borderColor="gray.400"
                borderTop="2px"
                borderTopColor="gray.400"
                width="90%"
                margin="auto"
            />
            {props.children}
        </Box>
    );
};

export default UserProfileSider;
