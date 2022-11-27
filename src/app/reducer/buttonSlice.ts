import { createSlice } from "@reduxjs/toolkit";

export const buttonSlice=createSlice({
    name: "button",
    initialState:{
        likeState:false,
        followState:false,
        like:0,

    },
    reducers:{
        clickTheLike: (state)=>{
            state.likeState = !state.likeState;

        },
        clickTheFollow: (state)=>{
            state.followState = !state.followState;
           
        },
        theLikeNum: (state)=>{
            if(state.likeState){
                state.like = state.like+1;
            }else{
                state.like = state.like-1;
            }

        },
        likeClicked: (state) =>{
            state.likeState = true;
         
             
        },
        followClicked: (state) =>{
            state.followState = true;
          
             
        },
        setLikeNum:(state,{payload})=>{
            state.like = payload;
        }
    }
})

export const {clickTheLike,clickTheFollow,theLikeNum, likeClicked,followClicked,setLikeNum }=buttonSlice.actions

export default buttonSlice.reducer