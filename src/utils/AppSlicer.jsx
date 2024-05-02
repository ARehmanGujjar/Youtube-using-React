import { createSlice } from "@reduxjs/toolkit";

const AppSlicer=createSlice({
    name:'app',
    initialState:{
        isMenueOpen:true,
    },
    reducers:{
       toggleMenue:(state)=>{
        state.isMenueOpen= !state.isMenueOpen
       },
       closeMenue:(state)=>{
        state.isMenueOpen=false;
       }
    }
})
export const{toggleMenue,closeMenue}=AppSlicer.actions;
export default AppSlicer.reducer;