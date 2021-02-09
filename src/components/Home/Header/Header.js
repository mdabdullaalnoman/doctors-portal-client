import React, { useEffect } from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect( () =>{
        AOS.init({duration: 1000})
    },[])

    return (

        <div className=" header-container p-3 p-md-0">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <div data-aos="zoom-in"> <BusinessInfo></BusinessInfo></div>  
        </div>
    );
};

export default Header;