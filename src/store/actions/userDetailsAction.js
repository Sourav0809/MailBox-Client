import { getDataLink } from "../../API/getDataLink"
import axios from "axios"
import formatEmail from "../../functions/formatEmail"
import { hideLoader, setUserDetails } from "../reducers/userProfileSlice"
import { getAccDetailsLink } from "../../API/getDataLink"
export const userDetailsSetAction = () => {
    return async (dispatch, getState) => {
        const { email, idToken } = getState().auth

        try {
            if (email) {
                const { data } = await axios.get(`${getDataLink}/${formatEmail(email)}/userDetails.json`)
                if (data) {
                    const newObj = Object.values(data)[0]
                    const res = await axios.post(getAccDetailsLink, { idToken: idToken })

                    if (res) {
                        const newData = {
                            name: newObj.name,
                            email: newObj.email,
                            number: newObj.number,
                            emailVerified: res.data.users[0].emailVerified
                        }
                        dispatch(setUserDetails(newData))

                    }

                }
            }

        } catch (error) {
            console.log(error);
        }
        dispatch(hideLoader())
    }
}