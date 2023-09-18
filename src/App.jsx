import "./App.css";

import { useEffect } from "react";
import { validateUserAction } from "./store/actions/authAction";
import MyRoutes from "./Routes/MyRoutes";
import { useDispatch, useSelector } from "react-redux";
import PageLoader from "./components/UI/PageLoader";
import SideBar from "./components/SideBar/UI/SideBar";
import { fetchInboxAction, fetchSentAction } from "./store/actions/emailAction";
function App() {
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => state.auth);
  const { userDetails } = useSelector((state) => state.userDetails);

  /* -------------------------------------------------------------------------- */
  /*                          IF USER REFRESH THE PAGE                          */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    dispatch(validateUserAction());
  }, []);

  return (
    <>
      {loader ? (
        <PageLoader />
      ) : (
        <>
          {userDetails ? (
            <>
              <SideBar />
              <MyRoutes />
            </>
          ) : (
            <MyRoutes />
          )}
        </>
      )}
    </>
  );
}

export default App;
