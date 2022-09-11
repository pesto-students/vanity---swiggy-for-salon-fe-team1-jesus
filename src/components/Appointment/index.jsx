import React, { useState } from "react";
import AppointmentCalender from "./Calendar.jsx";
import AppointmentForm from "./Form.jsx";
import Button from "../Button.jsx"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { sendBooking } from "../../redux/booking/bookingSlice";
import SalonCardAppointment from "./SalonCardAppointment.jsx";
import CartAppointment from "./CartAppointment.jsx";

const AppointmentPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { cart, totalCost, serviceIds, currSalonId } = useSelector((state) => state.cart)
    const { user } = useSelector((state) => state.auth)
    const [newDate, setNewDate] = useState(new Date());
    const [newTime, setNewTime] = useState("");
    const [appUser, setAppUser] = useState({
        "email": user.email ? user.email : "",
        "name": user.name ? user.name : "",
        "phone": user.phone ? user.phone : "",
    })
    const handleChange = e => {
        setAppUser(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    };

    const handleEndTime = () => {
        const splitTime = newTime.split(":");
        const endTime = Number(splitTime[1]) + 1
        if (endTime < 10) {
            return "00:0" + endTime + ":00"
        }
        else {
            return "00:" + endTime + ":00"
        }
    }

    const handleBookingDate = () => {
        let freshDate = newDate.toLocaleDateString();
        freshDate = freshDate.split("/")
        let finalString = freshDate[2] + "-" + freshDate[1] + "-" + freshDate[0]
        return finalString;
    }

    const handleAppointment = () => {
        navigate("/appointmentconfirmation")
        const bookingDate = handleBookingDate()
        const endTime = handleEndTime();
        const payload = {
            bookingDate: bookingDate,
            startTime: newTime,
            endTime: endTime,
            serviceIds: serviceIds,
            totalAmount: totalCost,
            paymentStatus: "Not done",
            salonId: currSalonId
        }
        dispatch(sendBooking(payload))
    }

    return (
        <div className="flex flex-col bg-lightPink font-lora space-y-8 items-center py-16">
            <div className="flex flex-row phone:flex-col phone:space-x-0 phone:px-6 space-x-20 justify-center">
                <SalonCardAppointment />
                <CartAppointment cart={cart} />
            </div>
            <div className="font-aboreto text-3xl font-bold pt-10">Book Appointment</div>
            <div className="flex flex-row phone:flex-col phone:space-x-0 phone:py-8 phone:px-6 phone:divide-x-0 space-x-8 px-[20%] py-14 w-full divide-black divide-x-2">
                <AppointmentForm appUser={appUser} handleChange={handleChange} />
                <AppointmentCalender newTime={newTime} setNewTime={setNewTime} newDate={newDate} setNewDate={setNewDate} />
            </div>
            <Button click={handleAppointment} clr="black" str="Book Appointment"></Button>
        </div>
    )
}

export default AppointmentPage;