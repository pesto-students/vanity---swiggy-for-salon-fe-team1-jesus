import React, { useEffect, useState } from "react";
import Filters from "./Filters.jsx";
import Offers from "./Offers.jsx";
import SalonList from "./SalonList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setSalons } from "../../redux/salons/salonSlice";
import City from "./City.jsx";
import Sort from "./Sort.jsx";
import Search from "./Search.jsx";

const DashboardPage = () => {

    const dispatch = useDispatch();
    const [city, setCity] = useState("New Delhi")
    useEffect(() => {
        const getSalons = async (city) => {
            await dispatch(setSalons(city))
        }
        getSalons(city)
    }, [dispatch, city])
    const { salonList } = useSelector((state) => state.salon)

    return (
        <div className="bg-cream pt-8">
            <div className="flex flex-row px-[20%] mx-auto">
                <City city={city} setCity={setCity} />
                <Search />
                <Sort />
            </div>
            <div className="flex flex-row px-16 py-24">
                <Filters />
                <SalonList data={salonList.data} />
                <Offers />
            </div>
        </div>
    )
}

export default DashboardPage;