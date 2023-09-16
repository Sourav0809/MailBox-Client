import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
    name: 'email',
    initialState: { sentEmails: [], receiveEmails: [] },
    reducers: {
        fetchSentEmails(state, action) {
            state.sentEmails = action.payload
        },

        fetchReceiveEmails(state, action) {
            state.receiveEmails = action.payload
        }
    }
})


export default emailSlice
export const { fetchSentEmails, fetchReceiveEmails } = emailSlice.reducer