import React, { useState, useEffect } from "react";
import { Flex, Text, Avatar, Icon } from "@chakra-ui/react";
import { HiOutlineUsers, HiOutlineUserAdd, HiOutlineFlag } from "react-icons/hi";
import { HiLightBulb } from "react-icons/hi";
import { AxiosResponse } from "axios";

import UserProfileHeader from "@/components/UserProfilePage/UserProfileHeader";
import UserProfileContent from "@/components/UserProfilePage/UserProfileContent";
import UserProfileSider from "@/components/UserProfilePage/UserProfileSider";
import Discussion from "@/components/DiscussionsPage/Discussion";
import { CurrentPagePostProps } from "@/components/DiscussionsPage/DiscussionsPage";
import { getUserProfile } from "@/utils/axiosUserApi";
import { getPostsByUserId } from "@/utils/axiosPostApi";

const ProfileSiderDetails = (follower: { name: string; role: string; avatar: string }) => {
    return (
        <Flex w="40%" h="70px" flexDir={"row"} mr="5%">
            <Avatar
                name={follower.name}
                src={follower.avatar}
                borderRadius="full"
                width="40px"
                height="40px"
                margin="auto"
            ></Avatar>
            <Flex flexDir={"column"} ml="18px" flex-grow={1} margin="auto">
                <Text
                    color="blue.500"
                    fontWeight={500}
                    font-style="normal"
                    maxWidth="90px"
                    fontSize="text5"
                    h="20px"
                    overflow="hidden"
                    lineHeight="lh20"
                    pb="5px"
                >
                    {follower.name}
                </Text>
                <Flex flexDir={"row"} mt="1px" h="23px">
                    <Icon as={HiLightBulb} h={4} color="gray.500" mr="3px" />
                    <Text mt="4px" color="gray.500" fontSize={"text6"} fontWeight="400" lineHeight="12px">
                        {follower.role === "admin" ? "Admin" : "General User"}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

const UserProfilePage = () => {
    const defaultUserProfile = {
        userRole: "Nan",
        userName: "Nan",
        userBgImg: "Nan",
        userAvatar: "Nan",
        followersList: [],
        followingsList: [],
        followingPostsList: [],
    };
    const [userProfile, setUserProfile] = useState(defaultUserProfile);
    const [userPost, setUserPost] = useState<CurrentPagePostProps[]>([]);

    useEffect(() => {
        const getUserProfileDetail = async () => {
            try {
                const userInfoLocalStorage = localStorage.getItem("userInfo");
                if (userInfoLocalStorage) {
                    const userInfo = JSON.parse(userInfoLocalStorage);
                    const profileResponse: AxiosResponse = await getUserProfile(userInfo.userId)!;
                    setUserProfile(profileResponse.data);
                    const postResponse: AxiosResponse = await getPostsByUserId(
                        3,
                        0,
                        "createdAt",
                        userInfo.userId
                    )!;
                    setUserPost(postResponse.data.data);
                } else {
                }
            } catch (err) {
                console.log(err);
            }
        };
        getUserProfileDetail();
    }, []);

    return (
        <>
            <UserProfileHeader
                userAvatar={userProfile.userAvatar}
                userBgImg={userProfile.userBgImg}
                userRole={userProfile.userRole}
                userName={userProfile.userName}
            />

            <Flex flexDirection="row" pos="relative" mt="28px" w="100%">
                <Flex w="816px" flexDirection="column">
                    <UserProfileContent />
                    {userPost?.map(
                        ({
                            _id,
                            title,
                            content,
                            releaseDateRightFormat,
                            hashtag,
                            bgImg,
                            author,
                            likeCount,
                            viewNumber,
                            commentCount,
                        }: CurrentPagePostProps) => (
                            <Discussion
                                key={_id}
                                postId={_id}
                                hashtag={hashtag}
                                src={bgImg}
                                title={title}
                                name={author}
                                date={releaseDateRightFormat}
                                like={likeCount}
                                views={viewNumber}
                                comments={commentCount}
                                description={content}
                            />
                        )
                    )}
                </Flex>
                <Flex ml="auto" flexDirection="column">
                    <UserProfileSider
                        siderName="Follower"
                        count={userProfile.followersList.length}
                        icon={HiOutlineUsers}
                        width={"403px"}
                        marginTop={"0"}
                    >
                        <Flex flexDir={"row"} w="100%" flexWrap="wrap" ml="5%" mr="5%">
                            {userProfile.followersList.length > 4
                                ? userProfile.followersList.slice(0, 4).map(ProfileSiderDetails)
                                : userProfile.followersList.map(ProfileSiderDetails)}
                        </Flex>
                    </UserProfileSider>

                    <UserProfileSider
                        siderName="Following"
                        count={userProfile.followingsList.length}
                        icon={HiOutlineUserAdd}
                        width={"403px"}
                        marginTop={"25px"}
                    >
                        <Flex flexDir={"row"} w="100%" flexWrap="wrap" ml="5%" mr="5%">
                            {userProfile.followingsList.length > 4
                                ? userProfile.followingsList.slice(0, 4).map(ProfileSiderDetails)
                                : userProfile.followingsList.map(ProfileSiderDetails)}
                        </Flex>
                    </UserProfileSider>

                    <UserProfileSider
                        siderName="Followed Post"
                        count={userProfile.followingPostsList.length}
                        icon={HiOutlineFlag}
                        width={"403px"}
                        marginTop={"25px"}
                    >
                        <Flex flexDir={"row"} w="100%" flexWrap="wrap" ml="5%" mr="5%">
                            {userProfile.followingPostsList.length > 4
                                ? userProfile.followingPostsList
                                    .slice(0, 4)
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
