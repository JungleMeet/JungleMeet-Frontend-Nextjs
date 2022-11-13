import React from "react";
import { Text } from "@chakra-ui/react";
import commentData from "./commentData";
import Comment from "./Comment";
function ReviewPageTest() {
    return (
        <>
            {commentData.map((comment) => {
                return (
                    <div key={comment._id}>
                        <Text>{comment.content}</Text>
                        <Comment key={comment._id} comment={comment} />
                    </div>
                );
            })}
        </>
    );
}

export default ReviewPageTest;
