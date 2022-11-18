import { Flex, Box, Text, Button, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";

interface UserProfileSiderProps {
    siderName: string;
    count: number;
    icon: any;
    children: ReactNode;
    marginTop: string;
}
const UserProfileSider = (props: UserProfileSiderProps) => {
    return (
        <Box
            w="100%"
            backgroundColor="gray.100"
            border-radius="5px"
            marginTop={props.marginTop}
            pl="21px"
            pt="13px"
            pr="21px"
            pb="23px"
        >
            <Flex
                w="100%"
                h="auto"
                flexDirection="row"
                fontWeight={600}
                backgroundColor="gray.100"
                alignItems="center"
            >
                <Icon w="18px" h="18px" as={props.icon} />
                <Text ml={3} lineHeight="lh32" fontSize="text2" color="black">
                    {props.siderName}
                </Text>
                <Text pl={2} lineHeight="lh24" fontSize="text3" color="gray.500">
                    {props.count}
                </Text>
                <Button
                    ml="auto"
                    p="0"
                    lineHeight="lh28"
                    fontSize="text3"
                    color="rose.600"
                    fontWeight="500"
                >
          More {">"}
                </Button>
            </Flex>
            <Box
                h="1px"
                borderColor="gray.400"
                borderTop="2px"
                borderTopColor="gray.400"
                width="100%"
                margin="auto"
            />
            {props.children}
        </Box>
    );
};

export default UserProfileSider;
