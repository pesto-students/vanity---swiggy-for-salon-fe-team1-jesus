import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from "../../redux/cart/cartSlice"

const SingleItem = ({ item }) => {

    const dispatch = useDispatch()
    const { subservice, price, serviceId, salonId } = item;

    const handleAddToCart = () => {
        const item1 = {
            id: serviceId,
            name: subservice,
            price: price,
            salonId: salonId
        }
        dispatch(addToCart(item1))
    }

    return (
        <div className="flex flex-row align-middle w-full border mb-2 my-4 py-2 border-black">
            <p className="w-1/3  p-4 dark:text-gray-400"> {item.subservice} </p>
            <p className="w-1/3 ml-auto  p-4 mr-auto text-center">INR {item.price} </p>
            <button onClick={handleAddToCart} className="w-1/3 text-right items-center"> <span className="bg-lavender hover:bg-pink hover:underline transition-all delay-200 p-4 mr-4">Add to Cart</span> </button>
        </div>
    )
}

export default SingleItem