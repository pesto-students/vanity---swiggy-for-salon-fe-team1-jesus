import React from "react";
import { useSelector } from "react-redux";
import BookingItem from "./BookingItem";

const AllBookings = () => {
    const { allBookings } = useSelector((state) => state.booking);

    return (
        <div className="px-24 py-16 bg-lightPink items-center">
            <div className="text-4xl font-aboreto font-bold text-center mb-10">VIEW ALL BOOKINGS</div>
            <div className="flex flex-col space-y-8">
                {allBookings.length > 0 && allBookings.map((item, i) => {
                    return (
                        <BookingItem key={i} item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default AllBookings