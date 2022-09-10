import React from 'react'
import { useSelector } from 'react-redux';
import SalonCard2 from "../Salon/SalonCard2.jsx";
import SalonSpinner from '../Salon/SalonSpinner.jsx';

function AppointmentConfirmation() {

    const { latestBooking, isLoading } = useSelector((state) => state.booking)
    const bookingDate = () => {
        const newD = Date(latestBooking?.data.bookingDate)
        const finalD = newD.split(" ");
        return `${finalD[0]} ${finalD[1]} ${finalD[2]} ${finalD[3]}`
    }

    const startTime = () => {
        const startT = latestBooking?.data.startTime
        let t = startT.split(":");
        let finT = t[1];
        const hour = +finT % 24;
        return (hour % 12 || 12) + ":00 " + (hour < 12 ? "AM" : "PM");
    }

    return (
        <>
            {isLoading ?
                (<div> <SalonSpinner />  </div >) :
                (<div className="flex min-h-screen flex-col font-lora space-y-8 items-center pt-16">
                    <SalonCard2 />
                    <div className='w-full rounded-t-[20%] text-center h-screen flex flex-col bg-cream'>
                        <div className='text-4xl font-bold mt-10 font-aboreto'>Appointment Confirmed</div>
                        <div className='text-xl mt-4 font-bold'> Your appointment has been confirmed at {latestBooking?.data.salonName} </div>
                        <div className='text-xl mt-4 font-bold'> for {bookingDate()} at  {startTime()} </div>
                        <div className='text-xl mt-10'>Your Services </div>
                        <div className='flex flex-col border-2 border-red-600 w-full h-full'>
                            {latestBooking?.data.serviceNames.map((item, i) => (
                                <div key={i}> {item} </div>
                            ))}
                        </div>
                    </div>
                </div >)}
        </>
    )
}

export default AppointmentConfirmation;