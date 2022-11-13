import React, { useState, useEffect } from "react";
import commentData from "./commentData.json";
import Comment from "./Comment";
import { ICommentProps } from "./Comment";

function ReviewPageTest() {
    const [comments, setComments] = useState<ICommentProps[]>([]);
    useEffect(() => {
        setComments(commentData);
    }, []);
    return <Comment comments={comments} />;
}

export default ReviewPageTest;
