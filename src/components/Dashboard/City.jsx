import React from 'react'

const cities = [
    { name: "New Delhi", value: "New Delhi" },
    { name: "Mumbai", value: "Mumbai" },
    { name: "Bangalore", value: "Bangalore" },
    { name: "Hyderabad", value: "Hyderabad" },
    { name: "Jaipur", value: "Jaipur" },
    { name: "Chandigarh", value: "Chandigarh" }
]

function City({ city, setCity }) {

    return (

        <div className='items-center mx-auto w-1/5 phone:w-full mr-4'>
            <select value={city} onChange={(e) => setCity(e.target.value)} id="countries" className=" border-2 border-black w-full  text-gray-900 text-sm rounded outline-none p-[11px] ">
                <option className='px-10'>Pick a city..</option>
                {cities.map((item, i) => {
                    return (
                        <option key={i} value={item.value}> {item.name} </option>
                    )
                })}
            </select>
        </div>
    )
}

export default City