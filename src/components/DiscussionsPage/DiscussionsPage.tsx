import React, { useEffect, useMemo } from "react";
import Discussion from "./Discussion";
import DiscussionHeader from "./DiscussionHeader";
import DiscussionFilter from "./DiscussionFilter";
// import { discussionsData } from "./discussionsData";
import { getPostsByCondition } from "@/utils/axiosPostApi";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setTotalPosts, setCurrentPagePost } from "@/app/reducer/pageSlice";

const DiscussionsPage = () => {
    const currentPage = useSelector((state: any) => state.page.currentPage);
    const currentPagePost = useSelector((state: any) => state.page.currentPagePost);
    const totalPosts = useSelector((state: any) => state.page.totalPosts);
    const postsPerPage = useSelector((state: any) => state.page.postsPerPage);
    const sortBy = useSelector((state: any) => state.page.sortBy);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await getPostsByCondition(postsPerPage, currentPage - 1, sortBy);
                const { data, length } = res.data;
                dispatch(setCurrentPagePost(data));
                dispatch(setTotalPosts(length));
                // console.log("discussionInfo", data);
            } catch (err) {
                return err;
            }
        };
        fetchPosts();
    }, [sortBy, currentPage]);

    // Get current posts
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    // const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    interface CurrentPagePostProps {
        _id: string;
        title: string;
        hashtag: string;
        bgImg: string;
        releaseDateRightFormat: string;
        author: {
            _id: string;
            name: string;
            avatar: string;
        };
        likeCount: number;
        viewNumber: number;
        commentCount: number;
        content: string;
        postId: string;
    }
    const currentPostsMemo = useMemo(
        () => (
            <>
                {currentPagePost?.map(
                    ({
                        _id,
                        title,
                        content,
                        releaseDateRightFormat,
                        hashtag,
                        bgImg,
                        author,
                        likeCount,
                        viewNumber,
                        commentCount,
                    }: CurrentPagePostProps) => (
                        <Discussion
                            key={_id}
                            postId={_id}
                            hashtag={hashtag}
                            src={bgImg}
                            title={title}
                            name={author}
                            date={releaseDateRightFormat}
                            like={likeCount}
                            views={viewNumber}
                            comments={commentCount}
                            description={content}
                        />
                    )
                )}
            </>
        ),
        [currentPagePost]
    );

    return (
        <>
            <DiscussionHeader />
            <DiscussionFilter />
            {currentPostsMemo}
            <Pagination totalPosts={totalPosts} postsPerPage={postsPerPage} />
        </>
    );
};

export default DiscussionsPage;
