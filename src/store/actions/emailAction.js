import axios from "axios";
import { getDataLink } from "../../API/getDataLink";
import formatEmail from "../../functions/formatEmail";

/* -------------------------------------------------------------------------- */
/*                           FOR FETCHING THE INBOX                           */
/* -------------------------------------------------------------------------- */

export const fetchInboxAction = () => {
    return async (dispatch, getState) => {
        const { email } = getState().auth
        try {
            const { data } = await axios.get(`${getDataLink}/${formatEmail(email)}/inbox.json`)

        } catch (error) {
            console.log(error);
        }
    }
}


/* -------------------------------------------------------------------------- */
/*                          FOR FETCHING THE SENTBOX                          */
/* -------------------------------------------------------------------------- */

export const fetchSentAction = () => {
    return async (dispatch, getState) => {
        const { email } = getState().auth
        try {
            const { data } = await axios.get(`${getDataLink}/${formatEmail(email)}/sent.json`)

        } catch (error) {
            console.log(error);
        }
    }
}