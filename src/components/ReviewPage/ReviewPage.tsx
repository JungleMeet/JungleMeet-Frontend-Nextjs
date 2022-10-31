import React from "react";
import Review from "./Review";
import ReviewFilter from "./ReviewFilter";
import ReviewHeader from "./ReviewHeader";

const ReviewPage = () => {
    return (
        <>
            <ReviewHeader />
            <ReviewFilter />
            <Review author="james" createdAt="12/02/2022" />
        </>
    );
};

export default ReviewPage;
