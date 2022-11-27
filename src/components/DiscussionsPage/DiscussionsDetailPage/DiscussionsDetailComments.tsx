import { Box, Grid, Button } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { getCommentsByCondition } from "@/utils/axiosCommentApi";
import DiscussionsCommentAvatar from "./DiscussionsCommentAvatar";
import { useRouter } from "next/router";

const DiscussionsDetailComments = () => {
    const [postComment, setPostComment] = useState([]);
    const [length, setLength] = useState(0);
    const comentsPerPage = 10;
    const [pageNum, setPageNum] = useState(0);
    const handleMoreComments = () => setPageNum(pageNum + 1);
    const router = useRouter();
    const { id }: any = router.query;

    useEffect(() => {
        const getCommentDetail = async () => {
            try {
                const res = await getCommentsByCondition(id, "createdAt", 10, pageNum);
                const data: any = res.data;

                setLength(data.topComments.length);
                setPostComment(data.topComments);
            } catch (err) {
                return err;
            }
        };
        getCommentDetail();
    }, [id]);

    return (
        <Grid>
            <Box mt="40px">
                <DiscussionsCommentAvatar comments={postComment.slice(0, length)} />
            </Box>
            {comentsPerPage < length && (
                <Button
                    bg="rose.700"
                    borderRadius="5px"
                    color="#fff"
                    pt="5px"
                    pb="5px"
                    pl="45px"
                    pr="45px"
                    fontSize={"text4"}
                    lineHeight="lh28"
                    fontWeight="600"
                    onClick={handleMoreComments}
                >
          Load more
                </Button>
            )}
        </Grid>
    );
};

export default DiscussionsDetailComments;
