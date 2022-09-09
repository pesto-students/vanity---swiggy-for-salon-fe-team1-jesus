import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/cart/cartSlice'

const CartItem = ({ item }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeItem(item.id))
    }

    return (
        <div className='bg-cream w-full mr-6 my-2 p-4 flex flex-row'>
            <div className='text-left'> {item.name} </div>
            <div className='ml-auto mr-4'> INR {item.price} </div>
            <div onClick={handleDelete} className='cursor-pointer'>Delete Item</div>
        </div>
    )
}

export default CartItem