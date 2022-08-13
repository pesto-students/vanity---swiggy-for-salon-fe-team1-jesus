import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="text-black body-font font-lora">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/">
                    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-3xl font-aboreto">Vanity</span>
                    </div>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <div className="mr-5 text-lg hover:text-gray-900  px-2 py-1 rounded cursor-pointer">Home</div>
                    <div className="mr-5 text-lg hover:text-gray-900 cursor-pointer">About</div>
                    <div className="mr-5 text-lg hover:text-gray-900 cursor-pointer">Book</div>
                    <div className="mr-5 text-lg hover:text-gray-900 cursor-pointer">FAQs</div>
                </nav>
                <Link to="/login">
                    <div className="cursor-pointer relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                        <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-pink group-hover:translate-y-0 group-hover:translate-x-0"></span>

                        <span className="relative block font-bold px-8 py-3 rounded bg-white border-2 border-current">
                            Sign up
                        </span>
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Navbar;