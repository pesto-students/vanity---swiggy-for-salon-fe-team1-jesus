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
            <select value={sort} onChange={(e) => handleSort(e)} id="countries" className=" border w-full border-gray-300 text-gray-500 text-sm rounded-lg outline-none p-[11px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                <option className='px-10'>Sort</option>
                <option value="low">Price low to high</option>
                <option value="high">Price high to low</option>
            </select>
        </div>
    )
}

export default Sort