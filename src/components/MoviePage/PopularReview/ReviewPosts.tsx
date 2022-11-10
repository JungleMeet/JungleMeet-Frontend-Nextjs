import React from "react";
import { getCommentsByCondition } from "@/utils/axiosCommentApi";
import { useState, useEffect } from "react";
import ReviewInfo from "./ReviewInfo";

const ReviewPosts = () => {
    const [reviewList, setReviewList] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await getCommentsByCondition("6355ec010dfda61162b3bec0", "createdAt", 3, 0);
                setReviewList(res.data);
                console.log("commentInfo", res.data);
            } catch (err) {
                return err;
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
                    />
                );
            }
        )}
        </>
    );
};

export default ReviewPosts;
