

import React from "react";
import Navbar from "../components/Navbar/index.jsx";
import { Route, Routes } from "react-router-dom";
import Line from "../components/Line.jsx";
import LandingPage from "../pages/Landing/index.jsx";
import LoginPage from "../components/Auth/Login/index.jsx";
import SignupPage from "../components/Auth/Signup/index.jsx";
import AppointmentPage from "../components/Appointment/index.jsx";
import AppointmentConfirmation from "../components/Confirmation/index.jsx";
import Profile from "../components/Profile/index.jsx";
import DashboardPage from "../pages/Dashboard/index.jsx";
import SalonPage from "../pages/Salon/index.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import About from "../components/About/index.jsx";
import FAQs from "../components/FAQs/index.jsx";
import AllBookings from "../components/Profile/AllBookings.jsx"

const Routing = () => {
    return (
        <>
            <Navbar />
            <Line />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/salon/:id" element={<SalonPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route element={<PrivateRoutes />}>
                    <Route path="/appointments" exact element={<AppointmentPage />} />
                    <Route path="/appointmentconfirmation" exact element={<AppointmentConfirmation />} />
                    <Route path="/profile/allbookings" exact element={<AllBookings />} />
                    <Route path="/profile/:user" exact element={<Profile />} />
                </Route>
            </Routes>
        </>
    )
}

export default Routing;