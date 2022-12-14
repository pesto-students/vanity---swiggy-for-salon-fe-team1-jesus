import React, { useState, useEffect } from "react";
import Line from "./Line.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/auth/authSlice";
import Spinner from "./Spinner.jsx";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [userDetails, setUserDetails] = useState({
        email: "Simon@gmail.com",
        password: "Simon123"
    })

    const { email, password } = userDetails;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
    const { cart, currSalonId } = useSelector((state) => state.cart)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess || user) {
            navigate("/dashboard");
        }
        if (isSuccess && cart && currSalonId) {
            navigate(`/salon/${currSalonId}`)
        }

    }, [user, isError, isSuccess, message, navigate, dispatch, cart, currSalonId])

    const handleChange = (e) => {
        setUserDetails(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { email: email, password: password }
        dispatch(login(payload))
    }

    if (isLoading) {
        return (
            <Spinner />
        )
    }

    return (
        <div className="font-lora flex flex-row px-16 phone:px-6 space-x-6 phone:space-x-0 py-16 phone:items-center bg-lightPink">
            <div className="w-1/2 flex flex-col space-y-2 phone:hidden">
                <ToastContainer />
                <img src="https://vanity-frontend.s3.ap-south-1.amazonaws.com/login/salonpicloginpage1.jpeg" alt="salon pic login page" />
                <img src="https://vanity-frontend.s3.ap-south-1.amazonaws.com/login/salonpicloginpage2.jpeg" alt="salon pic 2 login page" />
            </div>
            <div className="w-1/2 phone:w-full phone:py-6 phone:px-0 flex flex-col text-xl p-10 space-y-6 items-center">
                <div className="text-5xl mb-6 phone:text-center font-aboreto font-bold">Vanity</div>
                <div className="font-bold ml-0 mr-auto phone:mx-auto">Get more on your salon visits.</div>
                <div className="ml-0 mr-auto phone:text-center phone:mx-auto">Join us to get 10% off on your first appointment! </div>
                <div className="w-full h-2"></div>
                <Line />
                <div className="w-full h-6"></div>
                <label className="relative w-1/2 phone:w-full bg-white block p-3 border-2 border-black rounded" htmlFor="email">
                    <input
                        className="w-full px-0 bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                        id="email"
                        type="email"
                        value={email}
                        required={true}
                        onChange={(e) => handleChange(e)}
                        placeholder="Email"
                    />

                    <span className="absolute text-sm font-medium text-gray-400 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                        Email
                    </span>
                </label>
                <label className="relative w-1/2 phone:w-full bg-white block p-3 border-2 border-black rounded" htmlFor="password">
                    <input
                        className="w-full px-0  bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                        id="password"
                        type="password"
                        value={password}
                        required={true}
                        onChange={(e) => handleChange(e)}
                        placeholder="Password"
                    />

                    <span className="absolute text-sm font-medium text-gray-400 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                        Password
                    </span>
                </label>
                <div className="w-full h-2"></div>
                <div onClick={(e) => handleSubmit(e)} className="cursor-pointer relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                    <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span className="relative block px-20 py-3 rounded bg-white border-2 border-current">
                        Sign In
                    </span>
                </div>
                <div className="w-full h-2"></div>
                <Line />
            </div>
        </div>
    )
}

export default Login;