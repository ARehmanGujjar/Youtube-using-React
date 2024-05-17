import { configureStore } from "@reduxjs/toolkit";
import AppSlicer from "./AppSlicer";
import SearchSlice from "./SearchSlice";

const Store=configureStore({
    reducer:{
        app:AppSlicer,
        search:SearchSlice,
    }

});
export default Store;