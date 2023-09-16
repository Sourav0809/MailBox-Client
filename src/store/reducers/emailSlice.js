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
        }
    }
})


export default emailSlice.reducer;
export const { setSentEmails, setReceiveEmails } = emailSlice.actions