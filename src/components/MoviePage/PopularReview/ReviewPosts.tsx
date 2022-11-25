import React from "react";
import { getCommentsByCondition } from "@/utils/axiosCommentApi";
import { useState, useEffect, useMemo } from "react";
import ReviewInfo from "./ReviewInfo";
import { useRouter } from "next/router";
import SeeMoreReviews from "@/components/MainPage/SeeMoreReviews";
import { IReviewInfoProps } from "@components/MoviePage/PopularReview/ReviewInfo";

const ReviewPosts = () => {
    const [refreshComments, setRefreshComments] = useState(false);
    const [reviewList, setReviewList] = useState([]);
    const [topCommentsLength, setTopCommentsLength] = useState(0);
    const router = useRouter();
    const { id }: any = router.query;

    //     to know the state of the review post
    useEffect(() => {
        const fetchComments = async () => {
            setRefreshComments(true);
            const res = await getCommentsByCondition(id, "createdAt", 3, 0);
            const dataLength = res.data.length;
            const commentsData = res.data.topComments;
            setReviewList(commentsData);
            setTopCommentsLength(dataLength);
            setRefreshComments(false);
        };
        fetchComments();
    }, []);

    const reviewPostsMemo = useMemo(
        () =>
            reviewList ? (
                !refreshComments &&
        reviewList?.map(({ _id, createdAt, author, likeCount, content }: IReviewInfoProps) => (
            <ReviewInfo
                key={_id}
                _id={_id}
                author={author}
                createdAt={createdAt}
                likeCount={likeCount}
                content={content}
            />
        ))
            ) : (
                <div>Be the first one to make comments</div>
            ),
        [reviewList]
    );

    return (
        <>
            {reviewPostsMemo}
            <SeeMoreReviews href={`/movies/reviews/${id}`} topCommentsLength={topCommentsLength} />
        </>
    );
};

export default ReviewPosts;
