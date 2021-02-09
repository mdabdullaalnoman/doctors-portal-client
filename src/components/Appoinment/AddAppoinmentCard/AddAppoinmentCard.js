import React, { useState } from 'react';
import AddModalFrom from '../AddModalFrom/AddModalFrom';
import './AddAppointmentCard.css';
const AddAppoinmentCard = ({ appInfo, date }) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (

        <div className="col-md-4 mb-5 appointment-hover">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{appInfo.subject}</h5>
                    <h6>{appInfo.visitingHour}</h6>
                    <p>{appInfo.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-brand similar-button">Book Appointment</button>
                    <AddModalFrom modalIsOpen={modalIsOpen}  closeModal={closeModal} date={date} appointmentOn={appInfo.subject}></AddModalFrom>
                </div>
            </div>
        </div>

    );
};

export default AddAppoinmentCard;