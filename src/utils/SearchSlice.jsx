import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:'search',
    initialState:{

    },
    reducers:{
        cachedResults:(state,action)=>{
            state={...action.payload,...state};
        }
    }
})
export const {cachedResults}=searchSlice.actions;
export default searchSlice.reducer;