import { createSlice } from "@reduxjs/toolkit";

const initialPostState={
    postId:"",
    postTitle:"",
    hashtag:"",
    hashtags:[],
    content:"",
    bgImg:"",
}

export const postEditingSlice=createSlice({
    name:"postEditing",

    initialState:initialPostState,
    reducers:{
        getCurrentPostData:(state, {payload})=>{
            const {postId, postTitle,hashtag,hashtags,content,bgImg}=payload
            state.postId=postId;
            state.postTitle=postTitle;
            state.hashtag=hashtag;
            state.hashtags=hashtags;
            state.content=content;
            state.bgImg=bgImg;
        },

        resetPostData:()=>{
            return {...initialPostState}
        },

    },
})

export const {getCurrentPostData,resetPostData}=postEditingSlice.actions

export default postEditingSlice.reducer