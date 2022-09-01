import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Filters from "./Filters";
import Offers from "./Offers";
import SalonList from "./SalonList";
import axios from "axios";

const DashboardPage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://vanity-swiggy-for-salons-be.herokuapp.com/api/v1/salon")
            .then((res) => setData(res.data.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <div className="flex flex-row px-16 py-24">
                <Filters />
                <SalonList data={data} />
                <Offers />
            </div>
        </div>
    )
}

export default DashboardPage;