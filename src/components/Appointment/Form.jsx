import React from "react";

const AppointmentForm = ({ handleChange, appUser }) => {
    return (
        <div className="flex flex-col w-1/2 pr-10">
            <div className="text-3xl pb-6">Enter personal details:</div>
            <div className="flex flex-col space-y-10 py-6">
                <label className="relative w-full block p-3 border-2 border-black rounded" htmlFor="name">
                    <input
                        className="w-full px-0 bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                        id="name"
                        type="text"
                        value={appUser.name}
                        onChange={(e) => handleChange(e)}
                        placeholder="name"
                    />

                    <span className="absolute text-xs font-medium text-black transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                        Name
                    </span>
                </label>
                <label className="relative w-full block p-3 border-2 border-black rounded" htmlFor="email">
                    <input
                        className="w-full px-0  bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                        id="email"
                        type="email"
                        value={appUser.email}
                        onChange={(e) => handleChange(e)}
                        placeholder="Email"
                    />

                    <span className="absolute text-xs font-medium text-black transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                        Email
                    </span>
                </label>
                <label className="relative w-full block p-3 border-2 border-black rounded" htmlFor="phone">
                    <input
                        className="w-full px-0  bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                        id="phone"
                        type="text"
                        value={appUser.phone}
                        onChange={(e) => handleChange(e)}
                        placeholder="Phone Number"
                    />

                    <span className="absolute text-xs font-medium text-black transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                        Phone
                    </span>
                </label>
                <label className="relative w-full block p-3 border-2 border-black rounded" htmlFor="req">
                    <input
                        className="w-full px-0  bg-transparent pt-3.5 pb-0 outline-none text-sm placeholder-transparent border-none focus:ring-0 peer"
                        id="req"
                        type="text"
                        value={appUser.req}
                        onChange={(e) => handleChange(e)}
                        placeholder="Special Requests"
                    />

                    <span className="absolute text-xs font-medium text-black transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                        Special Requests
                    </span>
                </label>
            </div>
        </div>
    )
}

export default AppointmentForm;