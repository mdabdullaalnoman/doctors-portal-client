import React, { useEffect } from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonials from '../Testimonials/Testimonials';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div>
            <div className="container-fluid">
                <div data-aos="zoom-in" ><Header></Header></div>
                <div data-aos="zoom-in"><Services></Services></div>
                <div data-aos="zoom-in"> <FeaturedService></FeaturedService></div>
            </div>
            <div>
                <div data-aos="zoom-in"><MakeAppointment></MakeAppointment></div>
                <div data-aos="zoom-in"><Testimonials></Testimonials></div>
                <div data-aos="zoom-in"><Blogs></Blogs></div>
                <div data-aos="zoom-in"><Doctors></Doctors></div>
                <div data-aos="zoom-in"><Contact></Contact></div>
                <div data-aos="zoom-in"><Footer></Footer></div>  
            </div>
        </div>
    );
};

export default Home;