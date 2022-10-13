import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { debouncedSearchSalons } from '../../redux/salons/salonSlice';

const Search = () => {

    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const handleSearch = useCallback(() => {
        dispatch(debouncedSearchSalons(search));
    }, [search, dispatch])

    useEffect(() => {
        handleSearch()
    }, [search, handleSearch])


    return (
        <div className="w-3/5 phone:w-full">
            <div className="border-2 flex flex-row border-black text-gray-900 bg-white rounded-lg w-full">
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search…" className="py-2 w-full placeholder:text-gray-900 px-2 outline-none" />
                <button onClick={handleSearch} className="my-auto ml-auto bg-white px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
        </div>
    )
}

export default Search