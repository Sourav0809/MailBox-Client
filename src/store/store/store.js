import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducers/authSlice";
import userProfileSlice from "../reducers/userProfileSlice";
import emailSlice from "../reducers/emailSlice";


const store = configureStore({
    reducer: {
        auth: authSlice,
        userDetails: userProfileSlice,
        allEmails: emailSlice,
    }
})

export default store