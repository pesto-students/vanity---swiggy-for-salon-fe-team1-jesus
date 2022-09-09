import React from "react";

const Filters = () => {
    return (
        <div className=" w-1/6">
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
                                    <li>
                                        <label className="flex items-center text-sm">
                                            <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                                            <span className="ml-3 font-medium">All</span>
                                        </label>
                                    </li>

                                    <li>
                                        <label className="flex items-center text-sm">
                                            <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                                            <span className="ml-3 font-medium">Hair Salon</span>
                                        </label>
                                    </li>

                                    <li>
                                        <label className="flex items-center text-sm">
                                            <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                                            <span className="ml-3 font-medium">Nail Salon</span>
                                        </label>
                                    </li>

                                    <li>
                                        <label className="flex items-center text-sm">
                                            <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                                            <span className="ml-3 font-medium">Spa & Massages</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="flex items-center text-sm">
                                            <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                                            <span className="ml-3 font-medium">Makeup Deals</span>
                                        </label>
                                    </li>
                                </ul>
                            </fieldset>
                        </div>
                        <div className="py-8">
                            <fieldset>
                                <legend className="text-xl font-medium">Price</legend>

                                <ul className="mt-6 flex flex-col space-y-4">
                                    <li>
                                        <label className="flex items-center text-sm">
                                            <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                                            <span className="ml-3 font-medium">All</span>
                                        </label>
                                    </li>

                                    <li>
                                        <label className="flex items-center text-sm">
                                            <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                                            <span className="ml-3 font-medium">₹₹₹₹</span>
                                        </label>
                                    </li>

                                    <li>
                                        <label className="flex items-center text-sm">
                                            <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                                            <span className="ml-3 font-medium">₹₹₹</span>
                                        </label>
                                    </li>

                                    <li>
                                        <label className="flex items-center text-sm">
                                            <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                                            <span className="ml-3 font-medium">₹₹</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="flex items-center text-sm">
                                            <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                                            <span className="ml-3 font-medium">₹</span>
                                        </label>
                                    </li>
                                </ul>
                            </fieldset>
                        </div>

                        <div className="py-8">
                            <fieldset>
                                <legend className="text-xl font-medium">Gender</legend>

                                <ul className="mt-6 flex flex-col space-y-4">
                                    <li>
                                        <label className="flex items-center text-sm">
                                            <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                                            <span className="ml-3 font-medium">All</span>
                                        </label>
                                    </li>

                                    <li>
                                        <label className="flex items-center text-sm">
                                            <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                                            <span className="ml-3 font-medium">Unisex</span>
                                        </label>
                                    </li>

                                    <li>
                                        <label className="flex items-center text-sm">
                                            <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                                            <span className="ml-3 font-medium">Women</span>
                                        </label>
                                    </li>

                                    <li>
                                        <label className="flex items-center text-sm">
                                            <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                                            <span className="ml-3 font-medium">Men</span>
                                        </label>
                                    </li>
                                </ul>
                            </fieldset>
                        </div>

                        <div className="py-8">
                            <fieldset>
                                <legend className="text-xl font-medium">Ratings</legend>

                                <ul className="mt-6 flex flex-col space-y-4">
                                    <li>
                                        <label className="flex items-center text-sm">
                                            <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                                            <span className="ml-3 font-medium">All</span>
                                        </label>
                                    </li>

                                    <li>
                                        <label className="flex items-center text-sm">
                                            <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                                            <span className="ml-3 font-medium"> 8 and above </span>
                                        </label>
                                    </li>

                                    <li>
                                        <label className="flex items-center text-sm">
                                            <input type="checkbox" className="w-6 h-6 border border-gray-200 rounded-md" />
                                            <span className="ml-3 font-medium">6 and above</span>
                                        </label>
                                    </li>
                                </ul>
                            </fieldset>
                        </div>
                    </div>
                </main>
                <footer className="flex flex-col space-y-4 items-center justify-between p-6">
                    <button className="text-sm font-medium text-gray-600 underline" type="button">Clear all</button>

                    <div className="cursor-pointer relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                        <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-pink group-hover:translate-y-0 group-hover:translate-x-0"></span>

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