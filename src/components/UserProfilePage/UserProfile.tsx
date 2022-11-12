import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/react";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlineFlag } from "react-icons/ai";
// import { MdOutlinePersonAddAlt1, MdPeople } from "react-icons/md";
import { BsFillPersonPlusFill } from "react-icons/bs";

import UserProfileContent from "@/components/UserProfilePage/UserProfileContent";
import UserProfileSider from "@/components/UserProfilePage/UserProfileSider";

import { getUserProfile } from "@/utils/axiosUserApi";
import UserProfileHeader from "@/components/UserProfilePage/UserProfileHeader";

const UserProfilePage = () => {
    const [userProfile, setUserProfile] = useState();
    const userId = useSelector((state: any) => state.login.userInfo).userId;

    useEffect(() => {
        (async () => {
            try {
                setUserProfile((await getUserProfile(userId)).data);
            } catch (err) {
                console.log(userProfile);
                
            }
        })();
        console.log(userId);
        return;
    }, []);

    return (
        <>
            <UserProfileHeader userRole="General User" userName="Justin" />
            {/* {userProfileMemo    ?.map(({ resourceId, poster, title, voteAverage }: ImovieList) => {
                    return <Movie src={poster} title={title} tmdb={voteAverage} key={resourceId} />;
            })} */}
            <Flex flexDirection="row" pos="relative" mt="28px" w="100%">
                <UserProfileContent />
                <Flex ml="auto" flexDirection="column">
                    <UserProfileSider siderName="Follower" count={5} icon={IoPeopleOutline}>
                        {/* {userProfile.followersList.map(follower)=>{}} */}
                    </UserProfileSider>

                    <UserProfileSider siderName="Following" count={5} icon={BsFillPersonPlusFill}>
                        {/* <FollowingDetailSiderContent/> */}
                    </UserProfileSider>

                    <UserProfileSider siderName="Followed Post" count={5} icon={AiOutlineFlag}>
                        {/* <FollowedPostDetailSiderContent/> */}
                    </UserProfileSider>
                </Flex>
            </Flex>
        </>
    );
};

export default UserProfilePage;
