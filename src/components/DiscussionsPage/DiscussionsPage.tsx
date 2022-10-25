import React, { useEffect, useMemo, useState } from "react";
import Discussion from "./Discussion";
import { discussionsDate } from "./discussionsData";
import Pagination from "./Pagination";

const DiscussionsPage = () => {
    const [posts, setPosts] = useState(discussionsDate);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
        return setPosts(discussionsDate);
    });

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = discussionsDate.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const currentPostsMemo = useMemo(
        () => (
            <>
                {currentPosts.map(({ id, ...rest }) => (
                    <Discussion key={id} {...rest} />
                ))}
            </>
        ),
        [discussionsDate]
    );

    return (
        <>
            {currentPostsMemo}
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </>
    );
};

export default DiscussionsPage;
