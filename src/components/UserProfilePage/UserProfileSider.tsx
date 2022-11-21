import { Flex, Box, Text, Button, Icon, useDisclosure } from "@chakra-ui/react";
import { ReactNode } from "react";
import { UserProfileModal } from "@/components/UserProfilePage/UserProfileFollowModal";

interface UserProfileSiderProps {
    siderName: string;
    count: number;
    icon: any;
    children: ReactNode;
    marginTop: string;
    modalItems: any;
    token: string;
    followTrigger: boolean;
    setfFllowTrigger: Function;
    followed: boolean;
    selfProfile: any;
}

const UserProfileSider = (props: UserProfileSiderProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
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
                    _focus={{}}
                    _hover={{}}
                    _active={{}}
                    onClick={onOpen}
                    ml="auto"
                    p="0"
                    lineHeight="lh28"
                    fontSize="text3"
                    color="rose.600"
                    fontWeight="500"
                >
                    {" "}
                    <Text lineHeight="lh32" fontSize="text3" color="rose.600">
            More {">"}
                    </Text>{" "}
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
            <UserProfileModal
                modalName={props.siderName}
                isOpen={isOpen}
                onClose={onClose}
                modalItems={props.modalItems}
                token={props.token}
                followTrigger={props.followTrigger}
                setfFllowTrigger={props.setfFllowTrigger}
                followed={props.followed}
                selfProfile={props.selfProfile}
            />
        </Box>
    );
};

export default UserProfileSider;
