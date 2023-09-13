import "./App.css";
import { verifyUserLink } from "./API/authPoints";
import axios from "axios";
import { useEffect } from "react";
import { setAuthAction } from "./store/actions/authAction";
import MyRoutes from "./Routes/MyRoutes";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch()

  /* -------------------------------------------------------------------------- */
  /*                          IF USER REFRESH THE PAGE                          */
  /* -------------------------------------------------------------------------- */
  const idToken = localStorage.getItem('idToken')
  useEffect(() => {
    const validateUser = async (idToken) => {

      try {
        if (idToken) {
          const { data } = await axios.post(verifyUserLink, { idToken: idToken })
          dispatch(setAuthAction(idToken))

        }
      } catch (error) {
        console.log(error);
      }
    }


    validateUser(idToken)
  }, [])





  return (
    <>
      <MyRoutes />
    </>
  );
}

export default App;
