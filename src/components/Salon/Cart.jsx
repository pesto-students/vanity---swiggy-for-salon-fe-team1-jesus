import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Button from "../Button"
import { useNavigate } from "react-router";

const SalonCart = () => {

    const cart = useSelector((state) => state.cart)
    const navigate = useNavigate();

    const handleAppointment = () => {
        navigate("/appointments")
    }

    const getTotalQuantity = () => {
        let total = 0
        cart.cart.forEach(item => {
            total += item.price
        })
        return total
    }

    return (
        <div className="w-2/6 bg-lightPink border-black px-6 py-2 border-2 items-center text-center">
            <div className="text-2xl font-bold py-8">Cart</div>
            {cart?.cart.map((item, i) => {
                return (
                    <div key={i}>
                        <CartItem item={item} />
                    </div>
                )
            })}
            {cart.cart.length === 0 && <div> Add a service to your cart :) </div>}
            <div className="h-[1px] bg-black mt-10 mb-6"></div>
            <div className="flex flex-row px-4">
                <div className="text-left">Total Amount:</div>
                <div className="ml-auto mr-0">INR {getTotalQuantity() || 0} </div>
            </div>
            <div className="h-[1px] bg-black mt-6 mb-10"></div>
            {cart.cart.length > 0 && <Button click={handleAppointment} str="Book Appointment" clr="black"></Button>}
        </div >
    )
}

export default SalonCart;