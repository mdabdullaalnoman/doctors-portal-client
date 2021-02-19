import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { BsGrid3X3Gap, BsCalendar, BsPeople, BsFileEarmarkText, BsPersonCheck, BsGear } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';


const SideBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/isDoctor', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email })
    })
      .then(res => res.json())
      .then(data => setIsDoctor(data))
  }, [])
  return (
    <div className="sidebar-bg" id="myDIV" >
      <NavLink to="/dashboard/appointment" activeClassName="selected"><p><span className="mr-3"><BsGrid3X3Gap /></span>Dashboard</p></NavLink>
      {isDoctor && <div>
        <NavLink to="/dashboard/appointment" activeClassName="selected" exact><p><span className="mr-3"><BsCalendar /></span>Appointment</p></NavLink>
        <NavLink to="/allPatient" activeClassName="selected"><p><span className="mr-3"><BsPeople /></span> All Patients</p></NavLink>
        <NavLink to="/Presentation" activeClassName="selected"><p><span className="mr-3"><BsFileEarmarkText /></span>Presentation</p></NavLink>
        <NavLink to="/addDoctor" activeClassName="selected"><p><span className="mr-3"><BsPersonCheck /></span>Add Doctor</p></NavLink>
        <NavLink to="/setting" activeClassName="selected"><p><span className="mr-3"><BsGear /></span>Settings</p></NavLink>
      </div>}
    </div>
  );
};

export default SideBar;