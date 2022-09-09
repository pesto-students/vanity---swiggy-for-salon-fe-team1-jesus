import React from "react";
import SingleItem from "./SingleItem";

const SalonServiceList = ({ serviceList }) => {

    return (
        <>
            <div className="flex flex-col bg-cream my-2 w-full px-6 py-2">
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container flex flex-col justify-center mx-auto ">
                        <div className="space-y-4 text-xl">
                            <details className="w-full">
                                <summary className="px-6 text-2xl  font-aboreto font-bold border-black text-center py-6 focus:outline-none">{serviceList.service}</summary>
                                <div className="flex align-middle flex-col">
                                    {serviceList?.subservice?.map((item, id) => {
                                        return (
                                            <SingleItem item={item} key={id} />
                                        )
                                    })}
                                </div>
                            </details>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default SalonServiceList;