import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducers/authSlice";
import userProfileSlice from "../reducers/userProfileSlice";



const store = configureStore({
    reducer: {
        auth: authSlice,
        userDetails: userProfileSlice,
    }
})

export default store