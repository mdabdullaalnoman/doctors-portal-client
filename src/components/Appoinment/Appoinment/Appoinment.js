import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AddAppointment from '../AddAppointment/AddAppointment';
import AppoinmentHeaderMain from '../AppoinmentHeaderMain/AppoinmentHeaderMain';

const Appoinment = () => {
    const [selectedDate , setSelectedDate] = useState(new Date());
    const handleDateChange = (date) =>{
        setSelectedDate(date)
    };
    return ( 

        <div style={{ background:'#a1cae2'}}>
           <Navbar></Navbar>
           <AppoinmentHeaderMain handleDateChange={handleDateChange}></AppoinmentHeaderMain>
           <AddAppointment date={selectedDate}></AddAppointment>
           <Footer></Footer>
        </div>

    );
};

export default Appoinment;