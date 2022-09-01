import React from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/cart/cartSlice"

const SalonServiceList = ({ serviceList }) => {

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const item = {
            id: serviceList.serviceId,
            name: serviceList.subservice,
            price: serviceList.price
        }
        dispatch(addToCart(item))
    }

    return (
        <>
            <div className="flex flex-col bg-cream my-2 w-full px-6 py-2">
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container flex flex-col justify-center mx-auto ">
                        <div className="space-y-4 text-xl">
                            <details className="w-full">
                                <summary className="px-6 text-2xl  font-aboreto font-bold border-black text-center py-6 focus:outline-none">{serviceList.service}</summary>


                                <div className="flex align-middle flex-row">
                                    <div className="flex flex-row align-middle w-full border mb-2 my-4 py-2 border-black">
                                        <p className="w-1/3  p-4 dark:text-gray-400"> {serviceList.subservice} </p>
                                        <p className="w-1/3 ml-auto  p-4 mr-auto text-center">INR {serviceList.price} </p>
                                        <button onClick={handleAddToCart} className="w-1/3 text-right items-center"> <span className="bg-lavender hover:bg-pink hover:underline transition-all delay-200 p-4 mr-4">Add to Cart</span> </button>
                                    </div>
                                </div>




                            </details>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default SalonServiceList;