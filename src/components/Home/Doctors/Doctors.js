import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    const [doctorsS, setDoctorsS] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctorsS(data))
    }, [])
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                {
                    doctorsS.length ?
                        <div className="row">
                            {
                                doctorsS.map(info => <Doctor doctorInfo={info} key={info._id}></Doctor>)
                            }
                        </div>
                        :
                        <p className="text-center text-danger">loading...</p>
                }
            </div>
        </section>
    );
};

export default Doctors;