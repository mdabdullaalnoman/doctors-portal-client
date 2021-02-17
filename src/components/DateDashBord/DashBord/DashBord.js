import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DashBord.css';
import SideBar from '../../Shared/SideBar/SideBar';


const DashBord = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const [loading , setLoading] = useState(false);
    console.log(loading);
    const handleDateChange = (date) => {
        setSelectedDate(date)
    };
    useEffect(() => {
        fetch('http://localhost:5000/appointmentByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate })
        })
            .then((response) => response.json())
            .then(data => {
                setAppointments(data)
                setLoading(true)
            })
    }, [selectedDate]);


    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-12 col-md-2 ">
                    <SideBar></SideBar>
                </div>

                <div className="col-12 col-md-4 mt-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>

                <div className="col-12 col-md-6 mt-5">
                    <h2 className="text-brand text-center">Appointments</h2>
                    {
                        appointments.length ?
                            <div>
                                {
                                    <table className="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th className="text-secondary text-left" scope="col">Sr No</th>
                                                <th className="text-secondary" scope="col">Name</th>
                                                <th className="text-secondary" scope="col">Gender</th>
                                                <th className="text-secondary" scope="col">Age</th>
                                                <th className="text-secondary" scope="col">Weight</th>
                                                <th className="text-secondary" scope="col">Phone</th>
                                                <th className="text-secondary" scope="col">Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                appointments.map((appointment, index) =>

                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{appointment.name}</td>
                                                        <td>{appointment.gender}</td>
                                                        <td>{appointment.age}</td>
                                                        <td>{appointment.weight}KG</td>
                                                        <td>{appointment.phone}</td>
                                                        <td>{appointment.email}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                }
                            </div>
                            : <p className="text-center text-warning"> appointment not found in this date</p>
                   }
                </div>

            </div>
        </div>
    );
};

export default DashBord;