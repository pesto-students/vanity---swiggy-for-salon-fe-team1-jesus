import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBookings } from '../../redux/booking/bookingSlice'
import BookingItem from './BookingItem.jsx'
import SalonSpinner from "../Salon/SalonSpinner.jsx"

const Profile = () => {

    const { user } = useSelector((state) => state.auth)
    const { allBookings, isLoading } = useSelector((state) => state.booking)
    const dispatch = useDispatch()
    const getBooking = useCallback(() => {
        dispatch(getBookings(user.userId))
    }, [dispatch, user])

    useEffect(() => {
        getBooking()
    }, [getBooking])

    return (
        <div className='flex flex-col font-lora bg-lightPink space-y-8 items-center py-16'>
            <div className='font-aboreto text-4xl font-bold'> Welcome, {user.name}</div>
            <div className='flex flex-col pt-16 justify-center text-center text-xl'>
                <Link to="/profile/allbookings">
                    <div className="cursor-pointer relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                        <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>
                        <span className="relative block px-4 py-3 my-auto rounded h-full w-full bg-white border-2 border-current">
                            <h6 className="text-xl font-semibold leading-5">View All Bookings </h6>
                        </span>
                    </div>
                </Link>
                <div className='text-2xl font-aboreto font-bold mt-10'>upcoming booking:</div>
            </div>
            {isLoading && <SalonSpinner />}
            {allBookings[0] && <BookingItem item={allBookings[0]} />}
        </div>
    )
}

export default Profile