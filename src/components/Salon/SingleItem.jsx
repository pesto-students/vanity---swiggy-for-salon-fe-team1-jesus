import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../../redux/cart/cartSlice"

const SingleItem = ({ item1 }) => {

    const dispatch = useDispatch()
    const { subservice, price, serviceId, salonId } = item1;
    const { item } = useSelector((state) => state.salon)

    const handleAddToCart = () => {
        const item1 = {
            id: serviceId,
            name: subservice,
            price: price,
            salonInCart: {
                "name": item.name,
                "rating": item.rating,
                "address": item.address,
                "avgCost": item.avgCost,
                "bestFor": item.bestFor,
                "salonId": salonId
            },
            salonId: salonId
        }
        dispatch(addToCart(item1))
    }

    return (
        <div className="flex flex-row phone:flex-col align-middle w-full border mb-2 my-4 py-2 border-black">
            <p className="w-1/3 phone:w-full phone:text-center p-4 dark:text-gray-400"> {item1.subservice} </p>
            <p className="w-1/3 ml-auto phone:w-full phone:mx-0  p-4 mr-auto text-center">INR {item1.price} </p>
            <div onClick={handleAddToCart} className="cursor-pointer mr-4 phone:mx-10 phone:mb-4 relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>
                <span className="relative text-lg block px-8 py-3 phone:text-center rounded bg-white border-2 border-current">
                    Add to Cart
                </span>
            </div>
        </div>
    )
}

export default SingleItem