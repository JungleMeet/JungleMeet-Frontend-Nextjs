import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DiscussionDetailHeader from "./DiscussionsDetailHeader";
import { getPostById } from "@/utils/axiosPostApi";
import { getUserById } from "@/utils/axiosUserApi";
import { Box, useToast } from "@chakra-ui/react";
import DiscussionsDetailContent from "./DiscussionsDetailContent";
import DiscussionsDetailComments from "./DiscussionsDetailComments";
import AddComment from "./AddComment";
import { useSelector, useDispatch } from "react-redux";
import { openLoginModal } from "@/app/reducer/loginModalSlice";

const DiscussionsDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [postDetail, setPostDetail] = useState("" as any);
    const [userDetail, setUserDetail] = useState("" as any);
    const isLogged = useSelector((state: any) => state.login.isLogged);
    const [isEditorVisible, setIsEditorVisible] = useState(false);
    const dispatch = useDispatch();
    const toast = useToast();

    useEffect(() => {
        const getDetail = async () => {
            try {
                if (!id) return;
                const { data } = await getPostById(id?.toString());
                const { data: user } = await getUserById(data.author);

                setUserDetail(user);
                setPostDetail(data);
            } catch (err) {
                return err;
            }
        };
        getDetail();
    }, []);

    useEffect(() => {
        setIsEditorVisible(isLogged);
    }, [isLogged]);

    const toggleShowEditor = () => {
        if (!isLogged) {
            toast({
                position: "bottom",
                title: "Please Log in",
                description: "Only registered users can make comments",
                status: "warning",
                duration: 5000,
                isClosable: true,
            });
            return dispatch(openLoginModal());
        }
        setIsEditorVisible((state) => !state);
    };

    // make sure id is a string to satisfy typescript
    if (typeof id !== "string") return router.push("/");

    return (
        <Box key={postDetail._id}>
            <DiscussionDetailHeader
                postId={postDetail?._id}
                title={postDetail.title}
                name={userDetail.name}
                avatar={userDetail.avatar}
                userId={userDetail._id}
                date={postDetail.createdAt}
                like={postDetail.like?.length}
            />
            <DiscussionsDetailContent
                postId={postDetail._id}
                content={postDetail.content}
                bgImg={postDetail.bgImg}
                toggleShowEditor={toggleShowEditor}
                isEditorVisible={isEditorVisible}
            />
            <AddComment isEditorVisible={isEditorVisible} postId={id} />
            <DiscussionsDetailComments postId={postDetail._id} />
        </Box>
    );
};

export default DiscussionsDetailPage;
