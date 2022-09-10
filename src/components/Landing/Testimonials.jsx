import React from 'react'
import TestimonialCard from './TestimonialCard'

const profiles = [
    {
        "name": "Rohini Singh",
        "imageUrl": "https://vanity-frontend.s3.ap-south-1.amazonaws.com/website/profile2.jpeg",
        "review": "It was a smooth experience! All I had to do was book an appointment and show up!"
    },
    {
        "name": "Ritwik Sinha",
        "imageUrl": "https://vanity-frontend.s3.ap-south-1.amazonaws.com/website/profile3.jpeg",
        "review": "Salon appointments have never been any easier. Can’t wait to use Vanity again!"
    },
    {
        "name": "Aditi Sharma",
        "imageUrl": "https://vanity-frontend.s3.ap-south-1.amazonaws.com/website/profile2.jpeg",
        "review": "The process was seamless, and it has made booking a salon appointment so easy!"
    }
]

function Testimonials() {
    return (
        <div className='text-black bg-lightPink flex flex-col pt-20 text-center justify-center'>
            <div className=" font-aboreto mb-6  text-5xl font-bold tracking-tight text-black  sm:leading-none ">
                DON'T BELIEVE US? READ OUR REVIEWS!
            </div>
            <div className="flex flex-col space-y-10 py-20">
                {profiles.map((item, i) => {
                    return (
                        <TestimonialCard item={item} key={i} />
                    )
                })
                }
            </div>
        </div>
    )
}

export default Testimonials