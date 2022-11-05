import React from "react";
import ReviewFilter from "./ReviewFilter";
import ReviewHeader from "./ReviewHeader";
import Review from "./Review";

const ReviewPage = () => {
    return (
        <>
            <ReviewHeader title={"Dune"} bgImg={"/dune.jpg"} alt={"alt"} />
            <ReviewFilter reviews={109} />
            <Review />
        </>
    );
};

export default ReviewPage;
