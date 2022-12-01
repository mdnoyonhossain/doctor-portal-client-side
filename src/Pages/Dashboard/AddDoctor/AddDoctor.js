import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const { data: appointmentSpecialty = [] } = useQuery({
        queryKey: ['appointmentSpecialty'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentSpecialty`);
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {

        const image = data.image[0];
        const fromData = new FormData();
        fromData.append('image', image);

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_Imagebb_Api_Key}`, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const doctors = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imageData.data.url
                    }
                    fetch(`http://localhost:5000/doctors`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctors)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success(`Doctor added Successfully.`);
                            navigate('/dashboard/managedoctors');
                        })
                }
            })
    }

    return (
        <div className='p-6'>
            <h3 className='text-2xl font-bold'>Add a New Doctor</h3>

            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white mt-6 text-balck">

                <form onSubmit={handleSubmit(handleAddDoctor)} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block text-gray-800">Name</label>
                        <input type="text" {...register('name')} id="name" placeholder="Enter Your Name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-gray-800 focus:border-violet-400" style={{ border: '1px solid black' }} />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-800">Email</label>
                        <input type="email" {...register('email')} id="email" placeholder="Enter Your Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-gray-800 focus:border-violet-400" style={{ border: '1px solid black' }} />
                    </div>
                    <select {...register('specialty')} className="select select-bordered w-full">
                        {
                            appointmentSpecialty.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
                        }
                    </select>
                    <fieldset className="w-full space-y-1 text-gray-100">
                        <div className="flex">
                            <input type="file" {...register('image')} id="files" className="px-8 py-12 border-2 border-dashed rounded-md border-gray-700 text-gray-400 " />
                        </div>
                    </fieldset>
                    <button className="block w-full p-3 text-center rounded-lg text-white btn">Add Doctor</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;