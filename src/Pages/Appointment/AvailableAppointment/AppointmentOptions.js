import React from 'react';

const AppointmentOptions = ({ appointmentOptions, setTreatment }) => {
    const { name, price, slots } = appointmentOptions;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-[#19D3AE]">{name}</h2>
                <p>{slots.length > 0 ? slots[0]: 'try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions">
                    <label onClick={() => setTreatment(appointmentOptions)} disabled={slots.length === 0} htmlFor="booking-modal" className="btn btn-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;