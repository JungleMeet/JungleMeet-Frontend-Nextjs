import React from "react";
import ReviewFilter from "./ReviewFilter";
import ReviewHeader from "./ReviewHeader";
import Review from "./Review";

const ReviewPage = () => {
    return (
        <>
            <ReviewHeader title={"Dune"} bgImg={"/dune.png"} alt={"movie image"} />
            <ReviewFilter reviews={106} />
            <Review />
        </>
    );
};

export default ReviewPage;
