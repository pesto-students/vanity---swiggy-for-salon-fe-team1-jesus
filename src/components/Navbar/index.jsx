import React from "react";
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../redux/auth/authSlice";
import { useNavigate } from "react-router";

const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { name, user } = useSelector((state) => state.auth)

    const onProfile = () => {
        navigate(`/profile/${user.userId}`)
    }

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/dashboard")
    }

    return (
        <header className="text-black body-font font-lora sm:w-full phone:w-full ">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/">
                    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-3xl font-aboreto">Vanity </span>
                    </div>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                    <Link to="/"><div className="mr-5 phone:mr-2 text-lg hover:text-gray-900 py-1 rounded cursor-pointer">Home</div></Link>
                    <Link to="/about"> <div className="mr-5 phone:mr-2 text-lg hover:text-gray-900 cursor-pointer">About</div></Link>
                    <Link to="/dashboard">
                        <div className="mr-5 phone:mr-2 text-lg hover:text-gray-900 cursor-pointer">Book</div>
                    </Link>
                    <Link to="/faqs"><div className="mr-5 phone:mr-2 text-lg hover:text-gray-900 cursor-pointer">FAQs</div></Link>
                </nav>
                {user ?

                    (<>
                        <div onClick={onProfile} className="text-xl pr-4 phone:mt-2 font-aboreto font-bold"> Welcome, {name} </div>
                        <div onClick={onLogout} className="cursor-pointer phone:mt-2 relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                            <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>

                            <span className="relative block font-bold px-8 py-3 rounded bg-white border-2 border-current">
                                Logout
                            </span>
                        </div></>)
                    :
                    (<>
                        <Link to="/login">
                            <div className="cursor-pointer mr-4 phone:mt-2 relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                                <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>

                                <span className="relative block font-bold px-8 py-3 rounded bg-white border-2 border-current">
                                    Log in
                                </span>
                            </div>
                        </Link>
                        <Link to="/signup">
                            <div className="cursor-pointer phone:mt-2 relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                                <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>

                                <span className="relative block font-bold px-8 py-3 rounded bg-white border-2 border-current">
                                    Sign up
                                </span>
                            </div>
                        </Link>
                    </>)}
            </div>
        </header>
    )
}

export default Navbar;