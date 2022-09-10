import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

    const { user } = useSelector((state) => state.auth)

    return (
        <div className='flex flex-col font-lora bg-lightPink space-y-8 items-center py-16'>
            <div className='font-aboreto text-4xl font-bold'> Welcome, {user.name}</div>
            <div className='flex flex-col py-16 justify-center text-center text-xl'>
                <div className="cursor-pointer relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                    <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>
                    <span className="relative block px-4 py-3 my-auto rounded h-full w-full bg-white border-2 border-current">
                        <h6 className="text-xl font-semibold leading-5">View All Bookings </h6>
                    </span>
                </div>
                <div className="cursor-pointer w-full relative mt-10 inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                    <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>
                    <span className="relative block px-4 py-3 my-auto rounded h-full w-full bg-white border-2 border-current">
                        <h6 className="text-xl font-semibold leading-5"> Upcoming Booking: </h6>

                        <div> </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Profile