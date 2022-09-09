import React from 'react'
import SalonCard2 from "../Salon/SalonCard2";
import check from "../../images/check.svg"

function AppointmentConfirmation() {
    return (
        <div className="flex min-h-screen flex-col font-lora space-y-8 items-center pt-16">
            <SalonCard2 />
            <div className='w-full rounded-t-[20%] text-center h-screen flex flex-col bg-cream'>
                <div className='text-4xl font-bold mt-10 font-aboreto'>Appointment Confirmed</div>
                <div className='mt-10 items-center'>
                    <img src={check} alt="confirmation" className='mx-auto h-[200px]' />
                </div>
            </div>
        </div>
    )
}

export default AppointmentConfirmation;