import React, { useState, useEffect } from "react";
import { Flex, Text, Tabs, TabPanels } from "@chakra-ui/react";
import { HiOutlineUsers, HiOutlineUserAdd, HiOutlineFlag } from "react-icons/hi";
import { AxiosResponse } from "axios";
import Message from "./Message";
import ChangePassword from "./ChangePassword";
import UserProfileHeader from "@/components/UserProfilePage/UserProfileHeader";
import UserProfileTabs from "@/components/UserProfilePage/UserProfileTabs";
import UserProfileSider from "@/components/UserProfilePage/UserProfileSider";
import ProfileSiderDetails from "./ProfileSiderDetails";
import { getUserProfile } from "@/utils/axiosUserApi";
import UserPosts from "./UserPosts";

interface userProfileProps {
    queryUserId: string;
}

interface IUserProfile {
    userRole: string;
    userName: string;
    userBgImg: string;
    userAvatar: string;
    followersList: {
        name: string;
        role: string;
        avatar?: string;
    }[];
    followingsList: {
        name: string;
        role: string;
        avatar?: string;
    }[];
    followingPostsList: {
        title: string;
    }[];
}
const UserProfilePage = ({ queryUserId }: userProfileProps) => {
    const defaultUserProfile = {
        userRole: "",
        userName: "",
        userBgImg: "",
        userAvatar: "",
        followersList: [{ name: "", avatar: "", role: "" }],
        followingsList: [{ name: "", avatar: "", role: "" }],
        followingPostsList: [{ title: "" }],
    };
    const [userProfile, setUserProfile] = useState<IUserProfile>(defaultUserProfile);
    const [userId, setUserId] = useState("");
    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [currentTab, setCurrentTab] = useState("My Posts");
    useEffect(() => {
        const getUserProfileDetail = async () => {
            try {
                const userInfoLocalStorage = localStorage.getItem("userInfo");
                if (userInfoLocalStorage) {
                    const userInfo = JSON.parse(userInfoLocalStorage);
                    const token = localStorage.getItem("token");
                    setToken(token!);
                    const profileResponse: AxiosResponse = await getUserProfile(
                        queryUserId === userInfo.userId ? userInfo.userId : queryUserId
                    )!;
                    setUserProfile(profileResponse.data);
                    setUserId(userInfo.userId);
                } else {
                }
            } catch (err) {
                return err;
            }
        };
        getUserProfileDetail();
    }, []);
    console.log("userProfile", userProfile);
    return (
        <>
            <UserProfileHeader
                userAvatar={userProfile.userAvatar}
                userBgImg={userProfile.userBgImg}
                userRole={userProfile.userRole}
                userName={userProfile.userName}
                isSelf={userId === queryUserId}
                queryUserId={queryUserId}
                followed={userId in userProfile.followingsList}
                token={token}
            />
            <Flex flexDirection="row" pos="relative" mt="28px" w="100%">
                <Flex maxW="816px" flexDirection="column">
                    <Tabs>
                        <UserProfileTabs isLoading={isLoading} setCurrentTab={setCurrentTab} />
                        <TabPanels>
                            {currentTab === "My Posts" ? (
                                <UserPosts queryUserId={queryUserId} setIsLoading={setIsLoading} />
                            ) : currentTab === "Message" ? (
                                <Message setIsLoading={setIsLoading}></Message>
                            ) : (
                                <ChangePassword setIsLoading={setIsLoading}></ChangePassword>
                            )}
                        </TabPanels>
                    </Tabs>
                </Flex>
                <Flex mr="0px" ml="auto" flexDirection="column" maxW="403px">
                    <UserProfileSider
                        siderName="Follower"
                        count={userProfile.followersList.length}
                        icon={HiOutlineUsers}
                        marginTop="0"
                    >
                        <Flex
                            display="grid"
                            w="100%"
                            flexWrap="wrap"
                            gridTemplateColumns="1fr 1fr"
                            columnGap="28.2px"
                            rowGap="15px"
                        >
                            {userProfile.followersList.length > 6
                                ? userProfile.followersList.slice(0, 6).map(ProfileSiderDetails)
                                : userProfile.followersList.map(ProfileSiderDetails)}
                        </Flex>
                    </UserProfileSider>

                    <UserProfileSider
                        siderName="Following"
                        count={userProfile.followingsList.length}
                        icon={HiOutlineUserAdd}
                        marginTop={"25px"}
                    >
                        <Flex
                            display="grid"
                            w="100%"
                            flexWrap="wrap"
                            gridTemplateColumns="1fr 1fr"
                            columnGap="28.2px"
                            rowGap="15px"
                        >
                            {userProfile.followingsList.length > 6
                                ? userProfile.followingsList.slice(0, 6).map(ProfileSiderDetails)
                                : userProfile.followingsList.map(ProfileSiderDetails)}
                        </Flex>
                    </UserProfileSider>

                    <UserProfileSider
                        siderName="Followed Post"
                        count={userProfile.followingPostsList.length}
                        icon={HiOutlineFlag}
                        marginTop={"25px"}
                    >
                        <Flex
                            display="grid"
                            w="100%"
                            flexWrap="wrap"
                            gridTemplateColumns="1fr 1fr"
                            columnGap="28.2px"
                            rowGap="15px"
                        >
                            {userProfile.followingPostsList.length > 6
                                ? userProfile.followingPostsList
                                    .slice(0, 6)
                                    .map((followingPosts: { title: string }) => (
                                        <Text
                                            key={userProfile.userName + followingPosts.title}
                                            w="100%"
                                            mr="5%"
                                            mt="13px"
                                            mb="10px"
                                            color="blue.500"
                                            lineHeight="20px"
                                            h="26px"
                                        >
                                            {followingPosts.title}
                                        </Text>
                                    ))
                                : userProfile.followingPostsList.map((followingPosts: { title: string }) => (
                                    <Text
                                        key={userProfile.userName + followingPosts.title}
                                        w="100%"
                                        mr="5%"
                                        mt="13px"
                                        mb="10px"
                                        color="blue.500"
                                        lineHeight="20px"
                                        h="26px"
                                    >
                                        {followingPosts.title}
                                    </Text>
                                ))}
                        </Flex>
                    </UserProfileSider>
                </Flex>
            </Flex>
        </>
    );
};
// interface FollowPrps {
//     name: String;
//     role: String;
//     bgImg: String;
// }
// const Following = (following: FollowPrps) =>{
//     return(
//         {
//             following.map((following)=>{

//             })
//         }
//     )
// }

export default UserProfilePage;
