import React from 'react';
import chair from '../../../assets/images/banner.webp'
import banner from '../../../assets/images/bg.png'

const Banner = () => {
    return (
        <div className="hero py-16" style={{background: `url(${banner})`}}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="" className="max-w-sm rounded-lg" />
                <div style={{marginRight: '125px'}}>
                    <h1 className="text-5xl font-bold text-[#3A4256]">Your New Smile Starts <br /> Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn text-white btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;