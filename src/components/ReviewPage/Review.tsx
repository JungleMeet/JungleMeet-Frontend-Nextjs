import Comment from "./Comment";
import React, { useState, useEffect } from "react";
import { getCommentsByCondition } from "@/utils/axiosCommentApi";
import { useRouter } from "next/router";
import ReviewFilter from "./ReviewFilter";
import ReviewHeader from "./ReviewHeader";
import { getMovieDetails } from "@/utils/axiosMovieApi";

const Review = () => {
    const [comments, setComments] = useState([]);
    const [reviews, setReviews] = useState(0);
    const [headerInfo, setHeaderInfo] = useState([]);
    const router = useRouter();
    const { id }: any = router.query;

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await getCommentsByCondition(id, "createdAt", 9999, 0);
                const data: any = res.data;
                setComments(data.topComments);
                setReviews(data.length)
            } catch (err) {
                return err;
            }
        };
        fetchComments();
    }, []);

    useEffect(()=>{
        const fetchHeader = async()=>{
            try{
                const headerRes = await getMovieDetails(id);
                const headerData: any = headerRes.data;
                setHeaderInfo(headerData)
            }catch(err){
                return err
            };
        };
        fetchHeader();
    },[]);

    return (
        <>
            <ReviewHeader headerInfo={headerInfo}/>
            <ReviewFilter reviews={reviews} />
            <Comment comments={comments} />
        </>
    );
};

export default Review;
