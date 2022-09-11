import React from "react";
import { useSelector } from "react-redux";
import SalonServiceList from "./ServiceList.jsx";

const SalonServices = () => {

    const { currentSalon } = useSelector((state) => state.salon);

    return (
        <div className="w-4/6 phone:w-full flex flex-col">
            {currentSalon.data?.map((item, i) => {
                return (
                    <div key={i}>
                        <SalonServiceList serviceList={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default SalonServices;