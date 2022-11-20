import Comment from "./Comment";
import React, { useState, useEffect } from "react";
import { getCommentsByCondition } from "@/utils/axiosCommentApi";
import { useRouter } from "next/router";
import ReviewFilter from "./ReviewFilter";
import ReviewHeader from "./ReviewHeader";
import { getMovieDetails } from "@/utils/axiosMovieApi";
import { Button, Flex } from "@chakra-ui/react";
import { isEmpty } from "lodash";
import { ICommentProps } from "@/components/ReviewPage/Comment";

interface IReviewProps {
    resourceId: number;
    poster: string;
    title: string;
}

const Review = () => {
    const [comments, setComments] = useState([]);
    const [reviews, setReviews] = useState(0);
    const [headerInfo, setHeaderInfo] = useState<IReviewProps>({
        resourceId: 0,
        poster: "",
        title: "",
    });
    const router = useRouter();
    const { id }: any = router.query;
    const comentsPerPage = 5;
    const [next, setNext] = useState(comentsPerPage);
    const [newComment, setNewComment] = useState<ICommentProps>();
    const handleMoreComments = () => setNext(next + comentsPerPage);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await getCommentsByCondition(id, "createdAt", 9999, 0);
                const data: any = res.data;
                console.log(data.topComments);
                setComments(data.topComments);
                setReviews(data.length);
            } catch (err) {
                return err;
            }
        };
        fetchComments();
    }, []);

    useEffect(() => {
        const fetchHeader = async () => {
            try {
                const headerRes = await getMovieDetails(id);
                const headerData: any = headerRes.data;
                setHeaderInfo(headerData);
            } catch (err) {
                return err;
            }
        };
        fetchHeader();
    }, []);

    useEffect(() => {
        if (!isEmpty(newComment)) {
            let isFound = false;
            const addNewComment = (id: string, array: ICommentProps[]) => {
                for (let i = 0; i < array.length; i++) {
                    if (isFound) break;
                    if (array[i]._id === id) {
                        // found the element
                        array[i].children.unshift(newComment);
                        isFound = true;
                        break;
                    }
                    if (array[i].children[0]?._id) {
                        addNewComment(id, array[i].children);
                    }
                }
            };
            // make a deep clone of the current comments
            // addNewComment will perform a recursive search and add new element to children
            // setComments
            const commentsClone = JSON.parse(JSON.stringify(comments));
            addNewComment(newComment.parentCommentId, commentsClone);
            setComments(commentsClone);
        }
    }, [newComment]);

    return (
        <>
            <ReviewHeader
                resourceId={headerInfo.resourceId}
                poster={headerInfo.poster}
                title={headerInfo.title}
            />
            <ReviewFilter reviews={reviews} />
            <Comment comments={comments.slice(0, next)} setNewComment={setNewComment} />
            <Flex justify={"center"} alignContent={"center"} pt="36px">
                {next < reviews && (
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
        </>
    );
};

export default Review;
