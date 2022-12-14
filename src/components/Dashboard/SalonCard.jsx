import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentSalon, setItem } from "../../redux/salons/salonSlice";

const SalonCard = ({ item }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleForward = () => {
        dispatch(setItem(item))
        dispatch(setCurrentSalon(item.salonId));
        navigate(`/salon/${item.salonId}`)
    }

    return (
        <div className="w-full px-8 pb-6 phone:px-0 font-lora" onClick={handleForward}>
            <div className="cursor-pointer w-full relative inline-block font-medium text-black group active:text-black focus:outline-none focus:ring">
                <span className="absolute inset-0 rounded transition-transform translate-x-1 translate-y-1 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>
                <span className="p-4 relative flex flex-row phone:flex-col px-8 py-3 bg-white rounded border-2 border-current">
                    <div className="w-1/5 phone:w-full">
                        <img alt="salon pic" src="https://vanity-frontend.s3.ap-south-1.amazonaws.com/website/salonpic.jpeg" />
                    </div>
                    <div className="flex w-full flex-col p-4 space-y-10 phone:space-y-4">
                        <div className="flex flex-row phone:flex-col">
                            <div className="text-2xl font-aboreto font-bold"> {item.name} </div>
                            <div className="mr-0 phone:mx-0 ml-auto text-xl"> Rating: {item.rating}/10 </div>
                        </div>
                        <div className="text-xl"> {item.city}, {item.pincode} </div>
                        <div className="flex flex-row phone:flex-col phone:space-y-4">
                            <div className="text-xl"> Average Cost: {item.avgCost}</div>
                            <div className="mr-0 ml-auto phone:mx-0 text-xl"> {item.bestFor} </div>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default SalonCard;