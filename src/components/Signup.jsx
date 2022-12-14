import React, { useState } from "react";
import Line from "./Line.jsx";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/auth/authSlice";
import { useEffect } from "react";
import Spinner from "./Spinner.jsx";

const Signup = () => {

    const [obj, setObj] = useState({
        email: "",
        password: "",
        name: "",
        phone: "",
        budget: "",
        gender: "",
        city: ""
    })

    const { email, password, name, phone, gender, city } = obj
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess || user) {
            navigate("/dashboard");
        }

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const handleChange = e => {
        setObj(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    };

    const handleSignup = (e) => {
        e.preventDefault()


        let payload = {
            "name": name,
            "email": email,
            "phone": phone,
            "city": city,
            "gender": gender,
            "password": password,
            "rating": 0
        }
        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }
        dispatch(register(payload, config))

    }

    if (isLoading) {
        return (
            <Spinner />
        )
    }

    return (
        <div className="px-16 phone:px-6 font-lora py-24 flex flex-row text-sm bg-lightPink">
            <ToastContainer />
            <div className="w-1/2 phone:w-full flex flex-col space-y-6 items-center">
                <div className="text-5xl font-aboreto font-bold mb-4">Vanity</div>
                <div className="font-bold text-xl ml-0 mr-auto phone:mx-auto phone:text-center">Sign up today to get 10% off your first appointment!</div>
                <div className="w-full h-2"></div>
                <Line />
                <div className="w-full h-2"></div>
                <div className="flex flex-row phone:flex-col phone:space-x-0 phone:space-y-4 w-full space-x-6 px-6">
                    <label className="relative w-1/2 bg-white phone:w-full block p-3 border-2 border-black rounded" htmlFor="name">
                        <input
                            className="w-full px-0 bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                            id="name"
                            type="text"
                            required="true"
                            value={obj.name}
                            onChange={(e) => handleChange(e)}
                            placeholder="name"
                        />

                        <span className="absolute text-md font-medium text-gray-400 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                            Name
                        </span>
                    </label>
                    <label className="relative w-1/2 bg-white phone:w-full block p-3 border-2 border-black rounded" htmlFor="email">
                        <input
                            className="w-full px-0  bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                            id="email"
                            type="email"
                            value={obj.email}
                            required="true"
                            onChange={(e) => handleChange(e)}
                            placeholder="Email"
                        />

                        <span className="absolute text-md font-medium text-gray-400 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                            Email
                        </span>
                    </label>

                </div>
                <div className="flex flex-row w-full space-x-6 px-6">
                    <label className="relative w-1/2 bg-white phone:w-full block p-3 border-2 border-black rounded" htmlFor="password">
                        <input
                            className="w-full px-0  bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                            id="password"
                            type="password"
                            required="true"
                            value={obj.password}
                            onChange={(e) => handleChange(e)}
                            placeholder="Password"
                        />

                        <span className="absolute text-md font-medium text-gray-400 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                            Password
                        </span>
                    </label>
                    <label className="relative w-1/2 bg-white phone:w-full block p-3 border-2 border-black rounded" htmlFor="phone">
                        <input
                            className="w-full px-0  bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                            id="phone"
                            type="number"
                            required="true"
                            value={obj.phone}
                            onChange={(e) => handleChange(e)}
                            placeholder="Phone Number"
                        />

                        <span className="absolute text-md font-medium text-gray-400 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                            Phone
                        </span>
                    </label>

                </div>
                <div className="flex flex-row w-full space-x-6 px-6">
                    <label className="relative w-1/2 bg-white phone:w-full block p-3 border-2 border-black rounded" htmlFor="city">
                        <input
                            className="w-full px-0  bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                            id="city"
                            type="text"
                            value={obj.city}
                            onChange={(e) => handleChange(e)}
                            placeholder="City"
                        />

                        <span className="absolute text-md font-medium text-gray-400 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                            City
                        </span>
                    </label>
                    <label className="relative w-1/2 bg-white phone:w-full block p-3 border-2 border-black rounded" htmlFor="gender">
                        <select
                            className="w-full px-0  bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                            id="gender"
                            type="select"
                            value={obj.gender}
                            onChange={(e) => handleChange(e)}

                        >
                            <option value=""></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="unisex">Prefer not to answer</option>
                        </select>

                        <span className="absolute text-md font-medium text-gray-400 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                            Gender
                        </span>
                    </label>
                </div>
                <div className="flex flex-row w-full space-x-6 px-6">
                    <label className="relative w-1/2 bg-white phone:w-full block p-3 border-2 border-black rounded" htmlFor="budget">
                        <select
                            className="w-full px-0  bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                            id="budget"
                            type="select"
                            value={obj.budget}
                            onChange={(e) => handleChange(e)}

                        >
                            <option value=""></option>
                            <option value="500">500-1000</option>
                            <option value="1000">1000-2000</option>
                            <option value="2000">2000+</option>
                        </select>

                        <span className="absolute text-md font-medium text-gray-400 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                            Budget
                        </span>
                    </label>
                </div>
                <div className="w-full h-2"></div>
                <div onClick={(e) => handleSignup(e)} className=" text-lg cursor-pointer relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                    <span className="absolute inset-0 rounded transition-transhtmlForm translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span className="relative block px-20 py-3 font-bold rounded bg-white border-2 border-current">
                        Sign Up
                    </span>
                </div>
                <div className="w-full h-2"></div>
                <Line />
            </div>
            <div className="flex phone:hidden flex-col w-1/2 space-y-6">
                <img alt="salon1" src="https://vanity-frontend.s3.ap-south-1.amazonaws.com/signup/salonpicsignuppage1.jpeg" />
                <img alt="salon2" src="https://vanity-frontend.s3.ap-south-1.amazonaws.com/signup/salonpicsignuppage2.jpeg" />
            </div>
        </div>
    )
}

export default Signup;