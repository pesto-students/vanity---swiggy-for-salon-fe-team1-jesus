

import React from "react";
import Navbar from "../components/Navbar/index.jsx";
import { Route, Routes } from "react-router-dom";
import Line from "../components/Line.jsx";
import LandingPage from "../components/Landing/index.jsx";
import LoginPage from "../components/Auth/Login/index.jsx";
import SignupPage from "../components/Auth/Signup/index.jsx";
import DashboardPage from "../components/Dashboard/index.jsx";
import SalonDetails from "../components/Salon/index.jsx";
import AppointmentPage from "../components/Appointment/index.jsx";
import AppointmentConfirmation from "../components/Confirmation/index.jsx";
import Profile from "../components/Profile/index.jsx";

const Routing = () => {
    return (
        <>
            <Navbar />
            <Line />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/salon/:id" element={<SalonDetails />} />
                <Route path="/appointments" element={<AppointmentPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/appointmentconfirmation" element={<AppointmentConfirmation />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    )
}

export default Routing;