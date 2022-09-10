import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sortSalons } from '../../redux/salons/salonSlice';

function Sort() {

    const [sort, setSort] = useState("");
    const dispatch = useDispatch();

    const handleSort = (e) => {
        console.log("handling sort")
        setSort(e.target.value)
        dispatch(sortSalons(sort))
    }

    return (
        <div className='items-center mx-auto w-1/5 ml-4'>
            <select value={sort} onChange={(e) => handleSort(e)} id="countries" className=" border-2 border-black w-full  text-gray-900 text-sm rounded outline-none p-[11px] ">
                <option className='px-10'>Sort</option>
                <option value="low">Price low to high</option>
                <option value="high">Price high to low</option>
            </select>
        </div>
    )
}

export default Sort