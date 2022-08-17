import React from "react";
import Navbar from "../components/Navbar/index";
import { Route, Routes } from "react-router-dom";
import Line from "../components/Line";
import LandingPage from "../components/Landing";
import LoginPage from "../components/Auth/Login/index";
import SignupPage from "../components/Auth/Signup/index";

const Routing = () => {
    return (
        <>
            <Navbar />
            <Line />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </>
    )
}

export default Routing;