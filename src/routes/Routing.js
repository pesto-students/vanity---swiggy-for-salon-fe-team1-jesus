import React from "react";
import Navbar from "../components/Navbar/index";
import { Route, Routes } from "react-router-dom";
import Line from "../components/Line";
import LandingPage from "../components/Landing";
import LoginPage from "../components/Auth/Login/index";
import SignupPage from "../components/Auth/Signup/index";
import DashboardPage from "../components/Dashboard";
import SalonDetails from "../components/Salon";
import AppointmentPage from "../components/Appointment";

const Routing = () => {
    return (
        <>
            <Navbar />
            <Line />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/salon/:id" element={<SalonDetails/>}/>
                <Route path="/appointments" element={<AppointmentPage/>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={<DashboardPage/>} />
            </Routes>
        </>
    )
}

export default Routing;