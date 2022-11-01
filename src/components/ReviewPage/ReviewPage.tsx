import React from "react";
import ReviewNReplies from "./ReviewsNReplies";
import ReviewFilter from "./ReviewFilter";
import ReviewHeader from "./ReviewHeader";

const ReviewPage = () => {
    return (
        <>
            <ReviewHeader title="abc" image="/dune.jpg" alt="alt" />
            <ReviewFilter reviews="109" />
            <ReviewNReplies />
            <ReviewNReplies />
            <ReviewNReplies />
        </>
    );
};

export default ReviewPage;
