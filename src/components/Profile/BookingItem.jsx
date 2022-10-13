import React from 'react'
import Button from '../Button';
import { useDispatch } from "react-redux"
import { deleteBooking, getBookings } from '../../redux/booking/bookingSlice';

function BookingItem({ item }) {

    const dispatch = useDispatch()

    const bookingDate = () => {
        const finalD = item.bookingDate.split("-");
        return `${finalD[2]}-${finalD[1]}-${finalD[0]}`
    }

    const startTime = () => {
        const startT = item.startTime
        let t = startT.split(":");
        let finT = t[1];
        const hour = +finT % 24;
        return (hour % 12 || 12) + ":00 " + (hour < 12 ? "AM" : "PM");
    }

    const handleDeleteBooking = () => {
        dispatch(deleteBooking(item.bookingId));
        dispatch(getBookings(item.userId));
    }

    return (
        <div className='w-2/3 mx-auto border-2 flex flex-col bg-cream border-black rounded p-6'>
            <div className='text-2xl font-aboreto font-bold text-center'> {item.salonName} </div>
            <div className='flex flex-row justify-between mt-6 text-xl font-bold'>
                <div> {bookingDate()} </div>
                <div> {startTime()} </div>
            </div>
            <div className='text-xl font-aboreto font-bold text-center mb-4'> Services: </div>
            <div className='flex flex-col space-y-4'>
                {item.serviceNames[0].map((name, i) => {
                    return (
                        <div className='bg-beige text-center p-4' key={i}> {name} </div>
                    )
                })}
            </div>
            <div className='text-2xl font-bold font-aboreto text-center mt-4'>Booking Amount: INR {item.totalAmount} </div>
            <div className='w-full justify-center flex flex-row space-x-4'>
                <Button str="Cancel Appointment" clr="black" click={handleDeleteBooking}></Button>
            </div>
        </div>
    )
}

export default BookingItem