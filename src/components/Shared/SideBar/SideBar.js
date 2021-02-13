import React, { useState } from 'react';
import './Sidebar.css';
import { BsGrid3X3Gap , BsCalendar , BsPeople ,BsFileEarmarkText, BsPersonCheck, BsGear } from "react-icons/bs";
import { NavLink } from 'react-router-dom';


const SideBar = () => {
    // var btnContainer = document.getElementById("myDIV");

    // // Get all buttons with class="btn" inside the container
    // var btns = btnContainer.getElementsByTagName("btn");
    
    // // Loop through the buttons and add the active class to the current/clicked button
    // for (var i = 0; i < btns.length; i++) {
    //   btns[i].addEventListener("click", function() {
    //     var current = document.getElementsByClassName("active");
    //     current[0].className = current[0].className.replace(" active", "");
    //     this.className += " active";
    //   });
    // }
    return (
        <div className="sidebar-bg" id="myDIV" >
          <NavLink to="/dashboard"  activeClassName="selected"><p><span className="mr-3"><BsGrid3X3Gap /></span>Dashboard</p></NavLink>
          <NavLink to="/dashboard/appointment" activeClassName="selected" exact><p><span className="mr-3"><BsCalendar /></span>Appointment</p></NavLink>
          <NavLink to="/patient" activeClassName="selected"><p><span className="mr-3"><BsPeople /></span>Patients</p></NavLink> 
          <NavLink to="/Presentation" activeClassName="selected"><p><span className="mr-3"><BsFileEarmarkText /></span>Presentation</p></NavLink>
          <NavLink to="/addDoctor" activeClassName="selected"><p><span className="mr-3"><BsPersonCheck /></span>Add Doctor</p></NavLink>
          <p><span className="mr-3"><BsGear /></span>Settings</p>        
        </div>
    );
};

export default SideBar;