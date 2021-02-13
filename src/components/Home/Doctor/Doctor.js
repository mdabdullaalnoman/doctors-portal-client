import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({doctorInfo}) => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" style={{width:'100%', height:'300px'}} src={`http://localhost:5000/${doctorInfo.image.img}`} alt=""/>
            <h4>{doctorInfo.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;