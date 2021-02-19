import React, { useEffect, useState } from 'react';
import SideBar from '../../Shared/SideBar/SideBar';
import './AllPatients.css';

const AllPatient = () => {
    const [patients, setAllPatients] = useState([]);
    console.log(patients);
    useEffect(() => {
        fetch('http://localhost:5000/allPatients')
            .then(response => response.json())
            .then(data => setAllPatients(data))
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-12 col-md-8 offset-md-1">
                    {
                        patients.map(info => (

                            <div key={info._id} style={{ overflowX: "auto" }}>
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
                                        patients.map((patients, index) =>

                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{patients.name}</td>
                                                <td>{patients.gender}</td>
                                                <td>{patients.age}</td>
                                                <td>{patients.weight}KG</td>
                                                <td>{patients.phone}</td>
                                                <td>{patients.email}</td>
                                            </tr>
                                        )
                                    }
                                </table>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AllPatient;