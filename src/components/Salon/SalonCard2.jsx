import React from "react";
import { useSelector } from "react-redux";

const SalonCard2 = () => {
    const { item } = useSelector((state) => state.salon)

    return (
        <div className="w-1/2 px-8 phone:px-6 phone:w-full font-lora">
            <div className="cursor-pointer w-full relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>
                <span className="p-4 relative flex flex-row phone:flex-col px-8 py-3 bg-white rounded border-2 border-current">
                    <div className="w-1/5 phone:w-full">
                        <img alt="salon pic" src="https://vanity-frontend.s3.ap-south-1.amazonaws.com/website/salonpic.jpeg" />
                    </div>
                    <div className="flex w-full flex-col p-4 space-y-10 phone:space-y-4">
                        <div className="flex flex-row phone:flex-col">
                            <div className="text-2xl font-aboreto w-4/5 phone:w-full phone:my-2 font-bold"> {item.name} </div>
                            <div className="mr-0 ml-auto text-xl phone:mx-0"> Rating: {item.rating}/10 </div>
                        </div>
                        <div className="text-xl"> {item.address} </div>
                        <div className="flex flex-row phone:flex-col phone:space-y-4">
                            <div className="text-xl"> Average Cost: {item.avgCost}</div>
                            <div className="mr-0 ml-auto phone:mx-0 text-xl"> {item.bestFor} </div>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default SalonCard2;