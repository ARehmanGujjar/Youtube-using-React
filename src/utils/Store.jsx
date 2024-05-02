import { configureStore } from "@reduxjs/toolkit";
import AppSlicer from "./AppSlicer";

const Store=configureStore({
    reducer:{
        app:AppSlicer,
    }

});
export default Store;