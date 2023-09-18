import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
    name: 'email',
    initialState: { sentEmails: [], receiveEmails: [] },
    reducers: {
        setSentEmails(state, action) {
            state.sentEmails = action.payload
        },

        setReceiveEmails(state, action) {
            state.receiveEmails = action.payload
        },
        clearEmails(state) {
            state.receiveEmails = []
            state.sentEmails = []
        }

    }
})


export default emailSlice.reducer;
export const { setSentEmails, setReceiveEmails, clearEmails } = emailSlice.actions