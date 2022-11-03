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
        },
        setCurrentPagePost: (state, {payload}) => {
            state.currentPagePost = payload;
        },
        setCurrentPage: (state, {payload}) => {
            state.currentPage = payload;
            console.log(state.currentPage);
        },
        setSortBy: (state, {payload}) => {
            state.sortBy = payload;
        },
        setPostsPerPage: (state, {payload})=> {
            state.postsPerPage = payload;
        }
    }
});

export const { setTotalPosts, setCurrentPagePost, setCurrentPage, setSortBy, setPostsPerPage} = pageSlice.actions;

// export const changeCounter = (state: RootState) => state.counter.value;

export default pageSlice.reducer;
