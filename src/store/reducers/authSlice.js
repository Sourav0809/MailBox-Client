import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authslice',
    initialState: { isAuthenticated: false, idToken: '' },
    reducers: {
        setAuthenticated(state, action) {
            state.isAuthenticated = true
            state.idToken = action.payload
            localStorage.setItem('idToken', action.payload)
        },
        userLogOut(state) {
            state.isAuthenticated = "false"
            state.idToken = ""
        }
    }
})

export default authSlice.reducer
export const { setAuthenticated, userLogOut } = authSlice.actions