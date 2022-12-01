import React from 'react';

const Testimonial = ({ review }) => {
    const { name, location, description, image } = review;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{description}</p>
                <div className='flex jsutify-center items-center'>
                    <div className="card-actions mt-6">
                        <div className="avatar mr-2">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='ml-2'>
                        <h2 className="text-xl">{name}</h2>
                        <h2>{location}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;