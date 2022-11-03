import { createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../store";

export const pageSlice = createSlice({
    name: "page",
    initialState: {
        currentPage: 1,
        currentPagePost: [],
        postsPerPage: 5,
        sortBy: 'createdAt',
        totalPosts: 0
    },
    reducers: {
        setTotalPosts: (state, {payload}) => {
            state.totalPosts = payload;
            console.log(state.totalPosts);
        },
        setCurrentPagePost: (state, {payload}) => {
            state.currentPagePost = payload;
            console.log(state.currentPagePost);

        },
        setCurrentPage: (state, {payload}) => {
            state.currentPage = payload;
            console.log(state.currentPage);
            
        },
        setSortBy: (state, {payload}) => {
            state.sortBy = payload;
            console.log(state.sortBy);

        },
        setPostsPerPage: (state, {payload})=> {
            state.postsPerPage = payload;
            console.log(state.postsPerPage);

        }
    }
});

export const { setTotalPosts, setCurrentPagePost, setCurrentPage, setSortBy, setPostsPerPage} = pageSlice.actions;

// export const changeCounter = (state: RootState) => state.counter.value;

export default pageSlice.reducer;
