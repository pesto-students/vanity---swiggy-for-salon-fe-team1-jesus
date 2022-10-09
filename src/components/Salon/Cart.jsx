import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem.jsx";
import Button from "../Button.jsx"
import { useNavigate } from "react-router";
import { reset } from "../../redux/cart/cartSlice";
import { Link } from "react-router-dom"

const SalonCart = () => {

    let currentSalonName;
    const cart = useSelector((state) => state.cart)
    const item = useSelector((state) => state.salon)
    const { user } = useSelector((state) => state.auth)
    const { currSalon } = useSelector((state) => state.cart)
    if (cart.cart.length > 0) {
        currentSalonName = currSalon.name
    }
    else {
        currentSalonName = item.item.name
    }
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleAppointment = () => {
        navigate("/appointments")
    }

    const handleCurrent = () => {
        console.log(cart.currSalonId)
        navigate(`/salon/${cart.currSalonId}`)
    }

    const handleReset = () => {
        dispatch(reset());
    }

    const getTotalQuantity = () => {
        let total = 0
        cart.cart.forEach(item => {
            total += item.price
        })
        return total
    }

    return (
        <div className="w-2/6 phone:w-full phone:my-6 bg-lightPink border-black px-6 py-2 border-2 items-center text-center">
            <div className="text-2xl font-bold pt-8 pb-4">Cart</div>
            <div className="text-xl bg-pink border-2 border-black rounded p-4 mb-8 font-bold">SALON: {currentSalonName}</div>
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
            {cart.cart.length > 0 && <div className="flex flex-row space-x-4 justify-center">
                {user !== null ? (<Button click={handleAppointment} str="Book Appointment" clr="black"></Button>) : (<Link to="/login"><Button str="Book Appointment" clr="black"></Button></Link>)}
                <Button click={handleReset} str="Clear Cart" clr="black"></Button>
            </div>}
            <Button click={handleCurrent} str="Go to current salon" clr="black"></Button>
        </div >
    )
}

export default SalonCart;