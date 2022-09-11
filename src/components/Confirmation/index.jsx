import React from 'react'
import { useSelector } from 'react-redux';
import SalonCard2 from "../Salon/SalonCard2.jsx";
import SalonSpinner from '../Salon/SalonSpinner.jsx';
import Button from "../Button.jsx"
import Payment from './Payment.jsx';
import { useNavigate } from 'react-router-dom'

function AppointmentConfirmation() {

    const { latestBooking, isLoading } = useSelector((state) => state.booking)
    const { user } = useSelector((state) => state.auth)
    const salonName = latestBooking?.data?.salonName || ""
    const navigate = useNavigate()
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

    const handlePayLater = () => {
        navigate(`/profile/${user.userId}`)
    }

    return (
        <>
            {isLoading ?
                (<div> <SalonSpinner />  </div >) :
                (<div className="flex min-h-screen phone:min-h-min flex-col font-lora space-y-8 items-center pt-16">
                    <SalonCard2 />
                    <div className='w-full rounded-t-[20%] phone:rounded phone:px-6 text-center h-screen flex flex-col bg-cream'>
                        <div className='text-4xl font-bold mt-10 font-aboreto'>Appointment Confirmed</div>
                        <div className='text-xl mt-4 font-bold'> Your appointment has been confirmed at {salonName} </div>
                        <div className='text-xl mt-4 font-bold'> for {bookingDate()} at  {startTime()} </div>
                        <div className='mt-6 mx-auto w-1/5 flex flex-row space-x-4'>
                            <Payment />
                            <Button click={handlePayLater} clr="black" str="Pay at Salon"></Button>
                        </div>
                    </div>
                </div >)}
        </>
    )
}

export default AppointmentConfirmation;