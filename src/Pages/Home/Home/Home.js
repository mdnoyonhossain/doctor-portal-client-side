import React from 'react';
import Banner from '../Banner/Banner';
import Contactus from '../Contactus/Contactus';
import DantalCare from '../DentalCare/DantalCare';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonial/Testimonials';

const Home = () => {
    return (
        <div className='w-11/12 m-auto mt-10'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DantalCare></DantalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contactus></Contactus>
        </div>
    );
};

export default Home;