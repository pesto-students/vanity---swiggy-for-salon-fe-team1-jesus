import React from 'react'
import Line from "../Line.jsx"

const TestimonialCard = ({ item }) => {
    return (
        <div>
            <div className='flex w-1/2 flex-row mx-auto overflow-hidden pb-8'>
                <div className='w-1/4'>
                    <img src={item.imageUrl} alt="profile pic" className='w-full rounded' />
                </div>
                <div className='flex text-left w-3/4 flex-col ml-10'>
                    <div className='text-2xl mt-2 flex flex-row font-bold'> "{item.review}" </div>
                    <div className='text-xl mb-4 mt-auto text-left'> - {item.name} </div>
                </div>
            </div>
            <Line />
        </div>
    )
}

export default TestimonialCard