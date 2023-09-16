import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authslice',
    initialState: { isAuthenticated: false, idToken: '', loader: true, email: '' },
    reducers: {
        setAuthenticated(state, action) {
            state.isAuthenticated = true
            state.idToken = action.payload.idToken
            state.email = action.payload.email
            localStorage.setItem('idToken', action.payload.idToken)

        },
        userLogOut(state) {
            state.isAuthenticated = false
            state.idToken = ''
            localStorage.removeItem('idToken')
        },

        hideLoader(state) {
            state.loader = false
        }

    }
})

export default authSlice.reducer
export const { setAuthenticated, userLogOut, hideLoader } = authSlice.actions