import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentCalender = ({ newDate, setNewDate, newTime, setNewTime }) => {

    const handleDate = (date) => {
        const newDate = String(date).split(" ");
        return newDate[0] + ", " + newDate[1] + " " + newDate[2] + " " + newDate[3]
    }

    return (
        <div className="w-1/2 font-lora">
            <div className="text-right text-3xl mb-4 pb-6"> {handleDate(newDate)} </div>
            <div className="border-black w-fit rounded float-right">
                <Calendar onChange={setNewDate} value={newDate} />
            </div>
            <div>
                <select value={newTime} onChange={(e) => setNewTime(e.target.value)} id="slots" className=" w-3/4 float-right mt-10 border-black border-2 rounded outline-none p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                    <option className='px-10'>Select a time slot</option>
                    <option value="00:09:00">9:00 AM</option>
                    <option value="00:10:00">10:00 AM</option>
                    <option value="00:11:00">11:00 AM</option>
                    <option value="00:12:00">12:00 PM</option>
                    <option value="00:13:00">1:00 PM</option>
                    <option value="00:14:00">2:00 PM</option>
                    <option value="00:15:00">3:00 PM</option>
                    <option value="00:16:00">4:00 PM</option>
                    <option value="00:17:00">5:00 PM</option>
                    <option value="00:18:00">6:00 PM</option>
                    <option value="00:19:00">7:00 PM</option>
                    <option value="00:20:00">8:00 PM</option>
                </select>
            </div>
        </div>
    )
}

export default AppointmentCalender;