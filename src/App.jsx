import "./App.css";

import { useEffect } from "react";
import { validateUserAction } from "./store/actions/authAction";
import MyRoutes from "./Routes/MyRoutes";
import { useDispatch, useSelector } from "react-redux";
import PageLoader from "./components/UI/PageLoader";
import SideBar from "./components/SideBar/UI/SideBar";
function App() {
  const dispatch = useDispatch();
  const { loader, isAuthenticated } = useSelector((state) => state.auth);

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
          {isAuthenticated ? (
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
