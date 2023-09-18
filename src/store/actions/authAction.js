import { hideLoader, setAuthenticated, userLogOut } from "../reducers/authSlice";
import axios from "axios";
import { verifyUserLink } from "../../API/authPoints";
import toast from "react-hot-toast";
import { removeUserDetails } from "../reducers/userProfileSlice";
import { clearEmails } from "../reducers/emailSlice";
export const setAuthAction = setAuthenticated
import { fetchInboxAction, fetchSentAction } from "./emailAction";

//WHEN USER LOG OUT 
export const userLogOutAction = () => {
    return (dispatch, getState) => {
        dispatch(userLogOut())
        dispatch(removeUserDetails())
        dispatch(clearEmails())
    }
}


export const validateUserAction = () => {
    return async (dispatch) => {

        const idToken = localStorage.getItem('idToken')

        try {
            if (idToken) {
                const { data } = await axios.post(verifyUserLink, { idToken: idToken })
                dispatch(setAuthAction({ idToken: idToken, email: data.users[0].email }))
                dispatch(fetchInboxAction()),
                    dispatch(fetchSentAction())

            }
        } catch (error) {
            toast.error('User Validation Failed ! Log in Again')
        }
        dispatch(hideLoader())

    }


}