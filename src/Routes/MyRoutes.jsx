import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../Pages/AuthPage";
import InboxPage from "../Pages/InboxPage";
import ComposePage from "../Pages/ComposePage";
import { useSelector } from "react-redux";
import UserProfilePage from "../Pages/UserProfilePage";
import ProfileViewPage from "../Pages/ProfileViewPage";
const MyRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { userDetails } = useSelector((state) => state.userDetails);

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          {userDetails ? (
            <>
              <Route path="/" element={<InboxPage />} />
              <Route path="/inbox" element={<InboxPage />} />
              <Route path="/compose" element={<ComposePage />} />
              <Route path="/profile" element={<ProfileViewPage />} />
              <Route path="*" element={<InboxPage />} />
            </>
          ) : (
            <>
              <Route path="/" element={<UserProfilePage />} />
              <Route path="/userprofile" element={<UserProfilePage />} />
              <Route path="*" element={<UserProfilePage />} />
            </>
          )}
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
