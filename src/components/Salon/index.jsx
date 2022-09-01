import React from "react";
import { useParams } from "react-router";
import SalonCart from "./Cart";
import SalonCard2 from "./SalonCard2";
import SalonServices from "./Services";


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

const SalonDetails = ({ match, history }) => {

    let id = useParams()
    console.log(id)

    return (
        <div className="flex flex-col font-lora space-y-8 items-center py-16">
            <SalonCard2 item={item} />
            <h2 className="text-3xl px-6 font-semibold pt-4">Salon Menu</h2>
            <div className="flex flex-row space-x-8 px-16 py-24 w-full">
                <SalonServices />
                <SalonCart />
            </div>
        </div>
    )
}

export default SalonDetails;