import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Text,
    Link,
    Avatar,
    Flex,
    Button,
    Icon,
} from "@chakra-ui/react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { toggleFollowing } from "@/utils/axiosUserApi";
import uuid from "react-uuid";

interface UserProfileModalProps {
    modalName: string;
    isOpen: boolean;
    onClose: () => void;
    modalItems: any;
    token: string;
    followTrigger: boolean;
    setfFllowTrigger: Function;
    followed: boolean;
    selfProfile: any;
}
export const UserProfileModal = ({
    modalName,
    isOpen,
    onClose,
    modalItems,
    token,
    followTrigger,
    setfFllowTrigger,
    followed,
    selfProfile,
}: UserProfileModalProps) => {
    return (
        <>
            <Modal size={"md"} isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
                <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
                <ModalContent mt="30px" mb="10px" maxW="583px" minH="389px">
                    <ModalHeader
                        w={"100%"}
                        textAlign="center"
                        gap="11.65px"
                        padding="0"
                        marginTop="30px"
                        mb="13px"
                    >
                        <Text fontWeight={"700"} lineHeight="32px" fontSize={"24px"} color="black">
                            {modalName}
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex alignItems={"center"} flexDir="column">
                            {modalName === "Followed Post"
                                ? modalItems.map((modalItem: any) => {
                                    return (
                                        <>
                                            <Text>
                                                <Link href={"/discussions/" + modalItem.postId}>{modalItem.title}</Link>
                                            </Text>
                                        </>
                                    );
                                })
                                : modalItems.map((modalItem: any) => {
                                    return (
                                        <Flex
                                            key={uuid()}
                                            w="80%"
                                            h="68px"
                                            flexDir={"row"}
                                            borderTop={"1px"}
                                            borderColor="gray.200"
                                            position="relative"
                                        >
                                            <Avatar
                                                key={uuid()}
                                                name={modalItem.name}
                                                src={modalItem?.avatar}
                                                borderRadius="full"
                                                mt="18px"
                                                mr="18px"
                                                w="38px"
                                                h="38px"
                                            ></Avatar>
                                            <Flex flexDirection={"column"} marginTop="auto" marginBottom="auto">
                                                <Link href={"/userprofile/" + modalItem.userId}>
                                                    <Text
                                                        fontSize={"16px"}
                                                        lineHeight={"24px"}
                                                        fontWeight={400}
                                                        textAlign={"center"}
                                                        marginTop="auto"
                                                        color="black"
                                                    >
                                                        {modalItem.name}
                                                    </Text>
                                                </Link>
                                                <Text
                                                    fontSize={"12px"}
                                                    lineHeight={"12px"}
                                                    fontWeight={400}
                                                    marginBottom="auto"
                                                    color="gray.400"
                                                >
                                                    {modalItem.name}
                                                </Text>
                                            </Flex>
                                            {selfProfile.userName ? (
                                                <Button
                                                    borderRadius={"5px"}
                                                    position="absolute"
                                                    backgroundColor="lightBlue.600"
                                                    width="80px"
                                                    height="25px"
                                                    color="white"
                                                    fontSize="text4"
                                                    right="11px"
                                                    top={"50%"}
                                                    marginTop={"-12.5px"}
                                                    onClick={async () => {
                                                        await toggleFollowing(token, modalItem.userId);
                                                        setfFllowTrigger(!followTrigger);
                                                    }}
                                                >
                                                    {selfProfile.followingsList
                                                        .map((following: any) => following.userId)
                                                        .includes(modalItem.userId) ? (
                                                            <Icon as={HiMinus} w={3} h={3} />
                                                        ) : (
                                                            <Icon as={HiPlus} w={3} h={3} />
                                                        )}
                                                    <Text
                                                        ml={"7.5px"}
                                                        fontSize={"12px"}
                                                        fontWeight={400}
                                                        lineHeight={"20px"}
                                                        flexGrow={1}
                                                    >
                                                        {selfProfile.followingsList
                                                            .map((following: any) => following.userId)
                                                            .includes(modalItem.userId)
                                                            ? "Unfollow"
                                                            : "Follow"}
                                                    </Text>
                                                </Button>
                                            ) : (
                                                <></>
                                            )}
                                        </Flex>
                                    );
                                })}
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
