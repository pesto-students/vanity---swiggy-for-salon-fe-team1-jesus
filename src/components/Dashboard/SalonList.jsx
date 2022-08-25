import React from "react";
import SalonCard from "./SalonCard";

const data = [
    {
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
    },
    {
        "name": "Naturals salons",
        "address": "Virar road, panvel 444601",
        "city": "Mumbai",
        "photos": ["nat1.jpg", "nat2.jpg"],
        "ownerName": "Robert Pattinson",
        "ownerQuote": "One woman’s passion led to opening the first Naturals salon. Today, with over 700 salons across India, Naturals is India’s No.1 hair and beauty salon. At Naturals, we believe in empowering women entrepreneurs and encouraging their business pursuits through our franchise model. Over these 22 years, we have created and curated business opportunities for women across India.",
        "manPower": 4,
        "ratings": 3.9,
        "average_cost": "₹",
        "bestFor": "Women"
    }
    ,
    {
        "name": "Naturals salons",
        "address": "Virar road, panvel 444601",
        "city": "Mumbai",
        "photos": ["nat1.jpg", "nat2.jpg"],
        "ownerName": "Robert Pattinson",
        "ownerQuote": "One woman’s passion led to opening the first Naturals salon. Today, with over 700 salons across India, Naturals is India’s No.1 hair and beauty salon. At Naturals, we believe in empowering women entrepreneurs and encouraging their business pursuits through our franchise model. Over these 22 years, we have created and curated business opportunities for women across India.",
        "manPower": 4,
        "ratings": 3.9,
        "bestFor": "Men",
        "average_cost": "₹₹₹₹"
    }
    ,
    {
        "name": "Naturals salons",
        "address": "Virar road, panvel 444601",
        "city": "Mumbai",
        "photos": ["nat1.jpg", "nat2.jpg"],
        "ownerName": "Robert Pattinson",
        "ownerQuote": "One woman’s passion led to opening the first Naturals salon. Today, with over 700 salons across India, Naturals is India’s No.1 hair and beauty salon. At Naturals, we believe in empowering women entrepreneurs and encouraging their business pursuits through our franchise model. Over these 22 years, we have created and curated business opportunities for women across India.",
        "manPower": 4,
        "ratings": 3.9,
        "bestFor": "Both",
        "average_cost": "₹₹₹"
    }


]

const SalonList = () => {

    return (
        <div className="w-4/6 justify-center">
            {data.map((item, i) => {
                return (
                    <SalonCard key={i} item={item} />
                )
            })}
        </div>
    )
}

export default SalonList;