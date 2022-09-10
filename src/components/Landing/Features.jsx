import React from "react";

const Features = () => {
    return (
        <div className=" text-black bg-beige pt-20">
            <div className="bg-lightPink rounded-t-full">
                <div className="container mx-auto px-16 py-24 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
                        <div className="lg:w-1/2">
                            <div className="max-w-md font-aboreto mb-6  text-5xl font-bold tracking-tight text-black  sm:leading-none xl:max-w-lg">
                                HOW IT WORKS
                            </div>
                        </div>
                        <div className="lg:w-1/2">

                        </div>
                    </div>
                    <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="cursor-pointer relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                            <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>
                            <span className="relative block px-4 py-3 rounded bg-pink border-2 border-current">
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-pink">
                                    <svg
                                        className="w-12 h-12 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <h6 className="mb-2 text-xl font-semibold leading-5">Browse Salons </h6>
                                <p className="mb-3 text-lg">
                                    Browse through a huge number of salons and select the best one for you depending upon your preferences.
                                </p>
                            </span>
                        </div>
                        <div className="cursor-pointer relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                            <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>
                            <span className="relative block px-4 py-3 rounded bg-cream border-2 border-current">
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-cream">
                                    <svg
                                        className="w-12 h-12 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <h6 className="mb-2 text-xl font-semibold leading-5">Add Services to Cart </h6>
                                <p className="mb-3 text-lg">
                                    Choose the services you want to avail at the salon and add them to your cart. The details of each service are mentioned.
                                </p>
                            </span>
                        </div>
                        <div className="cursor-pointer relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                            <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>
                            <span className="relative block px-4 py-3 rounded bg-lavender border-2 border-current">
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-lavender">
                                    <svg
                                        className="w-12 h-12 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <h6 className="mb-2 text-xl font-semibold leading-5">Book an Appointment </h6>
                                <p className="mb-3 text-lg">
                                    Browse through a huge number of salons and select the best one for you depending upon your preferences.
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;