import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="text-black body-font w-full bg-cream bg-lines min-h-screen pt-[5%]">
            <div className="container mx-auto w-full flex px-24 py-24  md:flex-row flex-col items-center">
                <div className="lg:flex-grow lg:pr-24 w-1/2 ml-10 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div className="title-font text-7xl mb-4 font-medium text-gray-900">THE FUTURE
                        <br className="hidden lg:inline-block" />OF SALONS
                        <br className="hidden lg:inline-block" />IS HERE.
                    </div>
                    <p className="mb-8 text-lg leading-relaxed w-3/4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                    <Link to="/signup">
                        <div className="cursor-pointer relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                            <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>

                            <span className="relative block font-bold px-20 py-3 rounded bg-white border-2 border-current">
                                Book An Appointment
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="w-1/2">
                    <img className="object-cover object-center" alt="hero" src="https://vanity-frontend.s3.ap-south-1.amazonaws.com/website/heropics.png" />

                </div>
            </div>
        </section>
    )
}

export default Hero;