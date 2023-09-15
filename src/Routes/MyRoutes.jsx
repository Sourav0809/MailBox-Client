import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../Pages/AuthPage";
import InboxPage from "../Pages/InboxPage";
import ComposePage from "../Pages/ComposePage";
import { useSelector } from "react-redux";
import UserProfilePage from "../Pages/UserProfilePage";
const MyRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { loader } = useSelector((state) => state.auth);
  console.log(loader);
  return (
    <Routes>
      {isAuthenticated ? (
        <>
          {/* <Route path="/" element={<InboxPage />} />
          <Route path="/inbox" element={<InboxPage />} />
          <Route path="/compose" element={<ComposePage />} /> */}
          <Route path="/userprofile" element={<UserProfilePage />} />
          <Route path="*" element={<InboxPage />} />
        </>
      ) : (
        <>
          <Route path="/" element={<AuthPage />} />
          <Route path="*" element={<AuthPage />} />
        </>
      )}
    </Routes>
  );
};

export default MyRoutes;
