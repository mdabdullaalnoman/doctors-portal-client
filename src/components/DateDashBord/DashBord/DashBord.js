import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DashBord.css';
import SideBar from '../../Shared/SideBar/SideBar';
import { UserContext } from '../../../App';


const DashBord = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date)
    };
    useEffect(() => {
        fetch('http://localhost:5000/appointmentByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then((response) => response.json())
            .then(data => {
                setAppointments(data)
                setLoading(true)
            })
    }, [selectedDate]);

    return (
        <div className="container-fluid sidebar-left-bg">
            <div className="row">

                 <div className="col-12 col-md-2 ">
                    <SideBar></SideBar>
                </div>

                <div className="col-12 col-md-4 mt-5">
                    <Calendar
                        className="calendar"
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>

                <div className="col-12 col-md-6 mt-5">
                    <h2 className="text-brand text-center">Appointments {appointments.length}</h2>
                    {
                        appointments.length ?
                            <div style={{overflowX:"auto"}}>
                                {
                                    <table className="table table-borderless">
                                            <tr>
                                                <th className="text-secondary text-left" scope="col">Sr No</th>
                                                <th className="text-secondary" scope="col">Name</th>
                                                <th className="text-secondary" scope="col">Gender</th>
                                                <th className="text-secondary" scope="col">Age</th>
                                                <th className="text-secondary" scope="col">Weight</th>
                                                <th className="text-secondary" scope="col">Phone</th>
                                                <th className="text-secondary" scope="col">Email</th>
                                            </tr>
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