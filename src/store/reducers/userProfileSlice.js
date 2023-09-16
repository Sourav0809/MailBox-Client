import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: { userDetails: "", loader: true },
    reducers: {
        setUserDetails(state, action) {
            state.userDetails = action.payload

        },
        removeUserDetails(state) {
            state.userDetails = ""
        },
        hideLoader(state) {
            state.loader = false
        }

    }


})


export default userProfileSlice.reducer
export const { setUserDetails, removeUserDetails, hideLoader } = userProfileSlice.actions 