import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { getCommentsByCondition } from "@/utils/axiosCommentApi";

import DiscussionsCommentAvatar from "./DiscussionsCommentAvatar";

const DiscussionsDetailComments = ({ postId }: any) => {
    const [postComment, setPostComment] = useState([]);
    const [length, setLength] = useState(0);

    useEffect(() => {
        const getCommentDetail = async () => {
            try {
                const res = await getCommentsByCondition(postId, "createdAt", 9999, 0);
                const data: any = res.data;

                setLength(data.topComments.length);
                setPostComment(data.topComments);
            } catch (err) {
                console.log(err);
            }
        };
        getCommentDetail();
    }, []);

    return (
        <Grid>
            <Box mt="40px">
                <DiscussionsCommentAvatar comments={postComment.slice(0, length)} />
            </Box>
        </Grid>
    );
};

export default DiscussionsDetailComments;
