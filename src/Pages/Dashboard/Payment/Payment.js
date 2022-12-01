import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M6tYtAEQWGdw2jky8YwFdchYtFd0wIZYirZ0zKZM2pcRnrCtKG10jv0SoI4RwOlWkws8rXijiMzBg5C3N4wwx2Q00njTZXAPs');

const Payment = () => {
    const booking = useLoaderData();

    return (
        <div className='p-6'>
            <h3 className='text-3xl font-semibold'>Payment</h3>
            <p>Please Pay <b>${booking.price}</b> for your appointment on {booking.appointmentDate} at {booking.slot}</p>
            <div className='w-96 mt-8'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;