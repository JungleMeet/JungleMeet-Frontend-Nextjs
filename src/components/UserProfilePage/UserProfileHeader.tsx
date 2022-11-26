import { Flex, Box, Image, Text, Button, Icon, Avatar, useDisclosure } from "@chakra-ui/react";
import { HiPlus, HiMinus, HiUpload, HiCamera, HiLightBulb } from "react-icons/hi";
import { toggleFollowing } from "@/utils/axiosUserApi";
import { ImageUploadModal } from "@/components/UserProfilePage/ImageUploadModal";
import Router from "next/router";
import { useState } from "react";

interface UserProfileHeaderInfoProps {
    userRole: string;
    userName: string;
    userBgImg: string;
    userAvatar: string;
    userId: string;
    followed: boolean;
    queryUserId: string;
    token: string;
    setfFllowTrigger: Function;
    followTrigger: boolean;
}
import { changeBgImg, changeAvatar } from "@/utils/axiosUserApi";

const UserProfileHeader = ({
    userAvatar,
    userBgImg,
    userRole,
    userName,
    userId,
    followed,
    queryUserId,
    token,
    setfFllowTrigger,
    followTrigger,
}: UserProfileHeaderInfoProps) => {
    const [bgImg, setBgImg] = useState<string>(userBgImg);
    const [avatar, setAvatar] = useState<string>(userAvatar);

    const {
        isOpen: isOpenAvatarUploadModal,
        onOpen: onOpenAvatarUploadModal,
        onClose: onCloseAvatarUploadModal,
    } = useDisclosure();
    const {
        isOpen: isOpenBgImgUploadModal,
        onOpen: onOpenBgImgUploadModal,
        onClose: onCloseBgImgUploadModal,
    } = useDisclosure();
    return (
        <Box pos="relative" m="auto" w="100%" height="245px" background="rgba(79, 79, 79, 0.8)">
            <Image
                opacity="0.5"
                src={bgImg}
                boxSize="100%"
                objectFit="cover"
                fallbackSrc="/defaultUserImage.svg"
            />
            <Box pos="absolute" bottom="15px" left="15px">
                {userId === queryUserId ? (
                    <Button
                        backgroundColor="transparent"
                        pos="absolute"
                        bottom="5px"
                        left="90px"
                        padding={0}
                        _hover={{}}
                        _focus={{}}
                        _active={{}}
                        onClick={onOpenAvatarUploadModal}
                    >
                        <Icon as={HiCamera} w={9} h={9} opacity="1" color="lightBlue.600" p="0" zIndex={5} />
                    </Button>
                ) : (
                    <></>
                )}

                <ImageUploadModal
                    setImg={setAvatar}
                    img={avatar}
                    displayText={"Upload your avatar"}
                    isOpen={isOpenAvatarUploadModal}
                    onClose={onCloseAvatarUploadModal}
                    modalName={"Select your avatar"}
                    croppingAspectRatio={1}
                    onClick={() => {
                        changeAvatar(token, avatar);
                        Router.push("/userprofile/" + userId);
                    }}
                />

                <Flex flexDir="row">
                    <Avatar
                        key={userName.split(" ")[0]}
                        name={userName.split(" ")[0]}
                        src={avatar}
                        borderRadius="full"
                        width="120px"
                        height="120px"
                    ></Avatar>
                    <Flex flexDir="column" pl="41.5px" mt={6} width="200px">
                        <Flex flexDir="row" p="0" w="150px">
                            <Icon as={HiLightBulb} w={6} h={6} opacity="1" color="white" mr="9.5px" />
                            <Text
                                color="white"
                                ml={1}
                                fontSize="text4"
                                lineHeight="lh28"
                                fontFamily="body"
                                bottom="0"
                                fontWeight="500"
                            >
                                {userRole === "admin" ? "Admin_User" : "General_User"}
                            </Text>
                        </Flex>
                        <Text
                            mt="10px"
                            color="white"
                            fontSize="text1"
                            lineHeight="lh28"
                            h="50%"
                            top="0"
                            text-align="center"
                            fontFamily="body"
                            fontWeight="700"
                        >
                            {userName.split(" ")[0]}
                        </Text>
                    </Flex>
                    {userId === queryUserId ? (
                        <></>
                    ) : (
                        <>
                            <Button
                                backgroundColor="lightBlue.600"
                                mt={6}
                                width="140px"
                                height="50px"
                                color="white"
                                fontSize="text4"
                                onClick={async () => {
                                    await toggleFollowing(token, queryUserId);
                                    setfFllowTrigger(!followTrigger);
                                }}
                            >
                                {followed ? <Icon as={HiMinus} w={5} h={5} /> : <Icon as={HiPlus} w={5} h={5} />}
                                <Text flexGrow={1}>{followed ? "Unfollow" : "Follow"}</Text>
                            </Button>
                        </>
                    )}
                </Flex>
            </Box>
            {userId === queryUserId ? (
                <Button
                    pos="absolute"
                    height="38px"
                    bottom="15px"
                    right="15px"
                    background="transparent"
                    background-color="transparent"
                    _hover={{}}
                    _focus={{}}
                    onClick={onOpenBgImgUploadModal}
                >
                    <Icon as={HiUpload} w={6} h={6} opacity="1" color="white" />

                    <Text color="white" opacity="1" pl={2}>
                        {"Edit your background"}
                    </Text>
                    <ImageUploadModal
                        setImg={setBgImg}
                        img={bgImg}
                        displayText={"Upload your background image"}
                        isOpen={isOpenBgImgUploadModal}
                        onClose={onCloseBgImgUploadModal}
                        modalName={"Select your background image"}
                        croppingAspectRatio={5.07}
                        onClick={() => {
                            changeBgImg(token, bgImg);
                            Router.push("/userprofile/" + userId);
                        }}
                    />
                </Button>
            ) : (
                <></>
            )}
        </Box>
    );
};

export default UserProfileHeader;
