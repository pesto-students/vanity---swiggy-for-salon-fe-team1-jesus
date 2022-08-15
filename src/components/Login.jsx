import React, { useState } from "react";
import SalonPic1 from "../images/login/salonpicloginpage1.jpeg";
import SalonPic2 from "../images/login/salonpicloginpage2.jpeg"
import Line from "./Line";
import { Link } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="font-lora flex flex-row px-16 space-x-6 py-16 bg-lavenderbottom">
            <div className="w-1/2 flex flex-col space-y-2">
                <img src={SalonPic1} alt="salon pic login page" />
                <img src={SalonPic2} alt="salon pic 2 login page" />
            </div>
            <div className="w-1/2 flex flex-col text-xl p-10 space-y-6 items-center">
                <div className="text-5xl mb-6 font-aboreto">Vanity</div>
                <div className="font-bold ml-0 mr-auto">Get more on your salon visits.</div>
                <div className="ml-0 mr-auto">Join us to get 10% off on your first appointment! </div>
                <div className="w-full h-2"></div>
                <Link to="/signup">
                    <div className="cursor-pointer relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                        <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-pink group-hover:translate-y-0 group-hover:translate-x-0"></span>

                        <span className="relative block px-20 py-3 rounded bg-black text-white border-2 border-current">
                            Join Now
                        </span>
                    </div>
                </Link>
                <div className="w-full h-2"></div>
                <Line />
                <div className="w-full h-6"></div>
                <label className="relative w-1/2 block p-3 border-2 border-black rounded" htmlFor="email">
                    <input
                        className="w-full px-0 bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
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
                <div className="w-full h-2"></div>
                <div className="cursor-pointer relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                    <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-pink group-hover:translate-y-0 group-hover:translate-x-0"></span>

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