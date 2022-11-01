import React, { useEffect, useMemo, useState } from "react";
import Discussion from "./Discussion";
import { discussionsData } from "./discussionsData";
import Pagination from "./Pagination";

const DiscussionsPage = () => {
    const [posts, setPosts] = useState(discussionsData);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
        return setPosts(discussionsData);
    });

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = discussionsData.slice(indexOfFirstPost, indexOfLastPost);

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
        [discussionsData]
    );

    return (
        <>
            {currentPostsMemo}
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </>
    );
};

export default DiscussionsPage;
