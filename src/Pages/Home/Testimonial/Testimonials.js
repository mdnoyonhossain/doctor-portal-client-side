import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people1.png';
import people3 from '../../../assets/images/people1.png';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const testimonialData = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: people3
        },
    ]

    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-[#0FCFEC] font-bold'>Testimonial</h4>
                    <h2 className='text-2xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='h-20' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    testimonialData.map(review => <Testimonial key={review._id} review={review}></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;