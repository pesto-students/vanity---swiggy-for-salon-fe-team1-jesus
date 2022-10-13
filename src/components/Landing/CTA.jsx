import React from 'react'
import Button from "../Button.jsx";
import { Link } from "react-router-dom"

const CTA = () => {

    return (
        <div className='bg-lavender py-16 flex flex-row w-full px-[20%] phone:flex-col'>
            <div className='text-6xl ml-0 mr-auto font-aboreto phone:text-center phone:text-5xl font-bold leading-snug'> WHAT ARE YOU <br /> WAITING FOR? </div>
            <div className='mr-0 ml-auto phone:mx-auto my-auto'>
                <Link to="/dashboard">
                    <Button str="Book an Appointment!" clr="black"></Button>
                </Link>
            </div>
        </div>
    )
}

export default CTA