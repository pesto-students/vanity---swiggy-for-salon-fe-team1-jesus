import React from "react";
import SalonServiceList from "./ServiceList";

const services = [{
    servicesTitle: "Hair Cuts",
    subServices: [{
        subServiceTitle: "Women Hair Cut - Short",
        price: 400
    }, {
        subServiceTitle: "Women Hair Cut - Long",
        price: 650
    },
    {
        subServiceTitle: "Men Hair Cut",
        price: 300
    }]
}, {
    servicesTitle: "Waxing",
    subServices: [{
        subServiceTitle: "Arms Waxing - Honey",
        price: 250
    }, {
        subServiceTitle: "Legs Waxing - Honey",
        price: 450
    }, {
        subServiceTitle: "Arms Waxing - Rica",
        price: 400
    }, {
        subServiceTitle: "Legs Waxing - Rica",
        price: 600
    }]
}, {
    servicesTitle: "Facials",
    subServices: [{
        subServiceTitle: "Gold Facial",
        price: 600
    }, {
        subServiceTitle: "Diamond Facial",
        price: 800
    }, {
        subServiceTitle: "Platinum Facial",
        price: 1000
    }, {
        subServiceTitle: "Fruit Facial",
        price: 700
    }, {
        subServiceTitle: "Honey Facial",
        price: 900
    },
    ]
}]

const SalonServices = () => {
    return (
        <div className="w-4/6 flex flex-col">
            <h2 className="text-3xl px-6 font-semibold py-4">Salon Menu</h2>
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