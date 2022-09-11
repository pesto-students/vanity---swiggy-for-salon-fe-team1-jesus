import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSalons } from "../../redux/salons/salonSlice";
import City from "./City.jsx";
import Sort from "./Sort.jsx";
import Search from "./Search.jsx";
import Spinner from "../Spinner.jsx";

const Dashboard = () => {

    const Filters = React.lazy(() => import('./Filters.jsx'))
    const SalonList = React.lazy(() => import('./SalonList.jsx'))
    const Offers = React.lazy(() => import('./Offers.jsx'))
    const Pagination = React.lazy(() => import('./Pagination.jsx'))
    const dispatch = useDispatch();
    const [city, setCity] = useState("New Delhi")
    const { isLoading } = useSelector((state) => state.salon);
    const [page] = useState(1)
    useEffect(() => {
        const getSalons = async (city) => {
            await dispatch(setSalons(city))
        }
        getSalons(city)
    }, [dispatch, city])
    const { salonList } = useSelector((state) => state.salon)

    return (
        <div className="bg-cream pt-8">
            <div className="flex flex-row phone:flex-col phone:items-center phone:space-y-4 px-[20%] phone:px-6 phone:mx-0 mx-auto">
                <City city={city} setCity={setCity} />
                <Search />
                <Sort />
            </div>
            <Suspense fallback={<Spinner />}>
                <div className="flex flex-row px-16 phone:py-16 phone:px-6 py-24">
                    <Filters city={city} page={page} />
                    {isLoading ? (<Spinner />) : (<SalonList data={salonList.data} />)}
                    <Offers />
                </div>
                <Pagination />
            </Suspense>
        </div>
    )
}

export default Dashboard;