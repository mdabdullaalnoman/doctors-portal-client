import React, { useState } from 'react';
import AppointmentInfo from '../AppointmentInfo/AppointmentInfo';
import Clendar from '../Clendar/Clendar';
import SideBar from '../SideBar/SideBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DashBord = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    console.log(appointments);
    const handleDateChange = (date) => {
        setSelectedDate(date)

        fetch('http://localhost:5000/appointmentByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({date})
        })
            .then(data => setAppointments(data))
    };

    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-12 col-md-2">
                    <SideBar></SideBar>
                </div>

                <div className="col-12 col-md-4">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>

                <div className="col-12 col-md-6">
                    <AppointmentInfo appointments={appointments}></AppointmentInfo>
                </div>

            </div>
        </div>
    );
};

export default DashBord;