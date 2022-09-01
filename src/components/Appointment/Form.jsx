import React from "react";
import { useState } from "react";

const AppointmentForm = () => {

    const [obj, setObj] = useState({
        email: "",
        name: "",
        phone: ""
    })

    const handleChange = e => {
        setObj(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    };

    return (
        <div className="flex flex-col w-1/2 pl-20 ml-20">
            <div className="text-3xl pb-6">Enter personal details:</div>
            <div className="flex flex-col space-y-4 py-6">
                <label className="relative w-3/4 block p-3 border-2 border-black rounded" htmlFor="name">
                    <input
                        className="w-full px-0 bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                        id="name"
                        type="text"
                        value={obj.name}
                        onChange={(e) => handleChange(e)}
                        placeholder="name"
                    />

                    <span className="absolute text-md font-medium text-black transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                        Name
                    </span>
                </label>
                <label className="relative w-3/4 block p-3 border-2 border-black rounded" htmlFor="email">
                    <input
                        className="w-full px-0  bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                        id="email"
                        type="email"
                        value={obj.email}
                        onChange={(e) => handleChange(e)}
                        placeholder="Email"
                    />

                    <span className="absolute text-md font-medium text-black transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                        Email
                    </span>
                </label>
                <label className="relative w-3/4 block p-3 border-2 border-black rounded" htmlFor="phone">
                    <input
                        className="w-full px-0  bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                        id="phone"
                        type="text"
                        value={obj.phone}
                        onChange={(e) => handleChange(e)}
                        placeholder="Phone Number"
                    />

                    <span className="absolute text-md font-medium text-black transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                        Phone
                    </span>
                </label>
            </div>
        </div>
    )
}

export default AppointmentForm;