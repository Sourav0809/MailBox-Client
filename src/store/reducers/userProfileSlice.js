import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: { userDetails: "" },
    reducers: {
        setUserDetails(state, action) {
            state.userDetails = action.payload
        },
        removeUserDetails(state) {
            state.userDetails = ""
        }
    }


})


export default userProfileSlice
export const { setUserDetails, removeUserDetails } = userProfileSlice.actions 