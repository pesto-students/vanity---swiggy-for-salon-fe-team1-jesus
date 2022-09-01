import React from "react";
import { useSelector } from "react-redux";
import SalonCart from "./Cart";
import SalonCard2 from "./SalonCard2";
import SalonServices from "./Services";

const SalonDetails = ({ match, history }) => {

    const { currentSalon } = useSelector((state) => state.salon)

    return (
        <div className="flex flex-col font-lora space-y-8 items-center py-16">
            <SalonCard2 item={currentSalon} />
            <h2 className="text-3xl px-6 font-semibold pt-4">Salon Menu</h2>
            <div className="flex flex-row space-x-8 px-16 py-24 w-full">
                <SalonServices />
                <SalonCart />
            </div>
        </div>
    )
}

export default SalonDetails;