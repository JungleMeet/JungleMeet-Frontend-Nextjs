import { createSlice } from "@reduxjs/toolkit";


export const signupSlice = createSlice({
    name:"signup",
    initialState:{
        isSaved:false,
        data: undefined
    },
    reducers:{
        signupSuccess: (state,{payload}) =>{
            state.isSaved = true;    
            
            state.data = payload;
        
        },
        signupError: (state)=>{
            state.isSaved = false;
            state.data = undefined;
        },
    
    }  
})

export const { signupSuccess, signupError} = signupSlice.actions;

export default signupSlice.reducer;