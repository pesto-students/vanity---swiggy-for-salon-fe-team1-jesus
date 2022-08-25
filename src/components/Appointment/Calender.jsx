import React from "react";
import { useState } from "react";
import Calendar from "react-calender"

const AppointmentCalender = () => {

    const [calDate, setCalDate] = useState(new Date());

    return (
        <div className="w-1/2 pr-20">
            <Calendar onChange={setCalDate} value={calDate} />
        </div>
    )
}

export default AppointmentCalender;