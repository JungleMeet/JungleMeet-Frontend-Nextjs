import React from "react";
import { getCommentsByCondition } from "@/utils/axiosCommentApi";
import { useState, useEffect } from "react";
import ReviewInfo from "./ReviewInfo";
import { useRouter } from "next/router";

const ReviewPosts = () => {
    const [reviewList, setReviewList] = useState([]);
    const router = useRouter();
    const { id }: any = router.query;
    useEffect(() => {
        const fetchComments = async () => {
            const res = await getCommentsByCondition(id, "createdAt", 3, 0);
            if (res.data.length === 0) {
                () => {};
            } else {
                try {
                    setReviewList(res.data.topComments);
                    console.log("commentInfo", res.data);
                } catch (err) {
                    return err;
                }
            }
        };

        fetchComments();
    }, []);
    return (
        <>
            {(reviewList || []).length > 0 &&
        reviewList?.map(
            ({ _id, content, createdAt, author, likeCount, viewNumber, commentCount }) => {
                return (
                    <ReviewInfo
                        key={_id}
                        author={author}
                        date={createdAt}
                        likeCount={likeCount}
                        views={viewNumber}
                        comments={commentCount}
                        description={content}
                        id={""}
                    />
                );
            }
        )}
        </>
    );
};

export default ReviewPosts;
