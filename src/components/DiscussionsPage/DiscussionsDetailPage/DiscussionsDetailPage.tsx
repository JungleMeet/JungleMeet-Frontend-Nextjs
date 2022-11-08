import React, { useEffect, useState, useMemo } from "react";

import DiscussionDetailHeader from "./DiscussionsDetailHeader";
import { getPosts } from "@/utils/axiosPostApi";
import { Box } from "@chakra-ui/react";
import DiscussionsDetailContent from "./DiscussionsDetailContent";
import DiscussionsDetailComments from "./DiscussionsDetailComments";

const DiscussionsDetailPage = () => {
    const [postDetail, setPostDetail] = useState([]);

    const currentPagePost = useMemo(() => postDetail, [postDetail]);
    useEffect(() => {
        const getPostsDetail = async () => {
            try {
                const { data } = await getPosts();

                const allPost = data.data;

                setPostDetail(allPost.slice(0, 1));
            } catch (err) {
                console.log(err);
            }
        };
        getPostsDetail();
    }, []);

    interface CurrentDetailProps {
        _id: string;
        title: string;
        bgImg: string;
        releaseDateRightFormat: string;
        author: {
            _id: string;
            name: string;
            avatar: string;
        };
        likeCount: number;
        content: string;
        postId: string;
    }
    const currentDetailMemo = useMemo(
        () => (
            <>
                {currentPagePost?.map(
                    ({
                        _id,
                        title,
                        content,
                        releaseDateRightFormat,
                        bgImg,
                        author,

                        likeCount,
                    }: CurrentDetailProps) => (
                        <Box key={_id}>
                            <DiscussionDetailHeader
                                postId={_id}
                                title={title}
                                name={author}
                                date={releaseDateRightFormat}
                                like={likeCount}
                            />
                            <DiscussionsDetailContent postId={_id} content={content} bgImg={bgImg} />
                            <DiscussionsDetailComments postId={_id} />
                        </Box>
                    )
                )}
            </>
        ),
        [currentPagePost]
    );

    return <>{currentDetailMemo}</>;
};

export default DiscussionsDetailPage;
