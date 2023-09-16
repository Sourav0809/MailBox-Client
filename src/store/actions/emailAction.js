import axios from "axios";
import { getDataLink } from "../../API/getDataLink";
import formatEmail from "../../functions/formatEmail";
import { setSentEmails, setReceiveEmails } from "../reducers/emailSlice";

/* -------------------------------------------------------------------------- */
/*                           FOR FETCHING THE INBOX                           */
/* -------------------------------------------------------------------------- */

export const fetchInboxAction = () => {
    return async (dispatch, getState) => {
        const { email } = getState().auth
        try {
            const { data } = await axios.get(`${getDataLink}/${formatEmail(email)}/inbox.json`)
            if (data) {
                const newObjArr = Object.keys(data).map((id) => {
                    return {
                        id,
                        ...data[id],
                    }
                });
                dispatch(setReceiveEmails(newObjArr))

            }

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

            if (data) {
                const newObjArr = Object.keys(data).map((id) => {
                    return {
                        id,
                        ...data[id],
                    }
                });
                dispatch(setSentEmails(newObjArr))

            }

        } catch (error) {
            console.log(error);
        }
    }
}