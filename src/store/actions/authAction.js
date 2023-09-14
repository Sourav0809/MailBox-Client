import { hideLoader, setAuthenticated, userLogOut } from "../reducers/authSlice";
import axios from "axios";
import { verifyUserLink } from "../../API/authPoints";
import toast from "react-hot-toast";


export const setAuthAction = setAuthenticated
export const userLogOutAction = userLogOut


export const validateUserAction = () => {
    return async (dispatch) => {

        const idToken = localStorage.getItem('idToken')
        try {
            if (idToken) {
                const { data } = await axios.post(verifyUserLink, { idToken: idToken })
                dispatch(setAuthAction(idToken))
            }
        } catch (error) {
            toast.error('User Validation Failed')
        }
        dispatch(hideLoader())

    }


}