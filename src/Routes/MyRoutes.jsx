import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../Pages/AuthPage";
import DashBoardPage from "../Pages/DashBoardPage";
import { useSelector } from "react-redux";
const MyRoutes = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    return (
        <Routes>
            {isAuthenticated ? (
                <>
                    <Route path="/" element={<DashBoardPage />} />
                    <Route path="/dashboard" element={<DashBoardPage />} />
                    <Route path="*" element={<DashBoardPage />} />
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
