import "./App.css";

import { useEffect } from "react";
import { validateUserAction } from "./store/actions/authAction";
import MyRoutes from "./Routes/MyRoutes";
import { useDispatch, useSelector } from "react-redux";
import PageLoader from "./components/UI/PageLoader";
import SideBar from "./components/SideBar/UI/SideBar";
import { initializeApp } from "firebase/app";
function App() {
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => state.auth);
  const { userDetails } = useSelector((state) => state.userDetails);

  const firebaseConfig = {
    apiKey: "AIzaSyAaz4g50KoBspQajmaWMRlkrw372P1mT0o",
    authDomain: "mailmingle-d24b1.firebaseapp.com",
    databaseURL:
      "https://mailmingle-d24b1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mailmingle-d24b1",
    storageBucket: "mailmingle-d24b1.appspot.com",
    messagingSenderId: "703970956449",
    appId: "1:703970956449:web:19a8b14466bd941f8d4ce0",
  };

  // Initialize Firebase with your Firebase configuration
  initializeApp(firebaseConfig);

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
