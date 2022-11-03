import PostCardInfo from "./PostCardInfo";
import React from "react";
import { getPostsByCondition } from "@/utils/axiosPostApi";
import { useState, useEffect } from "react";

const DisscusionPosts = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await getPostsByCondition(3, 0, "createdAt");
                setPostList(res.data.data);
                console.log("discussionInfo", res.data);
            } catch (err) {
                return err;
            }
        };
        fetchPosts();
    }, []);
    return (
        <>
            {postList.length > 0 && postList?.map(
                ({
                    _id,
                    title,
                    content,
                    releaseDateRightFormat,
                    bgImg,
                    author,
                    likeCount,
                    viewNumber,
                    commentCount,
                }) => {
                    return (
                        <PostCardInfo
                            key={_id}
                            src={bgImg}
                            title={title}
                            name={author}
                            date={releaseDateRightFormat}
                            like={likeCount}
                            views={viewNumber}
                            comments={commentCount}
                            description={content}
                        />
                    );
                }
            )}
        </>
    );
};

export default DisscusionPosts;
