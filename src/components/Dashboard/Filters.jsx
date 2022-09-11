import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { applyFilters } from "../../redux/salons/salonSlice";

const allType = ["Haircut", "Nails", "Massage", "Spa", "Beard", "Waxing"];
const allGenders = ["Male", "Female", "Unisex"];
const allRatings = [8, 6, 0]

const Filters = ({ city, page }) => {

    const [type, setType] = useState([]);
    const [gender, setGender] = useState([]);
    const [rating, setRating] = useState([]);
    const dispatch = useDispatch()

    const handleTypeSelect = (item) => {
        const isSelected = type.includes(item);
        const newSelection = isSelected ? type.filter(currItem => currItem !== item) : [...type, item]
        setType(newSelection)
    }

    const handleGenderSelect = (item) => {
        const isSelected = gender.includes(item);
        const newSelection = isSelected ? gender.filter(currItem => currItem !== item) : [...gender, item]
        setGender(newSelection)
    }

    const handleRatingSelect = (item) => {
        const isSelected = rating.includes(item)
        const newSelection = isSelected ? rating.filter(currItem => currItem !== item) : [...rating, item]
        setRating(newSelection)
    }

    const handleClear = () => {
        setGender([]);
        setType([]);
        setRating([])
    }

    const handleApplyFilters = () => {
        const types = type.toString()
        const genders = gender[0];
        const ratings = rating.toString();
        const filtered = `bestFor=${genders}&rating=${ratings}&page=${page}&size=10&services=${types}&city=${city}`
        dispatch(applyFilters(filtered));
    }

    return (
        <div className=" w-1/6 phone:hidden">
            <form
                className="relative bg-white  mx-auto overflow-auto divide-y divide-black border-2 rounded-lg border-black"
                role="dialog"
                aria-label="Filters"
            >
                <header className="p-6 text-center">
                    <p className="text-lg font-medium">Filters</p>
                </header>
                <main className="flow-root p-6 overflow-y-auto">
                    <div className="-my-8 divide-y divide-black">
                        <div className="py-8">
                            <fieldset>
                                <legend className="text-xl font-medium">Type</legend>
                                <ul className="mt-6 flex flex-col space-y-4">
                                    {allType.map((item, i) => {
                                        const isSelected = type.includes(item)
                                        return (
                                            <li key={i}>
                                                <label className="flex items-center text-sm">
                                                    <input onChange={() => handleTypeSelect(item)} type="checkbox" checked={isSelected} className="w-6 h-6 border border-gray-200 rounded-md" />
                                                    <span className="ml-3 font-medium"> {item} </span>
                                                </label>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </fieldset>
                        </div>
                        <div className="py-8">
                            <fieldset>
                                <legend className="text-xl font-medium">Gender</legend>

                                <ul className="mt-6 flex flex-col space-y-4">
                                    {allGenders.map((item, i) => {
                                        const isSelected = gender.includes(item)
                                        return (
                                            <li key={i}>
                                                <label className="flex items-center text-sm">
                                                    <input onChange={() => handleGenderSelect(item)} type="checkbox" checked={isSelected} className="w-6 h-6 border border-gray-200 rounded-md" />
                                                    <span className="ml-3 font-medium"> {item} </span>
                                                </label>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </fieldset>
                        </div>

                        <div className="py-8">
                            <fieldset>
                                <legend className="text-xl font-medium">Ratings</legend>

                                <ul className="mt-6 flex flex-col space-y-4">
                                    {allRatings.map((item, i) => {
                                        const isSelected = rating.includes(item)
                                        return (
                                            <li key={i}>
                                                <label className="flex items-center text-sm">
                                                    <input onChange={() => handleRatingSelect(item)} type="checkbox" checked={isSelected} className="w-6 h-6 border border-gray-200 rounded-md" />
                                                    <span className="ml-3 font-medium"> {item} </span>
                                                </label>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </fieldset>
                        </div>
                    </div>
                </main>
                <footer className="flex flex-col space-y-4 items-center justify-between p-6">
                    <button onClick={handleClear} className="text-sm font-medium text-gray-600 underline" type="button">Clear all</button>

                    <div onClick={handleApplyFilters} className="cursor-pointer relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                        <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>

                        <span className="relative block font-bold px-8 py-3 rounded bg-white border-2 border-current">
                            Show Results
                        </span>
                    </div>
                </footer>
            </form>

        </div>
    )
}

export default Filters;