// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// const Clendar = () => {
//     const [selectedDate, setSelectedDate] = useState(new Date());
//     const [ appointments, setAppointments ] = useState([]);

//     const handleDateChange = (date) => {
//         setSelectedDate(date)

//         fetch('http://localhost:5000/appointmentByDate' , {
//             method: 'POST',
//             headers:{'content-type': 'application/json'},
//             body: JSON.stringify({date})
//         })
//         .then(data =>setAppointments(data))
//     };

//     return (
//         <div>
//             <Calendar
//                 onChange={handleDateChange}
//                 value={new Date()}
//             />
//         </div>
//     );
// };

// export default Clendar;