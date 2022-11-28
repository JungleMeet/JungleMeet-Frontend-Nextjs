import { Flex, Box, Image, Text, Button, Icon, Avatar } from "@chakra-ui/react";
import { HiPlus, HiMinus, HiUpload, HiCamera, HiLightBulb } from "react-icons/hi";
import { changeAvatar, changeBgImg, toggleFollowing } from "@/utils/axiosUserApi";
import { useEffect } from "react";
import {
    CloudinaryWidget,
    CloudinaryWidgetResult,
} from "@/components/NewPostEditor/cloudinaryType";

interface UserProfileHeaderInfoProps {
    userProfile: any;
    userId: string;
    followed: boolean;
    queryUserId: string;
    token: string;
    setfFllowTrigger: Function;
    followTrigger: boolean;
    setEditProfileTrigger: Function;
    editProfileTrigger: boolean;
}
const showWidget = (
    callback: Function,
    token: string,
    setEditProfileTrigger: Function,
    editProfileTrigger: boolean,
    croppingAspectRatio: number
) => {
    const widget: CloudinaryWidget = (window as any).cloudinary.createUploadWidget(
        {
            cloudName: "junglemeet",
            uploadPreset: "avatars",
            sources: [
                "local",
                "url",
                "camera",
                "image_search",
                "google_drive",
                "facebook",
                "dropbox",
                "instagram",
                "getty",
            ],
            googleApiKey: "<image_search_google_api_key>",
            showAdvancedOptions: false,
            cropping: true,
            croppingAspectRatio: String(croppingAspectRatio),
            croppingDefaultSelectionRatio: String(1 / croppingAspectRatio),
            croppingShowDimensions: true,
            croppingCoordinatesMode: "custom",
            multiple: false,
            defaultSource: "local",
            styles: {
                palette: {
                    window: "#111827",
                    sourceBg: "#111827",
                    windowBorder: "#FFFFFF",
                    tabIcon: "#BE123C",
                    inactiveTabIcon: "#FFFFFF",
                    menuIcons: "#BE123C",
                    link: "#BE123C",
                    action: "#0EA5E9",
                    inProgress: "#00BFFF",
                    complete: "#33ff00",
                    error: "#EA2727",
                    textDark: "#000000",
                    textLight: "#FFFFFF",
                },
                fonts: {
                    default: null,
                    "'Poppins', sans-serif": {
                        url: "https://fonts.googleapis.com/css?family=Poppins",
                        active: true,
                    },
                },
            },
        },
        (error: unknown | undefined, result: CloudinaryWidgetResult) => {
            if (!error && result && result.event === "success") {
                callback(token, result.info.url);
                setTimeout(setEditProfileTrigger(!editProfileTrigger),1000)
                
                console.log(editProfileTrigger);
            }
        }
    );
    widget.open();
};

const UserProfileHeader = ({
    userProfile,
    userId,
    followed,
    queryUserId,
    token,
    setfFllowTrigger,
    followTrigger,
    setEditProfileTrigger,
    editProfileTrigger,
}: UserProfileHeaderInfoProps) => {
    useEffect(() => {
        const script = document.createElement("script");

        script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, [editProfileTrigger]);

    return (
        <Box pos="relative" m="auto" w="100%" height="245px" background="rgba(79, 79, 79, 0.8)">
            <Image
                opacity="0.5"
                src={userProfile.userBgImg}
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
                        onClick={() => {
                            showWidget(changeAvatar, token, setEditProfileTrigger, editProfileTrigger, 1);
                        }}
                    >
                        <Icon as={HiCamera} w={9} h={9} opacity="1" color="lightBlue.600" p="0" zIndex={5} />
                    </Button>
                ) : (
                    <></>
                )}

                <Flex flexDir="row">
                    <Avatar
                        key={userProfile.userName.split(" ")[0]}
                        name={userProfile.userName.split(" ")[0]}
                        src={userProfile.userAvatar}
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
                                {userProfile.userRole === "admin" ? "Admin_User" : "General_User"}
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
                            {userProfile.userName.split(" ")[0]}
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
                    onClick={() => {
                        showWidget(changeBgImg, token, setEditProfileTrigger, editProfileTrigger, 5.07);
                    }}
                >
                    <Icon as={HiUpload} w={6} h={6} opacity="1" color="white" />

                    <Text color="white" opacity="1" pl={2}>
                        {"Edit your background"}
                    </Text>
                </Button>
            ) : (
                <></>
            )}
        </Box>
    );
};

export default UserProfileHeader;
