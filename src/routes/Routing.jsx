import React from "react";
import Navbar from "../components/Navbar/index";
import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing/index";
import Line from "../components/Line";
import Login from "../components/Login"
import Signup from "../components/Signup";

const Routing = () => {
    return (
        <>
            <Navbar />
            <Line />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    )
}

export default Routing;