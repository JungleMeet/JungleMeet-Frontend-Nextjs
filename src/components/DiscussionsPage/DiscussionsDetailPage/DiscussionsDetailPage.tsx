import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DiscussionDetailHeader from "./DiscussionsDetailHeader";
import { getPostById } from "@/utils/axiosPostApi";
import { getUserById } from "@/utils/axiosUserApi";
import { Box, useToast } from "@chakra-ui/react";
import DiscussionsDetailContent from "./DiscussionsDetailContent";
import DiscussionsDetailComments from "./DiscussionsDetailComments";
import CommentEditor from "../../Editor/CommentEditor";
import { useSelector, useDispatch } from "react-redux";
import { openLoginModal } from "@/app/reducer/loginModalSlice";
import { getCurrentPostData } from "@/app/reducer/postEditingSlice";

interface IpostDetail {
    _id: string;
    title: string;
    createdAt: string;
    like?: string[];
    content: string;
    bgImg?: string;
    follower?: string[];
    hashtag?: string;
}
[];

interface IuserDetail {
    name?: string;
    avatar?: string;
    _id?: string;
}
const DiscussionsDetailPage = (): JSX.Element => {
    const router = useRouter();
    const { id }: { id?: string } = router.query;
    const [postDetail, setPostDetail] = useState<IpostDetail>();
    const [userDetail, setUserDetail] = useState<IuserDetail>();
    const isLogged = useSelector((state: any) => state.login.isLogged);
    const userInfo = useSelector((state: any) => state.login.userInfo);
    const [isEditorVisible, setIsEditorVisible] = useState(false);
    const dispatch = useDispatch();
    const toast = useToast();
    const [currentId, setCurrentId] = useState("");
    const [userRole, setUserRole] = useState("");

    // make sure id is a string to satisfy typescript
    if (typeof id !== "string") router.push("/");

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
    // trigger fetching data when post editor close
    }, []);

    useEffect(() => {
        setUserRole(userInfo?.userRole);
        setCurrentId(userInfo?.userId);
    }, [userInfo]);

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

    const handleEditPost = () => {
        if (postDetail) {
            dispatch(
                getCurrentPostData({
                    postId: postDetail._id,
                    postTitle: postDetail.title,
                    content: postDetail.content,
                    hashtag: postDetail.hashtag,
                    bgImg: postDetail.bgImg,
                })
            );
            router.push("/editpost");
        }
    };

    return (
        <Box key={postDetail?._id}>
            <DiscussionDetailHeader
                postId={postDetail?._id}
                title={postDetail?.title}
                name={userDetail?.name}
                avatar={userDetail?.avatar}
                userId={userDetail?._id}
                userRole={userRole}
                currentId={currentId}
                date={postDetail?.createdAt}
                followList={postDetail?.follower}
                likeList={postDetail?.like}
                like={postDetail?.like?.length}
                isLogged={isLogged}
                handleEditPost={handleEditPost}
            />
            <DiscussionsDetailContent
                postId={postDetail?._id}
                content={postDetail?.content}
                bgImg={postDetail?.bgImg}
                currentId={currentId}
                userId={userDetail?._id}
                toggleShowEditor={toggleShowEditor}
                isEditorVisible={isEditorVisible}
                isLogged={isLogged}
            />
            {isEditorVisible ? <CommentEditor postId={id} /> : null}
            <DiscussionsDetailComments />
        </Box>
    );
};

export default DiscussionsDetailPage;
