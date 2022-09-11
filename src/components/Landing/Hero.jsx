import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="text-black body-font w-full bg-lightPink min-h-screen phone:min-h-max pt-[5%]">
            <div className="container mx-auto w-full flex px-24 py-24 phone:px-6 phone:py-6  md:flex-row flex-col items-center">
                <div className="lg:flex-grow lg:pr-24 w-1/2 ml-10 md:pr-16 flex phone:mx-0 phone:w-full phone:mb-6 flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div className="title-font text-7xl phone:text-5xl mb-4 phone:w-full font-aboreto font-bold text-gray-900">THE FUTURE
                        <br className="hidden lg:inline-block" /> OF SALONS
                        <br className="hidden lg:inline-block" /> IS HERE.
                    </div>
                    <p className="mb-8 text-lg leading-relaxed w-3/4 phone:w-full"> Booking an appointment at the Salon has never been this easy. And it never will. </p>
                    <Link to="/signup">
                        <div className="cursor-pointer relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                            <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>

                            <span className="relative block phone:px-6 font-bold px-20 py-3 rounded bg-white border-2 border-current">
                                Book An Appointment
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="w-1/2">
                    <img className="object-cover object-center phone:hidden" alt="hero" src="https://vanity-frontend.s3.ap-south-1.amazonaws.com/website/heropics.png" />

                </div>
            </div>
        </section>
    )
}

export default Hero;