import PostCardInfoProps from "./ReviewInfo";
import React from "react";

const reviewList = [
    {
        id: 1,
        name: "Melissatz",
        date: new Date("2022-12-21T19:01:27Z"),
        helpful: 100,
        views: 100,
        comments: 100,
        description: "I often don't understand the common people's definition of epic. ",
    },
    {
        id: 2,
        name: "Jackatz",
        date: new Date("2022-08-18T19:01:27Z"),
        helpful: 80,
        views: 78,
        comments: 18,
        description:
      "Watching Dune now is like watching 2001: A Space Odyssey in 1968.",
    },
    {
        id: 3,
        name: "Justinnatz",
        date: new Date("2022-04-16T19:01:27Z"),
        helpful: 60,
        views: 25,
        comments: 6,
        description:
        "I feel like I watched a two and a half hour trailer."
    },
];

const ReviewPosts = () => {
    return (
        <>
            {reviewList.map((info) => {
                return (
                    <PostCardInfoProps
                        key={info.id}
                        name={info.name}
                        date={info.date}
                        helpful={info.helpful}
                        comments={info.comments}
                        description={info.description}
                    />
                );
            })}
        </>
    );
};

export default ReviewPosts;