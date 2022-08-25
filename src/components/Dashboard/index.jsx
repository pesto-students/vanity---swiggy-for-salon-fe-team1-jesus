import React from "react";
import Filters from "./Filters";
import Offers from "./Offers";
import SalonList from "./SalonList";

const DashboardPage = () => {

    return (
        <div>
            <div className="flex flex-row px-16 py-24">
                <Filters />
                <SalonList />
                <Offers />
            </div>
        </div>
    )
}

export default DashboardPage;