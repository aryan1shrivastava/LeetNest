import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./page/HomePage.jsx";
import LoginPage from "./page/LoginPage.jsx";
import SignUpPage from "./page/SignUpPage.jsx";
import ProfilePage from "./page/ProfilePage.jsx";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
