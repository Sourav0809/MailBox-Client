import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../Pages/AuthPage";
import InboxPage from "../Pages/InboxPage";
import ComposePage from "../Pages/ComposePage";
import { useSelector } from "react-redux";
import UserProfilePage from "../Pages/UserProfilePage";
import ProfileViewPage from "../Pages/ProfileViewPage";
import SentBoxPage from "../Pages/SentBoxPage";
import InboxDetailPage from "../Pages/InboxDetailPage";
import SentBoxDetailPage from "../Pages/sentBoxDetailPage";
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
              <Route
                path="/inboxEmailDetails/:id"
                element={<InboxDetailPage />}
              />
              <Route path="/sent" element={<SentBoxPage />} />
              <Route
                path="/sentBoxEmailDetails/:id"
                element={<SentBoxDetailPage />}
              />
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
