import axios from "axios";
import { getDataLink } from "../../API/getDataLink";
import formatEmail from "../../functions/formatEmail";
import { setSentEmails, setReceiveEmails } from "../reducers/emailSlice";
import { postLink } from "../../API/postLink";
import toast from "react-hot-toast";
/* -------------------------------------------------------------------------- */
/*                           FOR FETCHING THE INBOX                           */
/* -------------------------------------------------------------------------- */

export const fetchInboxAction = () => {
    return async (dispatch, getState) => {
        const { email } = getState().auth
        try {
            const { data } = await axios.get(`${getDataLink}/${formatEmail(email)}/inbox.json`)
            if (data) {
                let newObjArr = Object.keys(data).map((id) => {
                    return {
                        id,
                        ...data[id],
                    }
                });

                dispatch(setReceiveEmails(newObjArr.reverse()))

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
                let newObjArr = Object.keys(data).map((id) => {
                    return {
                        id,
                        ...data[id],
                    }
                });

                dispatch(setSentEmails(newObjArr.reverse()))

            }

        } catch (error) {
            console.log(error);
        }
    }
}



/* -------------------------------------------------------------------------- */
/*          FOR STORING THE INBOX EMAILS INTO FIREBASE & REDUX STORE          */
/* -------------------------------------------------------------------------- */

export const storeEmailAction = (receiverEmail, senderEmail, submitedVal) => {
    return async (dispatch, getState) => {
        // Create an array of promises for the two API calls
        const inboxPromise = axios.post(
            `${postLink}/${formatEmail(receiverEmail)}/inbox.json`,
            submitedVal
        );
        const sentPromise = axios.post(
            `${postLink}/${formatEmail(senderEmail)}/sent.json`,
            submitedVal
        );

        Promise.all([inboxPromise, sentPromise])
            .then(([inboxResponse, sentResponse]) => {
                if (inboxResponse.data) {
                    const newEmail = { id: inboxResponse.data.name, ...submitedVal }
                    const OldEmails = getState().allEmails.receiveEmails
                    dispatch(setReceiveEmails([newEmail, ...OldEmails]))
                }
                if (sentResponse.data) {
                    const newSentEmail = { id: inboxResponse.data.name, ...submitedVal }
                    const OldSentEmails = getState().allEmails.sentEmails
                    dispatch(setSentEmails([newSentEmail, ...OldSentEmails]))
                }

            })
            .catch((error) => {
                toast.error("Error While Sending Email");
                console.log(error);
            });

    }
}