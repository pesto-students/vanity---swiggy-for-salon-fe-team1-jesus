import React from 'react'
import AppointmentCartItem from './AppointmentCartItem';

const CartAppointment = ({ cart }) => {
    return (
        <div className='bg-white border-black border-2 px-10 py-2 rounded flex flex-col'>
            <div className='text-xl text-center py-4 font-bold'>Salon Cart</div>
            <div className='flex flex-col flex-wrap'>
                {cart?.map((item, i) => {
                    return (
                        <div key={i}>
                            <AppointmentCartItem item={item} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CartAppointment;