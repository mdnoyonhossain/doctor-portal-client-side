import React from 'react';
import banner from '../../../assets/images/banner.webp'
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    return (
        <header className='w-11/12 m-auto my-12'>
            <div className="hero py-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} alt="" className="max-w-sm rounded-lg" />
                    <div style={{ marginRight: '125px' }}>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;