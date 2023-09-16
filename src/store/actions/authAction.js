import { hideLoader, setAuthenticated, userLogOut } from "../reducers/authSlice";
import axios from "axios";
import { verifyUserLink } from "../../API/authPoints";
import toast from "react-hot-toast";
import { removeUserDetails } from "../reducers/userProfileSlice";

export const setAuthAction = setAuthenticated


//WHEN USER LOG OUT 
export const userLogOutAction = () => {
    return (dispatch, getState) => {
        dispatch(userLogOut())
        dispatch(removeUserDetails())
    }
}


export const validateUserAction = () => {
    return async (dispatch) => {

        const idToken = localStorage.getItem('idToken')
        try {
            if (idToken) {
                const { data } = await axios.post(verifyUserLink, { idToken: idToken })

                dispatch(setAuthAction({ idToken: idToken, email: data.users[0].email }))
            }
        } catch (error) {
            toast.error('User Validation Failed ! Log in Again')
        }
        dispatch(hideLoader())

    }


}