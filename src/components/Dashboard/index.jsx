import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import Offers from "./Offers";
import SalonList from "./SalonList";
import { useDispatch, useSelector } from "react-redux";
import { setSalons } from "../../redux/salons/salonSlice";
import City from "./City";
import Sort from "./Sort";
import Search from "./Search";

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