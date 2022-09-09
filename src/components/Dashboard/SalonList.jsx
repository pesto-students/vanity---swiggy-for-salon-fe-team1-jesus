import React from "react";
import SalonCard from "./SalonCard.jsx";

const SalonList = ({ data }) => {

    return (
        <div className="w-4/6 justify-center">
            {data?.map((item, i) => {
                return (
                    <SalonCard key={i} item={item} />
                )
            })}
        </div>
    )
}

export default SalonList;