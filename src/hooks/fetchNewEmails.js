import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { fetchInboxAction } from "../store/actions/emailAction";
const fetchNewEmails = () => {
    const dispatch = useDispatch()

    return useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch(fetchInboxAction());
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);


}



export default fetchNewEmails