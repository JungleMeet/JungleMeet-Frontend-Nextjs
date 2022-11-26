import React from "react";
import { getCommentsByCondition } from "@/utils/axiosCommentApi";
import { useState, useEffect } from "react";
import ReviewInfo, { IReviewInfoProps } from "./ReviewInfo";
import { useRouter } from "next/router";
import SeeMoreReviews from "@/components/MainPage/SeeMoreReviews";

interface IReviewPostsProps {
    isRefresh: boolean;
}
const ReviewPosts = ({ isRefresh }: IReviewPostsProps) => {
    const [reviewList, setReviewList] = useState([]);
    const [topCommentsLength, setTopCommentsLength] = useState(0);
    const router = useRouter();
    const { id }: any = router.query;

    useEffect(() => {
        const fetchComments = async () => {
            const res = await getCommentsByCondition(id, "createdAt", 3, 0);
            const dataLength = res.data.length;
            const commentsData = res.data.topComments;
            setReviewList(commentsData);
            setTopCommentsLength(dataLength);
        };
        fetchComments();
    }, [isRefresh]);

    return (
        <>
            {reviewList?.map(({ _id, createdAt, author, likeCount, content }: IReviewInfoProps) => {
                return (
                    <ReviewInfo
                        key={_id}
                        _id={_id}
                        author={author}
                        createdAt={createdAt}
                        likeCount={likeCount}
                        content={content}
                    />
                );
            })}
            {topCommentsLength>0? <SeeMoreReviews href={`/movies/reviews/${id}`} topCommentsLength={topCommentsLength} />: `Be the firest one to comment`}
        </>
    );
};

export default ReviewPosts;