import React from "react";
import SalonCard2 from "../Salon/SalonCard2";
import AppointmentCalender from "./Calender";
import AppointmentForm from "./Form";

const item = {
    "name": "Naturals salons",
    "address": "Virar road, panvel 444601",
    "city": "Mumbai",
    "photos": ["nat1.jpg", "nat2.jpg"],
    "ownerName": "Robert Pattinson",
    "ownerQuote": "One woman’s passion led to opening the first Naturals salon. Today, with over 700 salons across India, Naturals is India’s No.1 hair and beauty salon. At Naturals, we believe in empowering women entrepreneurs and encouraging their business pursuits through our franchise model. Over these 22 years, we have created and curated business opportunities for women across India.",
    "manPower": 4,
    "ratings": 3.9,
    "bestFor": "Both",
    "average_cost": "₹₹"
}

const AppointmentPage = () => {
    return (
        <div className="flex flex-col font-lora space-y-8 items-center py-16">
            <SalonCard2 item={item} />
            <div className="font-aboreto text-3xl font-bold">Book Appointment</div>
            <div className="flex flex-row space-x-8 px-24 py-24 w-full divide-black divide-x-2">
                <AppointmentForm />
                <AppointmentCalender />
            </div>
        </div>
    )
}

export default AppointmentPage;