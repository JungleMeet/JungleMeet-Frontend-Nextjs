import Comment from "./Comment";
import React, { useState, useEffect } from "react";
import { getCommentsByCondition } from "@/utils/axiosCommentApi";
import { useRouter } from "next/router";
import ReviewFilter from "./ReviewFilter";
import ReviewHeader from "./ReviewHeader";
import { getMovieDetails } from "@/utils/axiosMovieApi";
import { Button, Flex } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { clearCollapsedArray } from "@/app/reducer/commentSlice";

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
    const comentsPerPage = 3;
    const [next, setNext] = useState(comentsPerPage);
    const dispatch=useDispatch()

    const handleMoreComments = () => setNext((current)=>current + comentsPerPage);
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await getCommentsByCondition(id, "createdAt", 9999, 0);
                const data: any = res.data;
                setComments(data.topComments);
                setReviews(data.length);
            } catch (err) {
                return err; 
            }
        };
        dispatch(clearCollapsedArray())
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

    return (
        <>
            <ReviewHeader
                resourceId={headerInfo.resourceId}
                poster={headerInfo.poster}
                title={headerInfo.title}
            />
            <ReviewFilter reviews={reviews} />
            <Comment comments={comments.slice(0,next)} />
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
