import React from "react";
import { getCommentsByCondition } from "@/utils/axiosCommentApi";
import { useState, useEffect } from "react";
import ReviewInfo from "./ReviewInfo";
import { useRouter } from "next/router";
import SeeMoreReviews from "@/components/MainPage/SeeMoreReviews";

const ReviewPosts = () => {
    const [reviewList, setReviewList] = useState([]);
    const [topCommentsLength, setTopCommentsLength] = useState(0);
    const router = useRouter();
    const { id }: any = router.query;

    useEffect(() => {
        const fetchComments = async () => {
            const res = await getCommentsByCondition(id, "createdAt", 3, 0);
            if (res.data.length !== 0) {
                setReviewList(res.data.topComments)
                setTopCommentsLength(res.data.length);
            }
        }
        fetchComments()
    }, [])

    if (reviewList.length === 0) return <div>be the first one to make comments</div>;
    return (
        <>
            {(reviewList || []).length > 0 &&
        reviewList?.map(
            ({
                _id,
                content,
                createdAt,
                author,
                likeCount,
                viewNumber,
                commentCount,
                topComment,
            }) => {
                return (
                    <ReviewInfo
                        key={_id}
                        author={author}
                        createdAt={createdAt}
                        likeCount={likeCount}
                        views={viewNumber}
                        comments={commentCount}
                        description={content}
                        id={""}
                    />
                );
            }
        )}
            <SeeMoreReviews href={`/movies/reviews/${id}`} topCommentsLength={topCommentsLength} />
        </>
    );
};

export default ReviewPosts;
