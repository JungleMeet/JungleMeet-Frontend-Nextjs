import { createSlice } from "@reduxjs/toolkit";

export const modalSlice=createSlice({
    name: "modal",
    initialState:{
        isModalOpen:false,
        videoLink:""
    },
    reducers:{
        openMovieTrailerModel: (state)=>{
            state.isModalOpen=true;
        },
        closeMovieTrailerModel:(state)=>{
            state.isModalOpen=false
        },
        setVideoAddAndOpenModal:(state,{payload})=>{
            state.videoLink=payload,
            state.isModalOpen=true;
        }
    }
})

export const {openMovieTrailerModel, closeMovieTrailerModel, setVideoAddAndOpenModal }=modalSlice.actions

export default modalSlice.reducer