import React from "react";
import SalonPic from "../../images/salonpic.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="text-black body-font bg-minttop">
            <section className="">
                <div className="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <div className="title-font  text-7xl mb-4 font-medium text-gray-900">THE FUTURE
                            <br className="hidden lg:inline-block" />OF SALONS
                            <br className="hidden lg:inline-block" />IS HERE.
                        </div>
                        <p className="mb-8 text-lg leading-relaxed w-3/4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                        <Link to="/dashboard">
                            <div className="cursor-pointer relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                                <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-pink group-hover:translate-y-0 group-hover:translate-x-0"></span>

                                <span className="relative font-bold block px-20 py-3 rounded bg-black text-lg text-white border-2 border-current">
                                    Book Appointment
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="lg:max-w-lg relative lg:w-full md:w-1/2">
                        <div className="flex flex-row relative">
                            <img className="object-cover object-center border-4 border-black rounded" alt="hero" src={SalonPic} />
                            <div className="bg-blue border-b-4 border-t-4 border-r-4 border-black right-[-50px] mt-12 w-[50px] h-full absolute"></div>
                        </div>
                        <div className="bg-blue border-b-4 border-r-4 border-l-4 border-black h-[50px] w-full absolute ml-[50px]"></div>

                    </div>
                </div>
            </section>
        </section>
    )
}

export default Hero;