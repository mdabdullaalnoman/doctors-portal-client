import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const AppoinmentHeaderMain = ({ handleDateChange }) => {

    return (
        <div className="container-fluid">
            <main style={{ height: '600px' }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1 my-3 my-md-0">
                    <h1 className="my-3" style={{ color: '#3A4256' }}>appoinment</h1>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-6 my-3 my-md-0">
                    <img src="https://i.imgur.com/VGQ1NfY.png" alt="chair" className="img-fluid" />
                </div>
            </main>
        </div>
    );
};

export default AppoinmentHeaderMain;