import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {

    const { user } = useSelector((state) => state.auth)

    return (
        <div className='flex flex-col font-lora space-y-8 items-center py-16'>
            <div className='font-aboreto text-4xl font-bold'> Welcome, {user.name}</div>
            <div className='flex flex-row py-16 text-center text-xl divide-x-2 divide-black'>
                <div className='py-12 px-6 w-1/3'>View all Bookings</div>
                <div className='py-12 px-6 w-1/3'>Upcoming Bookings</div>
                <div className='py-12 px-6 w-1/3'>View or Add new Address</div>
            </div>
        </div>
    )
}

export default Profile