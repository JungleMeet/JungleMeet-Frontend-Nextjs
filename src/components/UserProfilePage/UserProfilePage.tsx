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
import uuid from "react-uuid";

interface userProfileProps {
    queryUserId: string;
    active: string;
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
        userId: string;
    }[];
    followingsList: {
        name: string;
        role: string;
        avatar?: string;
        userId: string;
    }[];
    followingPostsList: {
        title: string;
    }[];
}
const UserProfilePage = ({ queryUserId, active }: userProfileProps) => {
    const defaultUserProfile = {
        userRole: "",
        userName: "",
        userBgImg: "",
        userAvatar: "",
        followersList: [{ name: "", avatar: "", role: "", userId: "" }],
        followingsList: [{ name: "", avatar: "", role: "", userId: "" }],
        followingPostsList: [{ title: "" }],
    };

    const [userProfile, setUserProfile] = useState<IUserProfile>(defaultUserProfile);
    const [userId, setUserId] = useState("");
    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [currentTab, setCurrentTab] = useState(active === "message" ? "Message": "My Posts");

    const [followed, setFollowed] = useState(false);
    const [followTrigger, setfFllowTrigger] = useState(true);
    const [selfProfile, setSelfProfile] = useState<IUserProfile>(defaultUserProfile);

    const [editProfileTrigger, setEditProfileTrigger] = useState(false);

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
                    const selfProfileResponse: AxiosResponse = await getUserProfile(userInfo.userId)!;
                    setSelfProfile(selfProfileResponse.data);

                    setUserId(userInfo.userId);
                    setFollowed(
                        profileResponse.data.followersList
                            .map((follower: any) => follower.userId)
                            .includes(userInfo.userId)
                    );
                } else {
                }
            } catch (err) {
                return err;
            }
        };
        getUserProfileDetail();
    }, []);

    useEffect(() => {
        const updateProfile = async () => {
            try {
                const userInfoLocalStorage = localStorage.getItem("userInfo");
                if (userInfoLocalStorage) {
                    const userInfo = JSON.parse(userInfoLocalStorage);
                    const profileResponse: AxiosResponse = await getUserProfile(
                        queryUserId === userInfo.userId ? userInfo.userId : queryUserId
                    )!;
                    setUserProfile(profileResponse.data);
                } else {
                }
            } catch (err) {
                console.log(err);
            }
        };
        updateProfile();
    }, [editProfileTrigger]);

    useEffect(() => {
        const updateFollow = async () => {
            try {
                const userInfoLocalStorage = localStorage.getItem("userInfo");
                if (userInfoLocalStorage) {
                    const userInfo = JSON.parse(userInfoLocalStorage);
                    const profileResponse: AxiosResponse = await getUserProfile(
                        queryUserId === userInfo.userId ? userInfo.userId : queryUserId
                    );
                    setUserProfile(profileResponse.data);
                    const selfProfileResponse: AxiosResponse = await getUserProfile(userInfo.userId)!;
                    setSelfProfile(selfProfileResponse.data);
                    setFollowed(
                        profileResponse.data.followersList
                            .map((follower: any) => follower.userId)
                            .includes(userInfo.userId)
                    );
                } else {
                }
            } catch (err) {
                console.log(err);
            }
        };
        updateFollow();
    }, [followTrigger]);

    return (
        <>
            <UserProfileHeader
                userAvatar={userProfile.userAvatar}
                userBgImg={userProfile.userBgImg}
                userRole={userProfile.userRole}
                userName={userProfile.userName}
                userId={userId}
                queryUserId={queryUserId}
                followed={followed}
                token={token}
                setfFllowTrigger={setfFllowTrigger}
                followTrigger={followTrigger}
                setEditProfileTrigger={setEditProfileTrigger}
                editProfileTrigger={editProfileTrigger}
            />
            <Flex flexDirection="row" pos="relative" mt="28px">
                <Flex maxW="816px" flexDirection="column" w="70%">
                    <Tabs w="100%" defaultIndex={active === "message" ? 1 : 0}>
                        <UserProfileTabs
                            isLoading={isLoading}
                            setCurrentTab={setCurrentTab}
                            isSelf={userId === queryUserId}
                            userName={userProfile.userName}
                            active={active}
                        />
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
                <Flex mr="0px" ml="26px" flexDirection="column" maxW="403px" w="35%">
                    <UserProfileSider
                        siderName="Followers"
                        count={userProfile.followersList.length}
                        icon={HiOutlineUsers}
                        marginTop="0"
                        modalItems={userProfile.followersList}
                        token={token}
                        selfProfile={selfProfile}
                        followTrigger={followTrigger}
                        setfFllowTrigger={setfFllowTrigger}
                        followed={followed}
                    >
                        <Flex
                            display="grid"
                            w="100%"
                            flexWrap="wrap"
                            gridTemplateColumns="1fr 1fr"
                            columnGap="28.2px"
                            rowGap="15px"
                        >
                            {(userProfile.followersList.length > 6
                                ? userProfile.followersList.slice(0, 6)
                                : userProfile.followersList
                            ).map(({ name, role, avatar, userId }) => {
                                return (
                                    <ProfileSiderDetails
                                        key={uuid()}
                                        name={name}
                                        role={role}
                                        avatar={avatar}
                                        userId={userId}
                                    ></ProfileSiderDetails>
                                );
                            })}
                        </Flex>
                    </UserProfileSider>

                    <UserProfileSider
                        siderName="Following"
                        count={userProfile.followingsList.length}
                        icon={HiOutlineUserAdd}
                        marginTop={"25px"}
                        modalItems={userProfile.followingsList}
                        token={token}
                        selfProfile={selfProfile}
                        followTrigger={followTrigger}
                        setfFllowTrigger={setfFllowTrigger}
                        followed={followed}
                    >
                        <Flex
                            display="grid"
                            w="100%"
                            flexWrap="wrap"
                            gridTemplateColumns="1fr 1fr"
                            columnGap="28.2px"
                            rowGap="15px"
                        >
                            {(userProfile.followingsList.length > 6
                                ? userProfile.followingsList.slice(0, 6)
                                : userProfile.followingsList
                            ).map(({ name, role, avatar, userId }) => {
                                return (
                                    <ProfileSiderDetails
                                        key={uuid()}
                                        name={name}
                                        role={role}
                                        avatar={avatar}
                                        userId={userId}
                                    ></ProfileSiderDetails>
                                );
                            })}
                        </Flex>
                    </UserProfileSider>

                    <UserProfileSider
                        siderName="Followed Post"
                        count={userProfile.followingPostsList.length}
                        icon={HiOutlineFlag}
                        marginTop={"25px"}
                        modalItems={userProfile.followingPostsList}
                        token={token}
                        followTrigger={followTrigger}
                        setfFllowTrigger={setfFllowTrigger}
                        followed={followed}
                        selfProfile={selfProfile}
                    >
                        <Flex
                            flexDirection={"column"}
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

export default UserProfilePage;
