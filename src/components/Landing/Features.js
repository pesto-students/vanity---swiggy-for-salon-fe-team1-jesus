import React from "react";

const Features = () => {
    return (
        <div className=" text-black">
            <div className="bg-bluebottom">
                <div className="container mx-auto px-16 py-24 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
                        <div className="lg:w-1/2">
                            <div className="max-w-md mb-6 font-sans text-5xl font-bold tracking-tight text-black  sm:leading-none xl:max-w-lg">
                                HOW IT WORKS
                            </div>
                        </div>
                        <div className="lg:w-1/2">

                        </div>
                    </div>
                    <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-pink max-w-md border-2 border-black rounded p-2">
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

                        </div>
                        <div className="max-w-md border-2 bg-mint border-black rounded p-2">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mint">
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
                            <h6 className="mb-2 text-xl font-semibold leading-5">Add Services to Cart</h6>
                            <p className="mb-3 text-lg ">
                                Choose the services you want to avail at the salon and add them to your cart. The details of each service are mentioned.
                            </p>

                        </div>
                        <div className="max-w-md border-2 bg-lavender border-black rounded p-2">
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
                            <h6 className="mb-2 text-xl font-semibold leading-5">Book an Appointment!</h6>
                            <p className="mb-3 text-lg ">
                                Finally, book your appointment and get ready to be pampered. Show up at the salon on the day of and relax!
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;