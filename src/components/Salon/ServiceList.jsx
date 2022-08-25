import React from "react";

const SalonServiceList = ({ serviceList }) => {
    return (
        <>
            <div className="flex flex-col w-full p-6 rounded-lg bg-mint">
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container flex flex-col justify-center px-6 py-4 mx-auto ">
                        <div className="space-y-4 text-xl">
                            <details className="w-full rounded-lg">
                                <summary className="px-6 border-2 text-2xl font-aboreto bg-white font-bold border-black text-center rounded-lg py-6 focus:outline-none">{serviceList.servicesTitle}</summary>
                                {serviceList.subServices.map((item, i) => {
                                    return (
                                        <div key={i} className="flex justify-between border-2 align-middle border-black rounded-lg my-2 flex-row">
                                            <p className="w-1/3 bg-yellow p-4 dark:text-gray-400"> {item.subServiceTitle} </p>
                                            <p className="w-1/3 ml-auto bg-pink p-4 mr-auto text-center">₹ {item.price} </p>
                                            <button className="w-1/3 underline transition-all delay-150 hover:bg-white bg-lavender p-4 text-right">Add Service to Cart</button>
                                        </div>


                                    )
                                })}
                            </details>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default SalonServiceList;