import React, { useState } from "react";
import SalonPicSignup1 from "../images/signup/salonpicsignuppage1.jpeg";
import SalonPicSignup2 from "../images/signup/salonpicsignuppage2.jpeg";
import Line from "./Line";
import axios from "axios";
import { ToastContainer, toast, Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as EmailValidator from "email-validator"

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [budget, setBudget] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");

    const handleSignup = (e) => {
        e.preventDefault()
        const ans = EmailValidator.validate(email)

        if (name.length < 3) {
            toast("Please enter your full name.", {
                autoClose: 4000,
                position: toast.POSITION.TOP_CENTER,
                transition: Zoom
            })
        }
        else if (password.length < 6) {
            toast("Password needs to be at least 6 characters.", {
                autoClose: 4000,
                position: toast.POSITION.TOP_CENTER,
                transition: Zoom
            })
        }

        else if (!ans) {
            toast("Email is invalid.", {
                autoClose: 4000,
                position: toast.POSITION.TOP_CENTER,
                transition: Zoom
            })
        }

        else {
            let payload = {
                "name": name,
                "email": email,
                "phone": phone,
                "city": city,
                "gender": gender,
                "budget": budget,
                "password": password,
                "rating": 0
            }

            let config = {
                method: "post",
                url: "https://vanity-manual.el.6yr.appspot.com/api/v1/users/signup",
                headers: {
                    "Content-Type": "application/json"
                },
                data: payload
            }

            axios(config)
                .then((res) => {
                    toast("Successfully registered!", {
                        autoClose: 4000,
                        position: toast.POSITION.TOP_CENTER,
                        transition: Zoom
                    })
                })
                .catch((err) => {
                    toast(`Sorry, there was an error with your request. Please try again.`, {
                        autoClose: 4000,
                        position: toast.POSITION.TOP_CENTER,
                        transition: Zoom
                    })
                })
        }
    }

    return (
        <div className="px-16 font-lora py-24 flex flex-row text-sm bg-yellowtop">
            <ToastContainer />
            <div className="w-1/2 flex flex-col space-y-6 items-center">
                <div className="text-5xl font-aboreto mb-4">Vanity</div>
                <div className="font-bold text-xl ml-0 mr-auto">Sign up today to get 10% off your first appointment!</div>
                <div className="w-full h-2"></div>
                <Line />
                <div className="w-full h-2"></div>
                <div className="flex flex-row w-full space-x-6 px-6">
                    <label className="relative w-1/2 block p-3 border-2 border-black rounded" htmlFor="name">
                        <input
                            className="w-full px-0 bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="name"
                        />

                        <span className="absolute text-md font-medium text-gray-400 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                            Name
                        </span>
                    </label>
                    <label className="relative w-1/2 block p-3 border-2 border-black rounded" htmlFor="email">
                        <input
                            className="w-full px-0  bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />

                        <span className="absolute text-md font-medium text-gray-400 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                            Email
                        </span>
                    </label>

                </div>
                <div className="flex flex-row w-full space-x-6 px-6">
                    <label className="relative w-1/2 block p-3 border-2 border-black rounded" htmlFor="password">
                        <input
                            className="w-full px-0  bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />

                        <span className="absolute text-md font-medium text-gray-400 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                            Password
                        </span>
                    </label>
                    <label className="relative w-1/2 block p-3 border-2 border-black rounded" htmlFor="phone">
                        <input
                            className="w-full px-0  bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                            id="phone"
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone Number"
                        />

                        <span className="absolute text-md font-medium text-gray-400 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                            Phone
                        </span>
                    </label>

                </div>
                <div className="flex flex-row w-full space-x-6 px-6">
                    <label className="relative w-1/2 block p-3 border-2 border-black rounded" htmlFor="city">
                        <input
                            className="w-full px-0  bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                            id="city"
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="City"
                        />

                        <span className="absolute text-md font-medium text-gray-400 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                            City
                        </span>
                    </label>
                    <label className="relative w-1/2 block p-3 border-2 border-black rounded" htmlFor="gender">
                        <select
                            className="w-full px-0  bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                            id="city"
                            type="select"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}

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
                    <label className="relative w-1/2 block p-3 border-2 border-black rounded" htmlFor="budget">
                        <select
                            className="w-full px-0  bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                            id="budget"
                            type="select"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}

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
                    <span className="absolute inset-0 rounded transition-transhtmlForm translate-x-1 translate-y-1 bg-pink group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span className="relative block px-20 py-3 font-bold rounded bg-white border-2 border-current">
                        Sign Up
                    </span>
                </div>
                <div className="w-full h-2"></div>
                <Line />
            </div>
            <div className="flex flex-col w-1/2 space-y-6">
                <img alt="salon1" src={SalonPicSignup1} />
                <img alt="salon2" src={SalonPicSignup2} />
            </div>
        </div>
    )
}

export default Signup;