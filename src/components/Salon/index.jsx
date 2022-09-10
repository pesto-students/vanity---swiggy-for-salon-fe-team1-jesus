import React, { Suspense, useEffect } from "react";
import SalonCard2 from "./SalonCard2.jsx";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { setCurrentSalon } from "../../redux/salons/salonSlice";
import SalonSpinner from "./SalonSpinner.jsx";


const SalonDetails = ({ match, history }) => {

    const SalonServices = React.lazy(() => import('./Services.jsx'))
    const SalonCart = React.lazy(() => import('./Cart.jsx'))

    const dispatch = useDispatch()
    let id = useParams()
    useEffect(() => {
        dispatch(setCurrentSalon(id.id))
    })

    return (
        <div className="flex flex-col bg-cream font-lora space-y-8 items-center py-16">
            <SalonCard2 />
            <h2 className="text-3xl px-6 font-semibold pt-4">Salon Menu</h2>
            <Suspense fallback={<SalonSpinner />}>
                <div className="flex flex-row space-x-8 px-16 py-24 w-full">
                    <SalonServices />
                    <SalonCart />
                </div>
            </Suspense>
        </div>
    )
}

export default SalonDetails;