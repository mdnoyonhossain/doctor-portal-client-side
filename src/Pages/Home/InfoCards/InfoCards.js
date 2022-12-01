import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            _id: 1,
            name: 'Opening Hours',
            description: 'Lorem Ipsum is simply dummy text of the pri',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-cyan-500 to-blue-500'
        },
        {
            _id: 2,
            name: 'Opening Hours',
            description: 'Lorem Ipsum is simply dummy text of the pri',
            icon: marker,
            bgClass: 'bg-[#3A4256]'
        },
        {
            _id: 3,
            name: 'Opening Hours',
            description: 'Lorem Ipsum is simply dummy text of the pri',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-cyan-500 to-blue-500'
        },
    ]

    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20'>
            {
                cardData.map(card => <InfoCard key={card._id} card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;