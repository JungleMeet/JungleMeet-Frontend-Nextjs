import { createSlice } from "@reduxjs/toolkit";
import { toggleElement } from "@/utils/toggleElement";

interface CommentState{
    hiddenIdArray:string[]
}

const initialState:CommentState={hiddenIdArray:[]}

export const CommentSlice=createSlice({
    name:"comments",
    initialState,

    reducers:{
        toggleHideChildrenComment:(state,{payload}:{payload:string})=>{
            state.hiddenIdArray=toggleElement({element:payload, array:state.hiddenIdArray})
        },
        clearCollapsedArray:(state)=>{
            return {...initialState}
        }
    }
})

export const {toggleHideChildrenComment,clearCollapsedArray}=CommentSlice.actions

export default CommentSlice.reducer;