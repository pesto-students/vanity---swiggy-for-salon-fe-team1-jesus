import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { applyPagination } from "../../redux/salons/salonSlice";

const pages = [1, 2, 3,];

const Pagination = () => {

    const [selected, setSelected] = useState(1)
    const dispatch = useDispatch();

    const handleSelect = (num) => {
        setSelected(num)
        dispatch(applyPagination(num))
    }

    const handlePrev = () => {
        const num = selected - 1;
        setSelected(prev => prev - 1)
        dispatch(applyPagination(num))
    }

    const handleNext = () => {
        const num = selected + 1;
        setSelected(prev => prev + 1)
        dispatch(applyPagination(num))
    }

    return (
        <>
            <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
                <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
                    <div className="flex items-center pt-3 text-gray-900 hover:text-indigo-700 cursor-pointer">
                        <button onClick={handlePrev} disabled={selected === 1} className="text-lg ml-3 font-medium disabled:text-gray-400 leading-none ">← Previous</button>
                    </div>
                    <div className="sm:flex hidden">
                        {pages.map((num, i) => {
                            return (
                                <p onClick={() => handleSelect(num)} key={i} className={`text-lg font-normal leading-none ${selected === num ? 'border-pink-400' : 'bg-transparent'} cursor-pointer text-gray-900 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2`} > {num} </p>
                            )
                        })}
                    </div>
                    <div className="flex items-center pt-3 text-gray-900 hover:text-indigo-700 cursor-pointer">
                        <button onClick={handleNext} disabled={selected === 3} className="text-lg font-normal disabled:text-gray-400 leading-none mr-3">Next →</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pagination;