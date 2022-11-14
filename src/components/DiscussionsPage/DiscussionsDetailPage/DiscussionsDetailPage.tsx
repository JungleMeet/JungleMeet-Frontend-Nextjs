import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DiscussionDetailHeader from "./DiscussionsDetailHeader";
import { getPostById } from "@/utils/axiosPostApi";
import { getUserById } from "@/utils/axiosUserApi";
import { Box } from "@chakra-ui/react";
import DiscussionsDetailContent from "./DiscussionsDetailContent";
import DiscussionsDetailComments from "./DiscussionsDetailComments";

const DiscussionsDetailPage = () => {
    const [postDetail, setPostDetail] = useState("" as any);
    const [userDetail, setUserDetail] = useState("" as any);
    const router = useRouter();
    const { id } = router.query;

    // const currentPagePost = useMemo(() => postDetail, [postDetail]);
    useEffect(() => {
        const getDetail = async () => {
            try {
                const { data } = await getPostById(id?.toString());

                const { data: user } = await getUserById(data.author);

                setUserDetail(user);
                setPostDetail(data);
            } catch (err) {
                console.log(err);
            }
        };
        getDetail();
    }, []);
    console.log(postDetail.like);

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
            />
            <DiscussionsDetailComments postId={postDetail._id} />
        </Box>
    );
};

export default DiscussionsDetailPage;
