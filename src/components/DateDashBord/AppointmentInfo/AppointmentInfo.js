import React from 'react';

const AppointmentInfo = ({appointments}) => {
    return (
        <div>
             <h1>appointment {appointments.length}</h1>
        </div>
    );
};

export default AppointmentInfo;