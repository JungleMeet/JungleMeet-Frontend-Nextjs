import { Box, Grid, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { getCommentsByCondition } from "@/utils/axiosCommentApi";
import Comment from "../../ReviewPage/Comment";
import { useRouter } from "next/router";

interface IDiscussionsDetailCommentsProps {
    isNewCommentSubmitted: boolean;
    setIsNewCommentSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const DiscussionsDetailComments = ({
    isNewCommentSubmitted,
    setIsNewCommentSubmitted,
}: IDiscussionsDetailCommentsProps) => {
    const [postComment, setPostComment] = useState([]);
    const [length, setLength] = useState(0);
    const commentsPerPage = 10;
    const [commentNum, setCommentNum] = useState(commentsPerPage);
    const [newComment, setNewComment] = useState(true);
    const handleMoreComments = () => setCommentNum(commentNum + commentsPerPage);
    const router = useRouter();
    const { id }: any = router.query;

    useEffect(() => {
        const getCommentDetail = async () => {
            try {
                const res = await getCommentsByCondition(id, "createdAt", 9999, 0);
                const data: any = res.data;

                setLength(data.topComments.length);

                setPostComment(data.topComments);
                setNewComment(false);
                setIsNewCommentSubmitted(false);
            } catch (err) {
                return err;
            }
        };
        (isNewCommentSubmitted || newComment) && getCommentDetail();
    }, [id, newComment, isNewCommentSubmitted]);

    return (
        <Grid>
            <Box mt="40px">
                <Comment comments={postComment.slice(0, commentNum)} setNewComment={setNewComment} />
            </Box>
            <Flex justify={"center"} alignContent={"center"} pt="36px">
                {commentNum < length && (
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
            </Flex>
        </Grid>
    );
};

export default DiscussionsDetailComments;
