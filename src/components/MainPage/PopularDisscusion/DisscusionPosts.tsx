import PostCardInfoProps from "./PostCardInfo";
import React from "react";

const postList = [
    {
        id: 111,
        title: "Is the Dune worth watching?",
        src: "/Dune.jpg",
        name: "John Doe",
        date: new Date("2022-10-16T19:01:27Z"),
        like: 100,
        views: 100,
        comments: 100,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
        id: 222,
        title: "Is the Dune worth watching?",
        src: "/Dune.jpg",
        name: "John Doe",
        date: new Date("2022-10-16T19:01:27Z"),
        like: 100,
        views: 100,
        comments: 100,
        description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. Anunknown printer took a galley of type and scrambled it.Lorem Ipsum is simply dummytext of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type",
    },
    {
        id: 333,
        title: "Is the Dune worth watching?",
        src: "/Dune.jpg",
        name: "John Doe",
        date: new Date("2022-10-16T19:01:27Z"),
        like: 100,
        views: 100,
        comments: 100,
        description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. Anunknown printer took a galley of type and scrambled it.Lorem Ipsum is simply dummytext of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type",
    },
];

const DisscusionPosts = () => {
    return (
        <>
            {postList.map((info) => {
                return (
                    <PostCardInfoProps
                        key={info.id}
                        src={info.src}
                        title={info.title}
                        name={info.name}
                        date={info.date}
                        like={info.like}
                        views={info.views}
                        comments={info.comments}
                        description={info.description}
                    />
                );
            })}
        </>
    );
};

export default DisscusionPosts;
