import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const DantalCare = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} alt="" className="max-w-sm rounded-lg" />
                <div className='lg:mx-24'>
                <h1 className="text-5xl font-bold text-[#3A4256]">Exceptional Dental <br /> Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DantalCare;