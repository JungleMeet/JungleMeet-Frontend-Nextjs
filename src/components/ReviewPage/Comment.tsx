// import { Text } from "@chakra-ui/react";
// import commentData from "./CommentData";
// import { useState } from "react";

function Comment({ comment }) {
    const nestedComments = commentData.map((comment) => {
        return comment.children.map((item) => {
            console.log(item.content);
            return <Comment key={item._id} comment={comment} />;
        });
    });

    return (
        <>
            <div style={{ marginLeft: "25px", marginTop: "10px" }}>
                {/* <div>{comment.content}</div> */}
                {nestedComments}
            </div>
        </>
    );
}

export default Comment;
