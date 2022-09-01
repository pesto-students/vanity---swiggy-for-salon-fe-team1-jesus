import React from "react";
import SalonServiceList from "./ServiceList";

const services = [
    {
        "serviceId": "SVC-05ae8652-54fa-4163-9329-53a0151d1f0f",
        "service": "Haircut",
        "subservice": "Womens Haircut - short",
        "price": 450,
        "time": "00:45:00",
        "salonId": "SID-6bac1ba9-7e2e-46c6-94bc-71960fb47ef6"
    },
    {
        "serviceId": "SVC-1f66de1b-4613-449f-a039-7ba086b75632",
        "service": "Haircut",
        "subservice": "Mens Haircut",
        "price": 350,
        "time": "00:40:00",
        "salonId": "SID-6bac1ba9-7e2e-46c6-94bc-71960fb47ef6"
    }
]


const SalonServices = () => {
    return (
        <div className="w-4/6 flex flex-col">
            {services.map((item, i) => {
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